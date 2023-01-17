import { Component } from '@angular/core';
import { ContactReactiveComponent } from '../contact-reactive/contact-reactive.component';


@Component({
  selector: 'app-profile.components',
  templateUrl: './profile.components.component.html',
  styleUrls: ['./profile.components.component.css']
})
export class ProfileComponentsComponent {
  name: ContactReactiveComponent["name"];

}
