import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile.components',
  templateUrl: './profile.components.component.html',
  styleUrls: ['./profile.components.component.css']
})
export class ProfileComponentsComponent  {
  name: any;
  user: any

  constructor(

    public userService: UsersService,

    private http: HttpClient,

    private router: Router,

    private _bar: AppComponent


   
    ) 
    {

      this.user = sessionStorage.getItem("user");
  
    
    }

  ngOnInit(): void{
      this._bar.on_sesion = true
     
  
  }


}
