import { Component } from '@angular/core';
import { ContactReactiveComponent } from '../contact-reactive/contact-reactive.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile.components',
  templateUrl: './profile.components.component.html',
  styleUrls: ['./profile.components.component.css']
})
export class ProfileComponentsComponent {
  name: any;
  constructor(

    public userService: UsersService

   
    ) 
    {

      this.name= userService.name.user;
    }

}
