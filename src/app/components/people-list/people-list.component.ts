import { getUsers } from './../../reducers/user-reducers';
import { UserListRequestAction, UserListSuccessAction } from './../../actions/user-action';
import { RootReducerState, getUserLoading, getUserLoaded } from './../../reducers/index';
import { getTestBed } from '@angular/core/testing';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { takeWhile } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  private data: any = [];

  loading = false;
  error = false;
  isAlive = true;

  constructor(
    private apiService: ApiService,
    private store: Store<RootReducerState>,
  ) { }

  ngOnInit() {
    this.getData()
  }

  ngOnDestroy() {
    this.isAlive = false;
  }


  getData() {
    const loading$ = this.store.select(getUserLoading)
    const loaded$ = this.store.select(getUserLoaded)
    const getUserData$ = this.store.select(getUsers)

    combineLatest([loading$, loaded$]).subscribe((data) => {      
      if(!data[0] && !data[1]){
        this.store.dispatch(new UserListRequestAction())
        this.apiService.getPeopleList().subscribe((response: any) => {
          this.data = response.data
          this.store.dispatch(new UserListSuccessAction({data: this.data}))
        }, (error: any) => {
          alert(error.error.error)
        })
      }
    })
    
    getUserData$.subscribe((data)=>{
      this.data = data.users      
    })
  }

}
