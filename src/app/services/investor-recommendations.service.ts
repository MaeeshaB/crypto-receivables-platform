import { Injectable } from '@angular/core';
import {DB_SERVER} from "../util/url-constants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {InvestorRecommendation} from "../data_models/InvestorRecommendation";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class InvestorRecommendationsService {
  private apiUrl = DB_SERVER + 'investor_recommendations';

  constructor(private http: HttpClient) { }

  getInvestorRecommendations(): Observable<InvestorRecommendation[]> {
    return this.http.get<InvestorRecommendation[]>(this.apiUrl);
  }

  getInvestorRecommendationByID(id: number): Observable<InvestorRecommendation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<InvestorRecommendation>(url);
  }

  deleteInvestorRecommendation(id: number): Observable<InvestorRecommendation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<InvestorRecommendation>(url);
  }

  updateInvestorRecommendation(investor: InvestorRecommendation): Observable<InvestorRecommendation> {
    const url = `${this.apiUrl}/${investor.id}`;
    return this.http.put<InvestorRecommendation>(url, investor, httpOptions);
  }

  addInvestorRecommendation(investor: InvestorRecommendation): Observable<InvestorRecommendation> {
    return this.http.post<InvestorRecommendation>(this.apiUrl, investor, httpOptions);
  }
}
