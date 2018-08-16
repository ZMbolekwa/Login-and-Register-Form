import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, SeatsService, DashboardService } from '../services';
import{Seats} from'../models';
import { routing }  from '../app.routing';
import {ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertService} from '../services';
import { first } from 'rxjs/operators';



@Component({ 
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css', ]

})
export class SeatsComponent  implements OnInit {
  
  travellerForm: FormGroup;
  loading = false;
  submitted = false;

// seats: Seats[];
seatSelected: Seats[];

seatNo: string;


  constructor(private router: Router,private seatsService: SeatsService,private dashboardService: DashboardService, private userService: UserService, private formBuilder: FormBuilder,private alertService: AlertService) { }

 
  ngOnInit() {

    
    this.seatsService.getSeats();
 
  }

 

  select(seatSelected: Seats) {

    this.alertService.success('Seat selected successfully');
    console.log(seatSelected);
    this.seatNo = seatSelected.seatNo;
  }

      
  

  onSubmit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.travellerForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.addSeats(this.travellerForm.value)
        .pipe(first())
        .subscribe(
            data => {
              this.alertService.success( 'Payment successful.', true);
              this.dashboardService.getBookings();
                this.router.navigate(['/bookings']);
            },
            error => {
              this.alertService.error(error);
                this.loading = false;
            });
  }  

}





