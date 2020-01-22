import { Component, Input } from '@angular/core';
import { Renewal } from '../renewal';

@Component({
  selector: 'app-renewaldetails',
  templateUrl: './renewaldetails.component.html',
  styleUrls: ['./renewaldetails.component.scss']
})
export class RenewaldetailsComponent {
  private renewal_: Renewal;

  @Input() set renewal(value: Renewal) {
    this.renewal_ = value;
  }
  get renewal(): Renewal {
    return this.renewal_;
  }

  update() {

  }
}
