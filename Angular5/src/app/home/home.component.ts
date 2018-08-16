import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, FlightService, AlertService } from '../services';
import{User, Flights} from'../models';
import { routing }  from '../app.routing';
import {ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({ 
  selector: 'ngbd-datepicker-popup', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', ]



})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  userClaims: any;
  flights : Flights[];
  flight: Flights;


  dCity : string;
  aCity : string;
  dDate : string;
  aDate : string;
  cabin : string;
  dTime: string;
  aTime: string;


  constructor(private router: Router, private userService: UserService, private flightService: FlightService, private alertService: AlertService, private formBuilder: FormBuilder,) { }

 
  ngOnInit() {
     this.searchForm = this.formBuilder.group({
            deCity: ['', Validators.required],
            arCity: ['', Validators.required],
            dd1: ['', Validators.required],
            ad1: ['', Validators.required],
            cabins: ['', Validators.required]
        });

    this.flightService.getFlightsCity();

 
  }

 search()
 {
  this.dCity = ((document.getElementById("deCity") as HTMLInputElement).value);
  this.aCity = ((document.getElementById("arCity") as HTMLInputElement).value);
  // this.dDate = ((document.getElementById("dd1") as HTMLInputElement).value);
  // this.aDate = ((document.getElementById("ad1") as HTMLInputElement).value);
  this.cabin = ((document.getElementById("cabins") as HTMLInputElement).value);
  

    localStorage.setItem("dCity",this.dCity);
    localStorage.setItem("aCity",this.aCity);
    localStorage.setItem("dTime",this.dTime);
    localStorage.setItem("aTime",this.aTime);
    localStorage.setItem("cabin",this.cabin);


  // localStorage.setItem('flights', JSON.stringify(this.flights));
  this.flightService.getFlight(this.dCity,this.aCity,this.cabin);

  this.router.navigate(['/showflights']);

//  if(this.flightService.showFlight.length < 1)
//  {
//    alert("No available flights match your search,please try again");
//  } 
//  else
//  {
//   this.router.navigate(['/']);
//  }


//   if(this.dCity == this.aCity)
//   {
//     alert("Departure City can't be the same as the Arrival City");
//   }
//   else if(this.dDate == this.aDate)
//   {
//     alert("Departure Date can't be the same as the Arrival Date");
//   }
//   else if(this.cabins == '')
//   {
//     alert("Please fill all required fields");
//   }

}

Logout(){
  localStorage.clear();
 // localStorage.removeItem('userToken');
  this.router.navigate(['/login']);
this.alertService.success('Signed out successfully');
}
}
