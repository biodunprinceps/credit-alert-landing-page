import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  loan_amount!:any;
  profit!:any
  repayment_amount: number = 0;
  repayment_date!:any

  mobileNav = false;

  slider1 = true;
  slider2 = false;

  options: Options = {
    floor: 10000,
    ceil: 0,
    step: 1000
  };
  interval: any;
  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
    this.getOfferData()
    // this.setTime()
    // this.interval = setInterval(() => {
    //   this.initiateSlider()
    // }, 2000)
  }

  ngOnDestroy(): void {
      clearInterval(this.interval)
  }

  getOfferData(){
    this.loan_amount = 700000;
    this.options = {...this.options, ceil: this.loan_amount};
    this.profit = 0.15 * parseInt(this.loan_amount);
    let today = new Date();
    if (today.getDate() <= 15){
      let month = today.getMonth();
      let year = today.getFullYear();
      let newDate = new Date(year, month + 1, 0).toDateString();
      // let newDate = new Date(year,month,15).toDateString();
      this.repayment_date = newDate;
    }else{

      this.profit = 0.25 * parseInt(this.loan_amount);
      console.log(this.profit);
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      // let newDate = new Date(year,month,15).toDateString();
      let newDate = new Date(year, month + 1, 0).toDateString();
      this.repayment_date = newDate;
    }
    this.repayment_amount = this.profit + parseInt(this.loan_amount);
  }


  reCalcRepayment(evt:ChangeContext): void {
    let today = new Date();
    this.profit = 0.15 * parseInt(this.loan_amount);
    if(today.getDate() > 15){
      this.profit = 0.25 * parseInt(this.loan_amount);
    }

    this.repayment_amount = this.profit + evt.value
    console.log(evt.value,this.profit);
  }

  initiateSlider():any{
    this.slider1 = !this.slider1;
    this.slider2 = !this.slider2;
  }

  toggleMobileNav(){
    this.mobileNav = !this.mobileNav;
  }

}
