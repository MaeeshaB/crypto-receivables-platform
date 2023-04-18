import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DB_SERVER} from '../util/url-constants';
import {Observable} from 'rxjs';
import {Investor} from '../data_models/Investor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class InvestorService {
  private apiUrl = DB_SERVER + 'investors';

  constructor(private http: HttpClient) { }

  getInvestors(): Observable<Investor[]> {
    return this.http.get<Investor[]>(this.apiUrl);
  }

  getInvestorByID(id: number): Observable<Investor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Investor>(url);
  }

  deleteInvestor(id: number): Observable<Investor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Investor>(url);
  }

  updateInvestor(investor: Investor): Observable<Investor> {
    const url = `${this.apiUrl}/${investor.id}`;
    return this.http.put<Investor>(url, investor, httpOptions);
  }

  addInvestor(investor: Investor): Observable<Investor> {
    return this.http.post<Investor>(this.apiUrl, investor, httpOptions);
  }
}
