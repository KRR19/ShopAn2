import { ProductModel } from './../../../product/Models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  isDirty = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: ProductModel =
      this.route.snapshot.data.resolvedData;
    console.log(resolvedData);
  }

}
