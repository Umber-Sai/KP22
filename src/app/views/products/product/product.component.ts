import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { CommonService } from 'src/app/shared/servises/common.service';
import { ProductType } from 'src/type/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product : ProductType = {} as ProductType
  subject : Subject<any> = new Subject<any>()

  constructor(private commonService: CommonService, private activatedRout : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe((params) => {
      if(params['id']) {
        this.commonService.getProduct(+params['id'])
          .subscribe({
            next : (data) => {
              this.product = data;
            },
            error : (error) => {
              console.error(error)
            }
          })
      }
    });
  }
}
