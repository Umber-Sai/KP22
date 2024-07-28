import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductType } from '../type/product.type';
import { BodyType, ResponceType } from '../type/response.type';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  popupTimer: Observable<boolean>;
  productToOrder: string = '';
  search$: Subject<string> = new Subject<string>();
  searchText : string = ''

  constructor(private http : HttpClient) {
    this.popupTimer = new Observable((observer) => {
      setTimeout(() => {
        observer.next(true)
      }, 10000);
    });

    this.search$.subscribe(param => {
      this.searchText = param
    })
  }

  getProducts (): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  }

  getProduct (id: number): Observable<ProductType> {
    return this.http.get<ProductType>('https://testologia.ru/tea?id=' + id);
  }

  createOrder (body : {}): Observable<ResponceType> {
    return this.http.post<ResponceType>('https://testologia.ru/order-tea', body);
  }

  searchProduct (): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea?search=' + this.searchText);
  }
}
