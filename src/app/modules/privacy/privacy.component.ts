import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  mobileNav = false;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleMobileNav(){
    this.mobileNav = !this.mobileNav;
  }

}
