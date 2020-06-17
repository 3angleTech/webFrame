/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/* tslint:disable:no-duplicate-string */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccessDeniedError, PageNotFoundError } from '~app-shared/core';

import { ISandboxList } from '../components/sandbox-list/sandbox-list.interface';

import { SandboxError } from './sandbox-error';

export interface IErrorSandboxTestInterface {
  record: Record<string, string>;
}

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
          label: 'Parse Invalid JSON',
          action: 'testJsonParseError',
        },
        {
          label: 'Read property from undefined object',
          action: 'testPropertyReadFromUndefinedObject',
        },
        {
          label: 'throw new AccessDeniedError()',
          action: 'testThrowAccessDeniedError',
        },
        {
          label: 'throw new PageNotFoundError()',
          action: 'testThrowPageNotFoundError',
        },
        {
          label: 'throw new SandboxError()',
          action: 'testThrowCustomSandboxError',
        },
      ],
    },
    {
      header: 'Router Resolver Errors',
      items: [
        {
          label: 'throw new AccessDeniedError()',
          route: '/sandbox/error-handling/resolver/AccessDeniedError',
        },
        {
          label: 'throw new PageNotFoundError()',
          route: '/sandbox/error-handling/resolver/PageNotFoundError',
        },
        {
          label: 'throw new SandboxError()',
          route: '/sandbox/error-handling/resolver/UnknownError',
        },
        {
          label: 'HTTP 403 Forbidden',
          route: '/sandbox/error-handling/resolver/Mock403',
        },
        {
          label: 'HTTP 404 Not Found',
          route: '/sandbox/error-handling/resolver/Mock404',
        },
        {
          label: 'HTTP 500 Internal Server Error',
          route: '/sandbox/error-handling/resolver/Mock500',
        },
      ],
    },
    {
      header: 'Router (CanActivate) Guard Errors',
      items: [
        {
          label: 'throw new AccessDeniedError()',
          route: '/sandbox/error-handling/can-activate/AccessDeniedError',
        },
        {
          label: 'throw new PageNotFoundError()',
          route: '/sandbox/error-handling/can-activate/PageNotFoundError',
        },
        {
          label: 'throw new SandboxError()',
          route: '/sandbox/error-handling/can-activate/UnknownError',
        },
        {
          label: 'HTTP 403 Forbidden',
          route: '/sandbox/error-handling/can-activate/Mock403',
        },
        {
          label: 'HTTP 404 Not Found',
          route: '/sandbox/error-handling/can-activate/Mock404',
        },
        {
          label: 'HTTP 500 Internal Server Error',
          route: '/sandbox/error-handling/can-activate/Mock500',
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

  private testThrowAccessDeniedError(): never {
    throw new AccessDeniedError('This is not the error you are looking for.');
  }

  private testThrowPageNotFoundError(): never {
    throw new PageNotFoundError('This is not the page you are looking for.');
  }

  private testJsonParseError(): void {
    this.log('»»» Test JSON.parse() error handling «««');
    const invalidJsonString: string = '{"name":"John Doe",}';
    JSON.parse(invalidJsonString);
  }

  private testPropertyReadFromUndefinedObject(): void {
    this.log('»»» Test "read property from undefined object" error handling «««');
    // tslint:disable-next-line:no-any
    const sandboxTestObject: IErrorSandboxTestInterface = {} as unknown as any;
    if (sandboxTestObject.record.noSuchProperty) {
      // Nothing to do.
    }
  }
}
