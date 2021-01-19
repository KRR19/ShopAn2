import { Component, OnInit } from '@angular/core';

import { Category } from '../product/Models/category.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name = 'Cerebras';
  description = `Faster time to solution with the CS-1
  Designed for deep learning, the CS-1 delivers more performance than a cluster of traditional machines, in a single system. This means faster time to solution at far greater power and space efficiency.
  The CS-1 is powered by the revolutionary Wafer-Scale Engine (WSE), fits directly into standard data center infrastructure and is easily programmable with today’s ML frameworks.`;
  price = 500000;
  category: Category = Category.ExternalCPU;
  isAvailable = true;
}
