import { Component } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario:UsuarioDTO;

  constructor(){
    this.usuario=new UsuarioDTO;
  }
  public ingresar(){
    console.log(this.usuario);
  }
}
