import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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
      console.log(this.data);
    }, (error: any) => {
      alert(error.error.error)
    })
  }

}
