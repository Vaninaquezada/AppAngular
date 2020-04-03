import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  usuario = new Usuario();
 
  Ingresar() {
    console.log(this.usuario);
    if(this.usuario.email == 'usuario@mail.com' && this.usuario.pass == '1234'){
        //tiene que llevar a home
        this.route.navigate(['home']);
    }else{
      //tiene que llevar a error
      this.route.navigate(['error']);
    }

  }
}
