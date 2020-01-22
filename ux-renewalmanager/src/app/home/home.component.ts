import { Component, OnInit } from '@angular/core';
import { RenewalsService } from '../renewals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  renewals = null;
  selectedRenewal = null;
  selectedRenewalId = null;

  constructor(private renewalsService: RenewalsService) { }

  ngOnInit() {
    this.getRenewals();
  }

  getRenewals() {
    this.renewalsService.getRenewals()
    .subscribe(data => { this.renewals = data;
    });
  }

  select(value) {
    this.selectedRenewal = value;
    this.selectedRenewalId = value.id;
  }

}
