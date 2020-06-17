/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

export class SandboxError implements Error {
  public name: string = 'A custom SandboxError';

  constructor(public message: string) {
  }

}
