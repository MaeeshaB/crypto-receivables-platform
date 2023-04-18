import { Injectable } from '@angular/core';
import {DB_SERVER} from "../util/url-constants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyData} from "../data_models/CompanyData";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {
  private apiUrl = DB_SERVER + 'company_data';

  constructor(private http: HttpClient) { }

  getCompanyDatas(): Observable<CompanyData[]> {
    return this.http.get<CompanyData[]>(this.apiUrl);
  }

  getCompanyDataByID(id: number): Observable<CompanyData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CompanyData>(url);
  }

  deleteCompanyData(id: number): Observable<CompanyData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<CompanyData>(url);
  }

  updateCompanyData(investor: CompanyData): Observable<CompanyData> {
    const url = `${this.apiUrl}/${investor.id}`;
    return this.http.put<CompanyData>(url, investor, httpOptions);
  }

  addCompanyData(investor: CompanyData): Observable<CompanyData> {
    return this.http.post<CompanyData>(this.apiUrl, investor, httpOptions);
  }
}
