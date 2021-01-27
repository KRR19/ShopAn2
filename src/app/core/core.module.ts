import { LocalStorage, LocalStorageService } from './services/local-storage.service';
import { GeneratorService } from './services/generator.service';
import { CONSTANTS } from './services/constant.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generatedString, GeneratorFactory } from './services/generator.factory';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: CONSTANTS, useValue: CONSTANTS },
    { provide: generatedString, useFactory: GeneratorFactory(17), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: LocalStorage }
  ]
})
export class CoreModule { }
