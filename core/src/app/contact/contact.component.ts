import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule}  from '@angular/common';
import { ApiService } from '../api.service';
import { Data } from '../data';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule ,CommonModule, FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ApiService]
         
})
export class ContactComponent {
    form: FormGroup
    meetingLink = ''
    isCopied = false; // Etat de l'icone
    load = false; // Etat de load pour ne pas s'afficher
  

    //Copy le text 
    copyText(element:HTMLElement): void {
      const text = element.textContent || '';
      navigator.clipboard.writeText(text).then(() =>{
          this.isCopied = true; // change l'icône 
          setTimeout(()=> this.isCopied = false, 2000)
      }).catch(err =>{
        console.error('Echec de la copie: ', err)
      })
    };

// creation de l'injectable pour router


  constructor(private apiservice:ApiService, private fb:FormBuilder, private router:Router ){
    this.form = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    })
  }

  bookMeeting(){
    
    

   if(this.form.valid){
    this.load = !this.load;

    const data:Data = {

       user_name:  this.form.get('name')?.value,
       email: this.form.get('email')?.value,
       start_time: this.form.get('startTime')?.value,
       end_time: this.form.get('endTime')?.value

      // user_name: "john Doe",
      // start_time: "2024-11-28T10:00:00Z",
      // end_time : "2024-11-28T10:00:00Z"

    };


    //  appelle de la fonction pour envoyer les information backend
       this.apiservice.bookMeeting(data).subscribe({
        next:  response => {
          
          this.meetingLink = response.link;
           alert('Réservation réussie ! Lien Google Meet :' + this.meetingLink)
       },
       error: err => {
        // etat de load
        setTimeout(()=> this.load = false, 2000)

        if(err.status=== 400){
          alert("Données invalide, veuillez vérifier vos information")
        } else if (err.status === 500){
          alert('Problème interne du serveur , réessayer plus tard.')
        } else {
        
          
        }
        console.error('Erreur détèctée', err);

      }});
   } else{
    console.log('error');
   }};

  // Fonction pour naviger a home 
  goToHome(): void{

    this.meetingLink = '' // Retiriger ver l'accuille
    // Pour reintialiser le formulaire
    this.form.reset({
      user_name: '',
      email : '',
      start_time: '',
      end_time: ''

    });
    
  };




}



