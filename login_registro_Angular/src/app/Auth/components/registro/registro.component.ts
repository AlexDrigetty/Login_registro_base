import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  fb  = inject(FormBuilder)
  private servicio = inject(AuthService)

  RegistroFormulario = this.fb.group({
    nombre: ["", [Validators.required]],
    apellidos: ["", [Validators.required]],
    correo: ["", [Validators.required, Validators.email]],
    contrasena: ["", [Validators.required]]
  })

  registrarse(){
    const data = this.RegistroFormulario.value

    const cargar_data = {
      nombre:data.nombre,
      apellidos: data.apellidos,
      correo: data.correo,
      contrasena: data.contrasena
    }

    this.servicio.registro(cargar_data).subscribe({
      next(res){
        console.log("Se registro correctamente", res)
        alert("Se ha registrado correctamente")
      },
      error(error){
        console.error("Ocurrio un error" , error)
      }
    })
  }
}
