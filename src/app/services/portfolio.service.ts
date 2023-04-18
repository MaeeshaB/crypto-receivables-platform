import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DB_SERVER} from '../util/url-constants';
import {Observable} from 'rxjs';
import {Portfolio} from '../data_models/Portfolio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = DB_SERVER + 'portfolios';

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.apiUrl);
  }

  getPortfolioByID(id: number): Observable<Portfolio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Portfolio>(url);
  }

  deletePortfolio(id: number): Observable<Portfolio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Portfolio>(url);
  }

  updatePortfolio(investor: Portfolio): Observable<Portfolio> {
    const url = `${this.apiUrl}/${investor.id}`;
    return this.http.put<Portfolio>(url, investor, httpOptions);
  }

  addPortfolio(investor: Portfolio): Observable<Portfolio> {
    return this.http.post<Portfolio>(this.apiUrl, investor, httpOptions);
  }
}
