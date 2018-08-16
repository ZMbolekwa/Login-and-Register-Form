import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, DashboardService } from '../services';
import{User,Payment} from'../models';
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
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css', ]

})
export class PaymentComponent  implements OnInit {
  
  paymentForm: FormGroup;
  loading = false;
  submitted = false;

  payment: Payment;

  constructor(private router: Router,
     private userService: UserService,
     private dashboardService: DashboardService,
      private formBuilder: FormBuilder,
      private alertService: AlertService) { }

 
  ngOnInit() {
 
    this.paymentForm = this.formBuilder.group({
      accountType: ['', Validators.required],
      cardNumber: ['', Validators.required],
      accountholderName: ['', Validators.required],
      expirryDate: ['', Validators.required],
      cvv: ['', Validators.required],
     
      
  });

  
  }

  get f() { return this.paymentForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.paymentForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.addPayment(this.paymentForm.value)
        .pipe(first())
        .subscribe(
            data => {
              this.alertService.success( 'Payment successful.', true);
              this.dashboardService.getPayments();
                this.router.navigate(['/dashboard']);
            },
            error => {
              this.alertService.error(error);
                this.loading = false;
            });
}




}
