import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DB_SERVER} from '../util/url-constants';
import {Observable} from 'rxjs';
import {InvestmentContract} from '../data_models/InvestmentContract';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class InvestmentContractsService {
  private apiUrl = DB_SERVER + 'investment_contracts';

  constructor(private http: HttpClient) { }

  getInvestmentContracts(): Observable<InvestmentContract[]> {
    return this.http.get<InvestmentContract[]>(this.apiUrl);
  }

  getInvestmentContractByID(id: number): Observable<InvestmentContract> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<InvestmentContract>(url);
  }

  deleteInvestmentContract(id: number): Observable<InvestmentContract> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<InvestmentContract>(url);
  }

  updateInvestmentContract(investmentContract: InvestmentContract): Observable<InvestmentContract> {
    const url = `${this.apiUrl}/${investmentContract.id}`;
    return this.http.put<InvestmentContract>(url, investmentContract, httpOptions);
  }

  addInvestmentContract(investmentContract: InvestmentContract): Observable<InvestmentContract> {
    return this.http.post<InvestmentContract>(this.apiUrl, investmentContract, httpOptions);
  }
}
