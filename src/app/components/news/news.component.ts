import { Component, OnInit } from "@angular/core";
import { News } from "../../News";
import { NewsService } from "../../services/news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})

export class NewsComponent implements OnInit {
  newslist: News[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news) => (this.newslist = news))
  }
}
