import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CommonService } from 'src/app/shared/servises/common.service';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  popupStatus: boolean = false;
  errorMsgStatus: boolean = false;
  successMsgStatus: boolean = false;
  orderForm = this.fb.group({
    product : [{value : '', disabled : true}, Validators.required],
    name : ['', [Validators.required, Validators.pattern(/^[а-яА-Я]+$/)]],
    lastName : ['', [Validators.required, Validators.pattern(/^[а-яА-Я]+$/)]],
    tel : ['', {
      validators : [Validators.required, CustomValidators.tel],
      updateOn : 'blur'
    }],
    country : ['', [Validators.required, Validators.pattern(/^[а-яА-Яa-zA-z]+$/)]],
    index : ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    address : ['', [Validators.required, Validators.pattern(/^[а-яА-Яa-zA-z0-9\/\ \-]*$/)]],
    comment : [''],
  });

  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, private http : HttpClient, private commonService : CommonService) {
    
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if(params['id']) {
        this.orderForm.get(['product'])?.setValue(params['id'])
        console.log(this.orderForm.get(['product'])?.value)
      }
    });
  }

  sendOrder() {
    this.popupStatus = true;
    this.errorMsgStatus = false;
    if (!this.orderForm.valid) return;
    const body = {
      name: this.orderForm.get('name')?.value,
      last_name: this.orderForm.get('lastName')?.value,
      phone: this.orderForm.get('tel')?.value,
      country: this.orderForm.get('country')?.value,
      zip: this.orderForm.get('index')?.value,
      product: this.orderForm.get('product')?.value,
      address: this.orderForm.get('address')?.value,
      comment: this.orderForm.get('comment')?.value,
    }
    console.log(body)
    this.commonService.createOrder(body)
      .subscribe((response) => {
        this.popupStatus = false
        if (response.success && !response.message) {
          this.successMsgStatus = true;
          // this.orderForm.reset();  //конфликтует
          // this.orderForm.reset(this.orderForm.value);  //не работает
          this.orderForm.markAsPristine(); //не работает
          this.orderForm.markAsUntouched(); //не работает
          //как сделать ресет?
          setTimeout(() => {
            this.successMsgStatus = false;
          }, 4000)
        } else {
          this.errorMsgStatus = true;
        }

      })

  }
}
