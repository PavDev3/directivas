import { Directive, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[customLabel]',
})
export class CustomLabelDirective {
  errors$ = input<ValidationErrors | null | undefined>(
    (value: ValidationErrors | null | undefined) => {
      this.onErrorsChange(value);
    }
  );

  private onErrorsChange(value: ValidationErrors | null | undefined) {
    console.log('Errors:', value);
  }
}
