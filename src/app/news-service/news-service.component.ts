import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Observer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {

    newsAPIUrl = 'http://newsapi.org/v2';
    apiKey = '81cc00fc742f4ffc8d4f046ba0ce8aae';

    constructor(private http:HttpClient) {}

    // get top headlines from newsAPI
    getTopHeadlines(currentPage, pageSize):Observable<any> {
        const param = 'country=in&pageSize='+ pageSize +'&page='+ currentPage +'&apiKey='+ this.apiKey;
        return this.http.get(this.newsAPIUrl + '/top-headlines?' + param);
    }

    // search news based on the search criteria
    searchNews(searchItem:string):Observable<any> {
        const param = 'q='+searchItem +'&apiKey='+ this.apiKey;
        return this.http.get(this.newsAPIUrl + '/everything?' + param);
    }

    getPublishers():Observable<any> {
        //const param = 'country=in&language=en&apiKey='+ this.apiKey;
        const param = 'language=en&apiKey='+ this.apiKey;
        return this.http.get(this.newsAPIUrl + '/sources?' + param);
    }
}