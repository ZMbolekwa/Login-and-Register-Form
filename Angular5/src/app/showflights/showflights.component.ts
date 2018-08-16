import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, FlightService } from '../services';
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
  templateUrl: './showflights.component.html',
  styleUrls: ['./showflights.component.css', ]

})
export class ShowFlightComponent  implements OnInit {
  searchForm: FormGroup;
  userClaims: any;
  flights : Flights[];
  selectedFlight: Flights;
  dCity : string;
  aCity : string;
  dDate : string;
  aDate : string;
  cabin : string;
  dAirport : string;
  aAirport : string;
  airline: string;
  dTime: string;
  aTime: string;
 price: any;

 
  constructor(private router: Router, private userService: UserService, private flightService: FlightService, private formBuilder: FormBuilder,) { }

 
  ngOnInit() {
 
   
 
    // this.flights = JSON.parse(localStorage.getItem('flights'));

  //  this.flightService.getFlights();
 
  this.dCity = localStorage.getItem("dCity");
  this.aCity = localStorage.getItem("aCity");
  this.dTime = localStorage.getItem("dTime");
  this.aTime = localStorage.getItem("aTime");
  this.cabin = localStorage.getItem("cabin");




  this.flightService.getFlight(this.dCity,this.aCity,this.cabin);

  
  }


  show(selectedFlight: Flights) 
  {


   console.log(selectedFlight);
    
  
    this.dCity = selectedFlight.dCity;
    this.aCity = selectedFlight.aCity;
    // this.dDate = fli.dDate;
    // this.aDate = fli.aDate;
    this.cabin = selectedFlight.cabin;
    this.dAirport = selectedFlight.dAirport;
    this.aAirport = selectedFlight.aAirport;
    this.airline = selectedFlight.airline;
    this.price = selectedFlight.price;

    // this.calc = parseFloat(this.price) * parseFloat(this.travellers);
  }

  continue()
  {
    localStorage.setItem("dCity",this.dCity);
    localStorage.setItem("aCity",this.aCity);
    localStorage.setItem("dTime",this.dTime);
    localStorage.setItem("aTime",this.aTime);
    localStorage.setItem("cabin",this.cabin);
    localStorage.setItem("dAirport",this.dAirport);
    localStorage.setItem("aAirport",this.aAirport);
    localStorage.setItem("price",this.price);

    this.router.navigate(['/traveller']);
  }



}
