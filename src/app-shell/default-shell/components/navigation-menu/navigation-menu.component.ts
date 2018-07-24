/**
 * Provides the main navigation menu.
 */
import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  @HostBinding('class.app-navigation-menu')
  true;

  constructor() { }

  ngOnInit() {
  }

}
