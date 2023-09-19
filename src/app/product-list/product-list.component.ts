import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['idex', 'code', 'name', 'price'];
  productList: Product[] = [];
  itemsPerPage: number = 5;
  public currentPage = 1;
  totalCount: number = 1;
  maxPage: number = 1;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.getPageableProductList();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex + 1;
    this.itemsPerPage = e.pageSize;

    this.getPageableProductList();
  }
  getPageableProductList() {
    this.productService
      .getPageableProductList(this.currentPage, this.itemsPerPage)
      .subscribe((res) => {
        this.productList = res.result;
        this.totalCount = res.totalCount;
        this.maxPage = res.totalPages;
        this.currentPage = res.currentPage;
      });
  }

  addProduct() {
    this.router.navigate(['product/add']);
  }
}
