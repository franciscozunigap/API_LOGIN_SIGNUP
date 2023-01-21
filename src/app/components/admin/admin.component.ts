import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';  
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name: any;
  user: any;
  password: string | undefined;
  id: string | undefined;
  refresh: undefined;
  
  update:any;
  usuarios: any;

  constructor(
    private userService: UsersService,

    private http: HttpClient,

    private router: Router,
    


  ){
    //this.name= userService.name.user;
    this.name = sessionStorage.getItem("user");
  
    //let refresh = document.getElementById('refresh');
    

  }

 


  ngOnInit(): void {
    if(this.name){
      this.view()
      
    }else{
      console.log("reingrese user")
    }
    
    
  }


  view(){
    //console.log("view")

    this.userService.view().  

      subscribe(
        data => {
          this.usuarios=data;
          //console.log(this.usuarios)
        }
      )
    
    




      }
      
      delete(deleted: any) {

      
        this.userService.delete(deleted)
        
        .subscribe(
          
          data => {
  
            if(data.code==200){ // actualizado
             
              location.reload();
              //this.router.navigate(['/admin'])
  
            }else{ //400  no actualizo
              console.log("no eliminado")
      
            }
  
          
          }, (err)=>{
          console.log(err);
  
        });
      }

      save_data(use:any){ // guardar id para agrega al body de la solicitud en update
        this.userService.saveData(use)
     
        
      }



    }
  
    
