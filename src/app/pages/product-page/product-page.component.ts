import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-product-page',
  imports: [ReactiveFormsModule, CommonModule],

  template: `<h4>Product Page</h4>
    <hr />
    <form [formGroup]="myForm">
      <div class="row g-3 align-items-center mb-3">
        <div class="col-auto">
          <label>Nombre:</label>
        </div>
        <div class="col-auto">
          <input formControlName="name" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span>Algo de información</span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button (click)="changeColor()" type="submit" class="btn btn-primary">
            Cambiar Color
          </button>
        </div>
      </div>
    </form>
    <pre class="mt-5">
      {{ myForm.get('name')?.errors | json }}
    </pre
    >
    <p>Color: {{ color }}</p>`,
})
export class ProductPageComponent {
  readonly #formBuilder = inject(FormBuilder);
  readonly myForm = this.#formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
  });

  public color: string = 'red';

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
