import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';  
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  new_data: any
  new_user: any
  new_password: any
  react_item: any
  act: any
  constructor(
    private userService: UsersService,

    private http: HttpClient,

    private router: Router,

  ){
    this.react_item = userService.save_item
  }

  for_update(id: any, new_user:any, new_password: any) { 
    //recibir id del body "react_item" y fusionar con nuevos datos del formulario

    this.new_data = {id: id, user: new_user, password: new_password}


    this.userService.update(this.new_data)
    
    .subscribe(
      
      data => {

        if(data.code==204){ // actualizado
          
          //console.log("actualizado")
          this.router.navigate(['/admin'])


        }else{ //code == 400 no actualizo
          //console.log("no actualizado")
  
        }

      
      }, (err)=>{
      console.log(err);

    });
  }
}

