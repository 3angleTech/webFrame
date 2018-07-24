/**
 * Provides the DefaultShellComponent.
 */
import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-default-shell',
  templateUrl: './default-shell.component.html',
  styleUrls: ['./default-shell.component.scss'],
})
export class DefaultShellComponent implements OnInit {
  @HostBinding('class.app-default-shell')
  true;

  constructor() { }

  ngOnInit() {
  }

}
