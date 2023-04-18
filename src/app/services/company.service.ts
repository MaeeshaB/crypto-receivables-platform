import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DB_SERVER} from '../util/url-constants';
import {Observable} from 'rxjs';
import {Company} from '../data_models/Company';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = DB_SERVER + 'companies';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompanyByID(id: number): Observable<Company> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Company>(url);
  }

  deleteCompany(id: number): Observable<Company> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Company>(url);
  }

  updateCompany(company: Company): Observable<Company> {
    const url = `${this.apiUrl}/${company.id}`;
    return this.http.put<Company>(url, company, httpOptions);
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company, httpOptions);
  }
}
