import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule}  from '@angular/common';
import { ApiService } from '../api.service';
import { provideHttpClient, withFetch} from '@angular/common/http'
import { Data } from '../data';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule ,CommonModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ApiService]
         
})
export class ContactComponent {
    form: FormGroup
    meetingLink = ''
    


  constructor(private apiservice:ApiService, private fb:FormBuilder){
    this.form = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    })
  }

  bookMeeting(){
   if(this.form.valid){
    
    const data:Data = {

       user_name:  this.form.get('name')?.value,
       start_time: this.form.get('startTime')?.value,
       end_time: this.form.get('endTime')?.value

      // user_name: "john Doe",
      // start_time: "2024-11-28T10:00:00Z",
      // end_time : "2024-11-28T10:00:00Z"

    };

    console.log(data)

    //  appelle de la fonction pour envoyer les information backend
       this.apiservice.bookMeeting(data).subscribe({
        next:  response => {
          this.meetingLink = response.link;
           alert('Réservation réussie ! Lien Google Meet :' + this.meetingLink)
       },
       error: err => {
        if(err.status=== 400){
          alert("Données invalide, veuillez vérifier vos information")
        } else if (err.status === 500){
          alert('Problème interne du serveur , réessayer plus tard.')
        } else {
          alert('Erreur inconnue');
        }
        console.error('Erreur détèctée', err)

       }
       }
       
       )
   } else{
    console.log('error');
   }
   
   
  };

}



