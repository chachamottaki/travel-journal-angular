import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; //to work with asynchronous data streams.

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  addEntry(journalId:string, date:string, location:string, entry:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/journal/${journalId}/entry`, {date, location, entry});
  }
  getEntryByDate(journalId:string, dateId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/journal/${journalId}/entry/date/${dateId}`);
  }
  getEntryByLocation(journalId:string, locationId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/journal/${journalId}/entry/date/${locationId}`);
  }
  updateEntry(journalId:string, entryId: string, date:string, location:string, entry:string): Observable<any> {
    return this.http.put(`${this.baseUrl}/journal/${journalId}/entry/${entryId}`, {date, location, entry});
  }
  deleteEntry(journalId:string, entryId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/journal/${journalId}/entry/${entryId}`);
  }
}
