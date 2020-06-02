/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { NgIf, NgIfContext } from '@angular/common';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { USER_ROLE } from '../other/user-role.enum';
import { AccessControlService } from '../services/access-control.service';

@Directive({
  selector: '[appIfUserHasRole]',
})
export class IfUserHasRoleDirective extends NgIf<boolean> {
  @Input()
  public set appIfUserHasRole(role: USER_ROLE) {
    super.ngIf = this.accessControlService.currentUserHasRole(role);
  }

  constructor(
    private readonly accessControlService: AccessControlService,
    _viewContainer: ViewContainerRef,
    templateRef: TemplateRef<NgIfContext<boolean>>,
    ) {
    super(_viewContainer, templateRef);
  }

}
