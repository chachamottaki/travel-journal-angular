import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; //to work with asynchronous data streams.



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  login(email:string, password:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`,{"email":email, "password":password});
  }
  addUser(firstname:string, lastname:string, email:string, password:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`,{firstname, lastname, email, password});
  }
  getUser(userId:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }
  updateUser(userId:string, firstname:string, lastname:string, email:string, password:string): Observable<any> {
    return this.http.put(`${this.baseUrl}//user/${userId}`,{firstname, lastname, email, password});
  }
  deleteUser(userId:string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/${userId}`);
  }
}
