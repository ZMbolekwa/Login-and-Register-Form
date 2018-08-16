import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { FlightsComponent } from './flights';
import { AuthGuard } from './auth';
import { ShowFlightComponent  } from './showflights';
import { TravellerComponent  } from './traveller';
import { SeatsComponent  } from './seats';
import { PaymentComponent  } from './payment';
import { DashboardComponent  } from './dashboard';
import { BookingsComponent  } from './bookings';
import { AdminComponent  } from './admin';

const ROUTES: Routes = [
    // { path: 'flights', component: FlightsComponent,
    //   canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent, canActivate:[AuthGuard] },
    { path: 'showflights', component: ShowFlightComponent, canActivate:[AuthGuard]  },
    { path: 'traveller', component: TravellerComponent, canActivate:[AuthGuard]  },
    { path: 'seats', component: SeatsComponent,  canActivate:[AuthGuard]  },
    { path: 'payment', component: PaymentComponent, canActivate:[AuthGuard]  },
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]  },
    { path: 'bookings', component: BookingsComponent, canActivate:[AuthGuard]  },
    { path: 'admin', component: AdminComponent },
 

  // otherwise redirect to home
    { path: '**', redirectTo: '' }


 ];

 export const routing = RouterModule.forRoot(ROUTES);

