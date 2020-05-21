/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { logging } from 'protractor';

/**
 * Checks if the provided browser logs contains a single known error.
 */
export function withExpectedErrorForApiEndpoint(
  logs: logging.Entry[],
  apiEndpoint: string,
): boolean {
  if (logs.length === 1) {
    const firstLog: logging.Entry = logs[0];
    // TODO: Find a way to remove the known/expected errors from the browser console.
    if (firstLog.message.includes(apiEndpoint)) {
      return true;
    }
  }

  return false;
}
