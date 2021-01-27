import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }
}

export const LocalStorage = window.localStorage;
