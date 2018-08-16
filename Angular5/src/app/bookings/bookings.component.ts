import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, DashboardService, FlightService } from '../services';
import{User, Flights} from'../models';
import { routing }  from '../app.routing';
import {ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({ 
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css', ]

})
export class BookingsComponent  implements OnInit {
  
  userClaims: any;
 
  accountholderName : string;
 


   constructor(private router: Router, private userService: UserService, private flightService: FlightService, private DashboardService: DashboardService, private formBuilder: FormBuilder,) { }

 
  ngOnInit() {
 
   
 
    // this.flights = JSON.parse(localStorage.getItem('flights'));

  //  this.flightService.getFlights();
 
  this.accountholderName = localStorage.getItem("accountholderName");



  
  }


}
