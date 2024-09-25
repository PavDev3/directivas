import { Component } from '@angular/core';
import { ProductPageComponent } from '../../pages/product-page/product-page.component';

@Component({
  standalone: true,
  selector: 'app-directivas',
  imports: [ProductPageComponent],
  template: `
    <h1>Directivas</h1>
    <app-product-page></app-product-page>
  `,
})
export class DirectivasComponent {}
