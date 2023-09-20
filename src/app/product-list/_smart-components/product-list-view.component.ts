import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetProduct, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css'],
})
export class ProductListViewComponent implements OnInit {
  productList: IGetProduct[] = [];
  itemsPerPage: number = 5;
  public currentPage = 1;
  totalCount: number = 1;
  maxPage: number = 1;
  displayedColumns: string[] = ['idex', 'code', 'name', 'price'];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
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

  public handlePage(e: any) {
    this.currentPage = e.pageIndex + 1;
    this.itemsPerPage = e.pageSize;

    this.getPageableProductList();
  }

  addProduct() {
    this.router.navigate(['product/add']);
  }
}
