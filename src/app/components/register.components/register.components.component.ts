import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


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

    existente: string | undefined;

  constructor(
    public userService: UsersService,
    private router: Router
    
    ) {}

    checkValue(type: any){

   }

   set_type(set: any){
    if(this.type){
      this.tipo = "admin"

    }else{
      this.tipo = "user"

    }
   }
    
    register() {
      this.set_type(this.type)
      
      const user = { user: this.user, password: this.password, type: this.tipo};
      //console.log(user)
      
      this.userService.register(user)
      
      .subscribe(
        
        data => {

          if(data.code==301){ // crea user

            console.log("este usuario se creo")
          
            this.router.navigate(['']) // va a login
            
            

          }else{
            console.log("este usuario ya existe")
          
            this.existente = "Este usuario ya existe"


          }

        
        }, (err)=>{
        console.log(err);

      });
      
    }
  }
