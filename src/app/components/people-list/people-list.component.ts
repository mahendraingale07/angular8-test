import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  private data:any=[];
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.apiService.getPeopleList().subscribe((response: any) => {     
      this.data = response.data
      console.log(this.data);
    }, (error: any) => {
      alert(error.error.error)
    })
  }

}
