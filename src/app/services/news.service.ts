import { News } from "../News";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class NewsService {
  private apiUrl = "http://localhost:3000/articles";

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
}
