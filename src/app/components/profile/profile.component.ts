import { getTestBed } from '@angular/core/testing';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { takeWhile } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private data:any=[];
  
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.apiService.getSingleUserList().subscribe((response: any) => {     
      this.data = response.data
    }, (error: any) => {
      alert(error.error.error)
    })
  }

}
