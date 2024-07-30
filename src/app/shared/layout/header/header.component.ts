import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/servises/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm = this.fb.group({
    search : ['']
  })
  constructor(private fb: FormBuilder, private commonService : CommonService) { }

  ngOnInit(): void {
  }

  searchEvent(): void {
    this.commonService.search$.next(this.searchForm.get('search')!.value!);
    // console.log(this.searchForm.value)
  }

}
