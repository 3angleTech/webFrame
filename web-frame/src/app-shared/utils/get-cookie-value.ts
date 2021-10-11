/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
/**
 * Simple function for reading a cookie.
 *
 * @see https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
 */
export function getCookieValue(cookieName: string): string {
  const matchArray: RegExpMatchArray = document.cookie.match(`(^|[^;]+)\\s*${cookieName}\\s*=\\s*([^;]+)`);
  return matchArray ? matchArray.pop() : '';
}
