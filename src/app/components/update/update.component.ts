import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';  
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent{
  name: any
  new_data: any
  id: any;
  new_user: any
  new_password: any
  react_item: any
  act: any
  form=  new FormGroup({
    new_user: new FormControl(),
    new_password: new FormControl()
  }) ;
  
  constructor(
    private userService: UsersService,

    private http: HttpClient,

    private router: Router

  ){
    this.react_item = userService.save_item
    this.name = sessionStorage.getItem("user_access");
    this.id = sessionStorage.getItem("id");
  }

  onsubmit(){
    console.log(this.form.value);
  }
  
  for_update(id: any, new_user:any, new_password: any) { 
    
    this.new_data = {id: id, user: new_user, password: new_password}

    this.userService.update(this.new_data)
    
    .subscribe(
      
      data => {

        if(data.code==204){ // actualizado

          this.router.navigate(['/admin'])


        }else{ 
          console.log("no actualizado")
  
        }

      
      }, (err)=>{
      console.log(err);

    });
  }
  
}

