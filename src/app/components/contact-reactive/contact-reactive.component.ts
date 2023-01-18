import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsersService } from "../../services/users.service";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})

export class ContactReactiveComponent implements OnInit{
  user: string | undefined;
  password: string | undefined;

  contactForm!: FormGroup;
  
  constructor(
    private readonly fb: FormBuilder,

    public userService: UsersService,
    
    private http: HttpClient,

    private router: Router
    
    
    ) 
    {}

     login() {

    
      
       const use = {user: this.user, password: this.password};
       
       //console.log(user);
       this.userService.login(use).
       
       subscribe( // aqui evalua si entra o no a "/profile"
        
        data => {

          if(data.code==200){
            this.router.navigate(['/profile']) // va a perfil

          }else{
            console.log("Usuario o contraseña incorrecto")
            

          }

        
        }, (err)=>{
          console.log(err);
        });
     }


  

     register() {
      console.log("Vamos a registarnos");
    }

  ngOnInit(): void{
    this.contactForm = this.initForm();

  }

  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]

    
    })
  }
}
