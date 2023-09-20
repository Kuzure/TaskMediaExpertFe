import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent {
  isLoginFailed = false;
  errorMessage = '';

  constructor(private router: Router, private productService: ProductService) {}

  public onBack() {
    this.router.navigate(['/product']);
  }

  public onSubmit(product: IProduct) {
    this.productService.addProduct(product).subscribe(
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
