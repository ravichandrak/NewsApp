import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsService } from './news-service/news-service.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { NewsPublishers } from './news-publishers/news-publishers.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsHeaderComponent,
    TopNewsComponent,
    NewsPublishers
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ NewsService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
