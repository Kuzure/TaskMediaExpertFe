import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGetProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input()
  displayedColumns: string[];
  @Input()
  productList: IGetProduct[];
  @Input()
  itemsPerPage: number;
  @Input()
  currentPage: number;
  @Input()
  totalCount: number;
  @Input()
  maxPage: number;

  @Output()
  public addProduct: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public handlePage: EventEmitter<any> = new EventEmitter<any>();
}
