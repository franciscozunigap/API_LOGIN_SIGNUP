import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {

  constructor(
    private router: Router


  )
  {}

  title = 'Formulario WEB';
  on_sesion: any


  cerrar_sesion(){
    this.router.navigate(['/'])
    this.on_sesion = false
  
    sessionStorage.clear();

  }


}



