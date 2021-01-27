import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const generatedString = new InjectionToken<string>('generatedString');

export function GeneratorFactory(n: number){
  return (generator: GeneratorService): string => generator.generate(n);
}
