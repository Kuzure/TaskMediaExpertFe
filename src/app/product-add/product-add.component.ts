import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  isLoginFailed = false;
  errorMessage = '';

  constructor(private router: Router, private productService: ProductService) {}

  public addProductForm = new FormGroup({
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required),
  });

  public onBack() {
    this.router.navigate(['/product']);
  }

  getErrorMessage(field: string) {
    if (this.addProductForm?.get(field)?.hasError('required')) {
      return 'wprowadź dane';
    }
    return;
  }

  public onSubmit() {
    if (!this.addProductForm.invalid) {
      const value = JSON.stringify(this.addProductForm.value);
      this.productService.addProduct(JSON.parse(value)).subscribe(
        () => {
          this.router.navigate(['/product']);
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
  }
}
