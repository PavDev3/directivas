import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-product-page',
  imports: [],

  template: `<h4>Product Page</h4>
    <hr />
    <form>
      <div class="row g-3 align-items-center mb-3">
        <div class="col-auto">
          <label>Nombre:</label>
        </div>
        <div class="col-auto">
          <input type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span>Algo de información</span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-primary">Cambiar Color</button>
        </div>
      </div>
    </form>`,
})
export class ProductPageComponent {}
