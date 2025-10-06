import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  fb = inject(FormBuilder)
  private servicio = inject(AuthService)


  LoginFormulario = this.fb.group({
    correo: ["", [Validators.required, Validators.email]],
    contrasena: ["", [Validators.required]]
  })

  logearse() {

    this.servicio.login(this.LoginFormulario.value).subscribe({
      next:(user)=>{
        console.log("los datos son correctos ya ingresaste", user)
        alert("Felicidades ya ingresaste a tu cuenta creada")
      },
      error(error){
        console.error("Ocurrio un error", error)
      }
    })
  }


}
