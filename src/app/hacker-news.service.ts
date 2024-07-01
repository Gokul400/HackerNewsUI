import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataItem } from './data-item';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private apiUrl = 'http://localhost:5192/api/HackerNews';

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<DataItem[]> {
    debugger;
    return this.http.get<DataItem[]>(this.apiUrl);
  }

}
