import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';  
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: string | undefined;
  password: string | undefined;
  id: string | undefined;

  usuarios: any;

  constructor(
    private userService: UsersService,

    private http: HttpClient,

    private router: Router,


  ){}

  ngOnInit(): void {
    this.view()
  }

  view(){
    console.log("view")

    this.userService.view().  

      subscribe(
        data => {
          this.usuarios=data;
          console.log(this.usuarios)
        }
      )
    
    



    }
  
    delete(){

    

    }
  }

  