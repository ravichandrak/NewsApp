import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.css']
})

export class NewsHeaderComponent implements OnInit {

  selectedIndex;
  title;

  constructor() {
    this.selectedIndex = 0;
    this.title = "News Web App";
  }

  ngOnInit() {}

  addActiveStyle(menuIndex) {
    this.selectedIndex = menuIndex;
  }
}
