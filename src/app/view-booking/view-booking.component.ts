import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss'],
})
export class ViewBookingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  onBooking(){
    this.router.navigate(['/addbooking'])
  }
}
