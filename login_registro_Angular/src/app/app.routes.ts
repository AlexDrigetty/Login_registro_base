import { Routes } from '@angular/router';
import { RegistroComponent } from './Auth/components/registro/registro.component';
import { LoginComponent } from './Auth/components/login/login.component';

export const routes: Routes = [
    {path:"", component: RegistroComponent},
    {
        path: "login", component: LoginComponent
    }
];
