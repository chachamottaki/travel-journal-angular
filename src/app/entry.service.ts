import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; //to work with asynchronous data streams.

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  addEntry(journalId:number, date:string, location:string, entry:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/journal/${journalId}/entry`, {date, location, entry});
  }
  getEntryByDate(journalId:number, dateId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/journal/${journalId}/entry/date/${dateId}`);
  }
  getEntryByLocation(journalId:number, locationId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/journal/${journalId}/entry/date/${locationId}`);
  }
  updateEntry(journalId:number, entryId: number, date:string, location:string, entry:string): Observable<any> {
    return this.http.put(`${this.baseUrl}/journal/${journalId}/entry/${entryId}`, {date, location, entry});
  }
  deleteEntry(journalId:number, entryId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/journal/${journalId}/entry/${entryId}`);
  }
}

