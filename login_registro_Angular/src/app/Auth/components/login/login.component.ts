import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  fb = inject(FormBuilder)
  private servicio = inject(AuthService)
  private ruta = inject(Router)


  LoginFormulario = this.fb.group({
    correo: ["", [Validators.required, Validators.email]],
    contrasena: ["", [Validators.required]]
  })

  logearse() {

    this.servicio.login(this.LoginFormulario.value).subscribe({
      next:(user)=>{
        console.log("los datos son correctos ya ingresaste", user)
        alert("Felicidades ya ingresaste a tu cuenta creada")
        const rol = user.rol as "ADMIN" | "ROL" |"CLIENTE"
        const lugar = rol === "ADMIN" ? "/admin": rol === "CLIENTE" ? "/cliente" : "/rol"

        this.ruta.navigateByUrl(lugar)
      },
      error(error){
        console.error("Ocurrio un error", error)
      }
    })
  }


}
