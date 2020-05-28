/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ISandboxList } from '../components/sandbox-list/sandbox-list.interface';

import { SandboxError } from './sandbox-error';

@Component({
  selector: 'app-error-sandbox',
  styleUrls: ['./error-sandbox.component.scss'],
  templateUrl: './error-sandbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorSandboxComponent implements OnInit {

  public actionLists: ISandboxList[] = [
    {
      header: 'Runtime Errors',
      items: [
        {
          label: 'Trow unknown error (SandboxError)',
          action: 'testThrowCustomSandboxError',
        },
      ],
    },
  ];

  constructor() {
  }

  public ngOnInit(): void {
  }

  public getPageTitle(): string {
    return 'Sandbox: Error handling tests';
  }

  public log(...args: unknown[]): void {
    // Avoid lint errors and console (dot) log searches.
    (console as { log: Function }).log(...args);
  }

  public executeMethodForAction(action: string): void {
    const actionCallback: unknown = this[action as keyof this];
    if (typeof actionCallback === 'function') {
      this.log(`»»» Triggering action: ${action} «««`);
      actionCallback.call(this);
    } else {
      this.log(`»»» Invalid action: ${action} «««`);
    }
  }

  private testThrowCustomSandboxError(): never {
    throw new SandboxError('An intentionally triggered SandboxError.');
  }
}
