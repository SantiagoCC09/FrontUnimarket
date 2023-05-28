import { Component } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario: UsuarioDTO;
  registrado: boolean;
  alerta!: Alerta;

  constructor(private authService: AuthService) {
    this.usuario = new UsuarioDTO();
    this.registrado = false;
  }

  public registrar() {
    const objeto = this;
    this.authService.registrar(this.usuario).subscribe({
      next: data => {
        objeto.alerta = new Alerta(data.respuesta, "success");
        console.log("Registrado");
        
        
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
        console.log("Error registro");
      }
    });
    console.log(this.usuario.nombre);
    console.log(this.usuario.password);
    
  }



  private guardarUsuario(usuario: UsuarioDTO) {
    // Aquí debes implementar la lógica para guardar el usuario en el almacenamiento o base de datos
    // Puedes usar servicios, APIs o cualquier otra forma de persistencia de datos
    // Por ejemplo, puedes utilizar Firebase, MongoDB u otras opciones

    // Ejemplo de guardado en el almacenamiento local (localStorage)
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  public sonIguales(): boolean {
    return this.usuario.password === this.usuario.confirmarPassword;
  }
}
