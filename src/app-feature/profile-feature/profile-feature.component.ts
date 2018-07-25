/**
 * Profile feature module's main component.
 */
import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-feature',
  templateUrl: './profile-feature.component.html',
  styleUrls: ['./profile-feature.component.scss'],
})
export class ProfileFeatureComponent implements OnInit {
  @HostBinding('class.app-profile-feature')
  true;

  constructor() { }

  ngOnInit() {
  }
}
