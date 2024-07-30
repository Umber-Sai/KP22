import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/shared/servises/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  popupStatus = false;
  subscription: Subscription | null = null;

  constructor(private commonSrvice: CommonService) {
    
  }

  ngOnInit(): void {
    this.subscription = this.commonSrvice.popupTimer.subscribe((param: boolean)=>{
      this.popupStatus = param
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  closePopup () {
    this.popupStatus = false
  }

}
