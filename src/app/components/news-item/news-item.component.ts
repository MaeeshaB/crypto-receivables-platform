import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../News';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() news: News;
  
  constructor() {}

  ngOnInit(): void {
  }

}
