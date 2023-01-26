import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as JsEncryptModule from 'jsencrypt';



@Component({
  selector: 'app-register.components',
  templateUrl: './register.components.component.html',
  styleUrls: ['./register.components.component.css']
})
export class RegisterComponentsComponent {
  
    user: string | undefined;
    password: string | undefined;
    type: string | undefined;
    tipo: string | undefined;
    user_register_false: any;
    userForm!: FormGroup;
    passwordform!: FormGroup;
    existente: string | undefined;
    pass_second: any;
    public_key: any;
    incorrect: any;
    pass_encrypt: any;
    encryptMod: any;
    cypherText: any; 


    constructor(

    private readonly us: FormBuilder,
    private readonly pss: FormBuilder,

    public userService: UsersService,

    private router: Router
    
    ) 
    {

      this.encryptMod = new JsEncryptModule.JSEncrypt()

    }


  checkValue(type: any){
  
  }

  // Encripta

  encrypt(key: any, dato: any) {

  this.encryptMod.setPublicKey(key);
  this.cypherText = this.encryptMod.encrypt(dato);

  return this.cypherText

  }

  // Guarda tipo de usuario


  set_type(set: any){
  if(this.type){
    this.tipo = "admin"

  }else{
    this.tipo = "user"

  }
  }

  // Inicia sesion

  sesion(){
  
  

  this.pass_second = true
    
  
  const use = {user: this.user}

  this.userService.sesion_register(use). //comprueba existencia del usuario 

  subscribe( 
    
    data => {

      if(data.public_key != undefined){
        this.pass_second = true
        this.user_register_false = false

        this.public_key = data.public_key; 
  
      }else{
        this.pass_second = false
        this.existente = "Usuario ya existe"
        
      }

    
    }, (err)=>{
      console.log(err);
    });
    

    
  }

  // Registra
  
  register() {
    this.set_type(this.type)
    this.pass_encrypt = this.encrypt(this.public_key, this.password); 

    const user = {user: this.user, password: this.pass_encrypt, type: this.tipo};

    this.userService.register(user)
    
    .subscribe(
      
      data => {

        if(data.code==301){ 

          console.log("Created")
        
          this.router.navigate(['']) // va a login
          
          

        }else{
        
          this.existente = "Este usuario ya existe"


        }

      
      }, (err)=>{
      console.log(err);

    });
    
      
    
  }

  ngOnInit(): void{
    this.user_register_false = true;
    this.userForm = this.initForm_user();
    this.passwordform = this.initForm_pass();
    

  }

  initForm_user(): FormGroup{
    return this.us.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]]
    })


  }


  initForm_pass(): FormGroup{
    return this.pss.group({
      password: ['', [Validators.required, Validators.minLength(3)]],
      type: ['']
    })
  }
   
}
