/**
 * The sandbox feature module main component. This component should only link
 * to lazy-loaded sub-modules.
 */
import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-sandbox-feature',
  styleUrls: ['./sandbox-feature.component.scss'],
  templateUrl: './sandbox-feature.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SandboxFeatureComponent implements OnInit {
  @HostBinding('class.app-sandbox-feature')
  public componentClass: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

  public getPageTitle(): string {
    return 'Sandbox';
  }
}
