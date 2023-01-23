import { Component, OnInit } from '@angular/core';
import { ContactReactiveComponent } from '../contact-reactive/contact-reactive.component';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile.components',
  templateUrl: './profile.components.component.html',
  styleUrls: ['./profile.components.component.css']
})
export class ProfileComponentsComponent implements OnInit  {
  name: any;
  ido: any
  user: any
  constructor(

    public userService: UsersService,

    private http: HttpClient,

    private router: Router

   
    ) 
    {

      this.user = sessionStorage.getItem("user");
    
    }


    ngOnInit(): void {
      
  
      
      
    }

}
