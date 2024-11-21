import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule}  from '@angular/common';
import { ApiService } from '../api.service';
import { provideHttpClient, withFetch} from '@angular/common/http'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule ,CommonModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ApiService]
         
})
export class ContactComponent {

  userName = '';
  startTime = '';
  endTime = '';
  meetingLink = '';

  constructor(private apiservice:ApiService){}

  bookMeeting(){
    const data = {
      user_name:  this.userName,
      start_time: this.startTime,
      end_time: this.endTime
    };

    //  appelle de la fonction pour envoyer les information backend
      this.apiservice.bookMeeting(data).subscribe(
        (response) => {
          this.meetingLink = response.link;
          alert('Réservation réussie ! Lien Google Meet :' + this.meetingLink)
        }
      )
  };

}



