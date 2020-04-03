import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nueva Aplicación';
  name: string;
 
  usuario = { email: '', pass: '' };
 
  Ingresar() {
    console.log(this.usuario);
  }
}
