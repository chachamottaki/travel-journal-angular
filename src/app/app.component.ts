import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'travel-journal';
  private baseUrl = 'http://localhost:8000/login';

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    }
    
}
