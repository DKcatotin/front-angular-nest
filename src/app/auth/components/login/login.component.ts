import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private http=inject(HttpClient)

  loginForm=new FormGroup({
    email: new FormControl("",[Validators.email,Validators.required]),
    password: new FormControl ("",Validators.required)
  })
  funIngresar(){
    this.http.get("h")
    //alert("Ingresando...")
  }
}
