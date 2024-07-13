import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.getMultipleCharacters().subscribe(data => {
    //   this.data = data;
    // })
    this.apiService.getAllCharacters().subscribe(data => {
      debugger;
      this.data = data.results;
    })
  }
}
