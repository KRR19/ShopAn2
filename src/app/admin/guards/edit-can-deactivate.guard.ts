import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditComponent } from 'src/app/admin/component/edit/edit.component';


@Injectable({
  providedIn: 'root'
})
export class EditCanDeactivateGuard implements CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('dirty:', component.isDirty);
    if (component.isDirty) {
      return confirm('You don\'t save product changes');
    }
    return true;
  }

  constructor() {
  }
}
