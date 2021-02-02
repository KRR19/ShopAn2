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
    // так не получиться задать часть данных, а часть не задавать, а оставить без изменения.
    // например, первый раз задали все данные, а второй раз хочу изменить только email
    this.configeValue = value;
  }
}
