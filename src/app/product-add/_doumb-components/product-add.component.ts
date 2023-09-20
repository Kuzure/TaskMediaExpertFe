import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  @Input()
  isLoginFailed: boolean;
  @Input()
  errorMessage: string;

  constructor() {}

  public addProductForm = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required),
  });

  @Output()
  public back: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  getErrorMessage(field: string) {
    if (this.addProductForm?.get(field)?.hasError('required')) {
      return 'wprowadź dane';
    }
    return;
  }

  public submit() {
    this.addProductForm.markAllAsTouched();

    if (!this.addProductForm.invalid) {
      const value = JSON.stringify(this.addProductForm.value);
      this.addProduct.emit(JSON.parse(value));
    }
  }
}
