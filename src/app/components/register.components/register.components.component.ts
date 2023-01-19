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
    confirmPassword: string | undefined;
    passwordError: boolean | undefined;

    existente: string | undefined;

  constructor(
    public userService: UsersService,
    private router: Router
    
    ) {}

    register() {
      const user = { user: this.user, password: this.password};

      
      this.userService.register(user)
      
      .subscribe(
        
        data => {

          if(data.code==301){

            console.log("este usuario se creo")
          
            this.router.navigate(['/login']) // va a perfil

          }else{ //code == 300
            console.log("este usuario ya existe")
          
            this.existente = "Este usuario ya existe"
            
            
            

          }

        
        }, (err)=>{
        console.log(err);

      });
    }
  }
