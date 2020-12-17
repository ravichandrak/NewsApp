import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news-service/news-service.component';

@Component({
  selector: 'news-publishers',
  templateUrl: './news-publishers.component.html',
  styleUrls: []
})
export class NewsPublishers implements OnInit {

  publisherList = [];
  constructor(public newsService:NewsService) {}
  
  ngOnInit() {
    this.getPublishers();
  }

  getPublishers() {
    this.newsService.getPublishers().subscribe(list => {
      console.log(list);
      this.publisherList = list.sources;
    })
  }
}