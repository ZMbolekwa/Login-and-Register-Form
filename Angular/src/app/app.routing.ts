import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './auth';

const ROUTES: Routes = [
    // { path: 'flights', component: FlightsComponent,
    //   canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent, canActivate:[AuthGuard] },
 
 

  // otherwise redirect to home
   { path: '**', redirectTo: '' }


 ];

 export const routing = RouterModule.forRoot(ROUTES);

