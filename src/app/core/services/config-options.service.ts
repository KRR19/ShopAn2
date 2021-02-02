import { IConfige } from './../models/confige.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configeValue!: IConfige;

  public get confige(): IConfige {
    return this.configeValue;
  }

  public set confige(value: IConfige) {
    this.configeValue = value;
  }
}
