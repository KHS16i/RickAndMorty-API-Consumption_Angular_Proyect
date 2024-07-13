import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public getAllCharacters(){
    const url = `${this.BASE_URL}/${"character"}`;
    return this.http.get<any>(url)
  }

  public getMultipleCharacters(): Observable<any> {
    const url = `${this.BASE_URL}/${"character/1,183"}`;
    return this.http.get<any>(url)
  }
}
