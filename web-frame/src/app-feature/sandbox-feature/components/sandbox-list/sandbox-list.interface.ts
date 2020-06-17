/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

export interface ISandboxListItemAction {
  label: string;
  action: string;
}

export interface ISandboxListItemLink {
  label: string;
  route: string;
}

export type SandboxListItem = ISandboxListItemAction | ISandboxListItemLink;

export interface ISandboxList {
  header: string;
  items: SandboxListItem[];
}
