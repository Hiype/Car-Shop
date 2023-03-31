import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  data = {} as any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/greeting').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
