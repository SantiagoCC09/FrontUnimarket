import { Component } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: UsuarioDTO;
  alerta: Alerta | undefined;

  constructor(private router: Router, private authService: AuthService, private tokenService: TokenService) {
    this.usuario = new UsuarioDTO();
  }

  public ingresar() {
    this.authService.login(this.usuario).subscribe(
      data => {
        this.tokenService.login(data.respuesta.token);
      },
      error => {
        this.alerta = new Alerta(error.error.respuesta, "danger");
      }
    );
  }
}
