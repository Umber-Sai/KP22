import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/servises/common.service';
import { ProductType } from 'src/app/type/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  popupStatus: boolean = false;
  products: ProductType[] = [];
  subscription: Subscription | null = null
  searchText: string = ''

  constructor(public commonService: CommonService) {

  }

  ngOnInit(): void {
    if (this.commonService.searchText) {
      this.commonService.searchProduct().subscribe({
        next: (res) => {
          this.products = res
        }
      })
    } else {
      this.popupStatus = true;
      this.commonService.getProducts().subscribe({
        next: (params) => {
          this.products = params;
          this.popupStatus = false;
        },
        error: (error) => {
          this.popupStatus = false;
          console.error(error)
        }
      })
    }

    this.commonService.search$.subscribe(() => {
      this.commonService.searchProduct().subscribe({
        next: (res) => {
          this.products = res
          console.log(this.products)
        }
      })
    })
  }

}


