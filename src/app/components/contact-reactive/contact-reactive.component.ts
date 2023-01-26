import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsersService } from "../../services/users.service";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as JsEncryptModule from 'jsencrypt';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';






@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})

export class ContactReactiveComponent implements OnInit{
  user: any;
  password: any;
  id: any;

  incorrect: string | undefined;

  contactForm!: FormGroup;

  passform!: FormGroup;



  pass_condition: any;
  public_key: any;

  pass_encrypt: any;

  encryptMod: any;

	cypherText: any; 

  user_false: any


  
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly fb2: FormBuilder,

    public userService: UsersService,
    
    private http: HttpClient,

    private router: Router,




    
    
    ) 
    {
      this.encryptMod = new JsEncryptModule.JSEncrypt()
      

    }



    encrypt(key: any, dato: any) {
	
			this.encryptMod.setPublicKey(key);
			this.cypherText = this.encryptMod.encrypt(dato);


      return this.cypherText
		
	}

 



    sesion(){
      const use = {user: this.user}

      this.userService.sesion(use). //comprueba existencia del usuario 

      subscribe( 
        
        data => {

          //console.log(data)

          if(data.public_key != undefined){
            this.pass_condition = true
            this.user_false = false

            this.public_key = data.public_key; //guardar public key
            //console.log(this.public_key)

            

          }else{
            this.pass_condition = false
            this.incorrect = "Usuario o contraseña incorrecto"
           
            
          }

        
        }, (err)=>{
          console.log(err);
        });
     }


      
    



     login() {


      
      // encriptar password ingresada

    
      
      this.pass_encrypt = this.encrypt(this.public_key, this.password); 

      const use = {user: this.user, password: this.pass_encrypt};

      console.log(use)


      
      
      sessionStorage.setItem("user", this.user);
       
       
      this.userService.login(use).
       
       subscribe( // aqui evalua si entra o no a "/profile"
        
        data => {

          

          if(data.code==200){
            this.router.navigate(['/profile']) // va a perfil
          

          }else if(data.code==202){
            this.router.navigate(['/admin'])
             
            

          }else{
            this.incorrect = "Usuario o contraseña incorrecto"
           
            
          }

          // borrar sesión

        
        }, (err)=>{
          console.log(err);
        });

        
        
        
     }


  

     register() {
      //console.log("Vamos a registarnos");
    }

  ngOnInit(): void{
    this.user_false = true
    this.contactForm = this.initForm();
    this.passform = this.initForm_pass();
   

  }

  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    }
    
    )

    
  
  }
  initForm_pass(): FormGroup{
    return this.fb2.group({
      password: ['', [Validators.required, Validators.minLength(3)]]

    })

  }
}
