import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news-service/news-service.component';
import * as moment from 'moment';
import 'moment/locale/en-in';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})

export class TopNewsComponent implements OnInit {

  title = 'NewsApp';
  articleList;
  totalArticles;
  pageSize; //number of articles per page
  totPages;
  currentPage;
  moment;

  constructor(private newsService:NewsService) {
    this.totalArticles = 0;
    this.articleList = [];
    this.currentPage = 1;
    this.totPages = 0;
    this.pageSize = 5;
  }
  
  ngOnInit() {
    this.getTopHeadlines(this.currentPage, this.pageSize);
    this.moment = moment;
  }

  getTopHeadlines(currentPage, pageSize) {

    this.newsService.getTopHeadlines(currentPage, pageSize).subscribe(newsList => {
      if (newsList.status == "ok") {
        this.totalArticles = newsList.totalResults;

        this.articleList = newsList.articles;

        this.currentPage = currentPage;

        this.totPages = Math.ceil(this.totalArticles / this.pageSize)
        
      }
    });
  }

  updateAricleSize(evt) {
    this.pageSize = evt.target.innerHTML;

    this.getTopHeadlines(1, this.pageSize);

  }
  loadNextPage(pageNo) {
    
    if (pageNo >= 1 && pageNo <= this.totPages)
      this.getTopHeadlines(pageNo, this.pageSize);
  }

  numberToArray(n: number): any[] {
    return Array(n);
  }

  getAllNews() {}
}