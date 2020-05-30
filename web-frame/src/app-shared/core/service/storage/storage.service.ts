/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable, InjectionToken } from '@angular/core';

/**
 * Service for storing data in the browser. We should never user directly browser specific api like localStorage or sessionStorage,
 * this service must be used instead.
 */
export interface IStorageService {
  /**
   * @param key The key of the object that will be saved in the storage.
   * @param object The target object.
   */
  set<T>(key: string, object: T): void;

  /**
   * @param key The key of the object that will be retrieved from the storage.
   */
  get<T>(key: string): T;
}
export const IStorageService = new InjectionToken('IStorageService');

@Injectable()
export class StorageService implements IStorageService {
  public set<T>(key: string, object: T): void {
    localStorage.setItem(key, JSON.stringify(object));
  }

  public get<T>(key: string): T {
    try {
      const object = JSON.parse(localStorage.getItem(key));
      return <T>object;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}
