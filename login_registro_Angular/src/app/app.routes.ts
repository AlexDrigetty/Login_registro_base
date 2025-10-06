import { Routes } from '@angular/router';
import { RegistroComponent } from './Auth/components/registro/registro.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { AdminComponent } from './Modulos/admin/admin.component';
import { RolComponent } from './Modulos/rol/rol.component';
import { ClienteComponent } from './Modulos/cliente/cliente.component';

export const routes: Routes = [
  {
    path: '',
    component: RegistroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'rol',
    component: RolComponent,
  },
  {
    path: "cliente",
    component: ClienteComponent,
  },

  {
    path: "**",
    redirectTo: "" 
  }
];
