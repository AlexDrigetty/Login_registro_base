import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  fb  = inject(FormBuilder)
  private servicio = inject(AuthService)
  private ruta = inject(Router)

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
      next:(res)=>{
        console.log("Se registro correctamente", res)
        alert("Se ha registrado correctamente")
        this.ruta.navigateByUrl('/login');
      },
      error(error){
        console.error("Ocurrio un error" , error)
      }
    })
  }
}
