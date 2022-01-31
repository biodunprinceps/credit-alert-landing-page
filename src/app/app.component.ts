import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut',[
      transition(':enter',[
          style({transform:'translateX(-100%)', opacity:1}),
          animate('600ms ease-in', style({transform:'translateX(0%)', opacity:0}))
      ]),
  //     transition(':leave',[
  //      style({transform:'translateX(0%)', opacity:1}),
  //      animate('600ms ease-out', style({transform:'translateX(100%)', opacity:1}))
  //  ])
   ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Credit Alert';
  loan_amount!:any;
  profit!:any
  repayment_amount: number = 0;
  repayment_date!:any

  slider1 = true;
  slider2 = false;

  options: Options = {
    floor: 10000,
    ceil: 0,
    step: 1000
  };
  interval: any;

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
    this.repayment_amount = this.profit + parseInt(this.loan_amount);
    let today = new Date();
    if (today.getDate() < 15){
      let month = today.getMonth();
      let year = today.getFullYear();
      let newDate = new Date(year,month,15).toDateString();
      this.repayment_date = newDate;
    }else{
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      let newDate = new Date(year,month,15).toDateString();
      this.repayment_date = newDate;
    }
  }


  reCalcRepayment(evt:ChangeContext): void {
    this.profit = 0.15 * parseInt(this.loan_amount);
    this.repayment_amount = this.profit + evt.value
    console.log(evt.value,this.profit);
  }

  initiateSlider():any{
    this.slider1 = !this.slider1;
    this.slider2 = !this.slider2;
  }

}
