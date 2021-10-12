/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgIf, NgIfContext } from '@angular/common';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { USER_PERMISSION } from '../other/user-permission.enum';
import { AccessControlService } from '../services/access-control.service';

@Directive({
  selector: '[appIfUserHasPermission]',
})
export class IfUserHasPermissionDirective extends NgIf<boolean> {
  // eslint-disable-next-line accessor-pairs
  @Input()
  public set appIfUserHasPermission(permission: USER_PERMISSION) {
    super.ngIf = this.accessControlService.currentUserHasPermission(permission);
  }

  constructor(
    private readonly accessControlService: AccessControlService,
    _viewContainer: ViewContainerRef,
    templateRef: TemplateRef<NgIfContext<boolean>>,
  ) {
    super(_viewContainer, templateRef);
  }

}
