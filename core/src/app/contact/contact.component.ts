import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  myForm!: FormGroup 

  constructor( private fb:FormBuilder, private http:HttpClient){

    // this.myForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   subject: ['', Validators.required],
    //   message:  ['', Validators.required]
    // });

  }

  onSubmit(){
    const formData = this.myForm.value;

    // this.http.post('http://localhost:8000/api/send-message', formData).subscribe(response =>{
    //   console.log("Form send to backend", response);
    // });
  }

}
