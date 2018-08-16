import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './directives';
import { AuthGuard } from './auth';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ErrorInterceptor } from './helpers';
import { AlertService,  UserService, FlightService, DashboardService, SeatsService } from './services';
import { HomeComponent } from './home';
import { FlightsComponent } from './flights';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ShowFlightComponent  } from './showflights';
import { SeatsComponent  } from './seats';
import { TravellerComponent  } from './traveller';
import { PaymentComponent  } from './payment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard';
import { BookingsComponent } from './bookings';
import { AdminComponent } from './admin';

@NgModule({
    imports: [
       NgbModule.forRoot(),
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        routing,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        FlightsComponent,
        LoginComponent,
        RegisterComponent,
        ShowFlightComponent ,
        SeatsComponent,
        TravellerComponent,
        PaymentComponent,
        DashboardComponent,
        BookingsComponent,
        AdminComponent
     
    ],
    providers: [
        AuthGuard,
        AlertService,
        FlightService,
        DashboardService,
        UserService,
        SeatsService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        

    
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }