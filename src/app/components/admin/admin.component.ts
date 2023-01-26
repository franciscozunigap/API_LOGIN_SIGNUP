import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';
import { UsersService } from 'src/app/services/users.service';  

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

    private _bar: AppComponent
    


  ){

    this.name = sessionStorage.getItem("user");    

  }

 


  ngOnInit(): void {
    if(this.name){
      this._bar.on_sesion = true
      this.view()
      
      
    }else{
      console.log("failed")
    }
    
    
  }

  // Vista de usuarios

  view(){
  
    this.userService.view().  

      subscribe(
        data => {
          this.usuarios=data;
        }
  )}
      
  
  // Borrar usuario
      
  delete(deleted: any) {

      
        this.userService.delete(deleted)
        
        .subscribe(
          
          data => {
  
            if(data.code==200){ // actualizado
             
              location.reload();
    
  
            }else{ //no actualizado
              console.log("no actualizado")
      
            }
  
          
          }, (err)=>{
          console.log(err);
  
        });
  }

 // Guardar id 

  save_data(use:any){ 
        sessionStorage.setItem("user_access", use.user)
        sessionStorage.setItem("id", use.id)  
  }

}
  
    
