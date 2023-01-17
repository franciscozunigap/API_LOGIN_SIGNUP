import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-register.components',
  templateUrl: './register.components.component.html',
  styleUrls: ['./register.components.component.css']
})
export class RegisterComponentsComponent {
  
    name: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
    passwordError: boolean | undefined;

  constructor(
    public userService: UsersService
    
    ) {}

    register() {
      const user = { name: this.name, password: this.password };

      
      this.userService.register(user).subscribe(data => {
        console.log(data);
      });
    }
  }
