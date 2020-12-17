import { Route } from '@angular/router'; 
import { AppComponent } from './app.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { NewsPublishers } from './news-publishers/news-publishers.component';

//import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const appRoutes:Route[] = [
    
    {path: '', pathMatch: 'full', component: TopNewsComponent},

    {path: 'topNews' , component: TopNewsComponent},

    {path: 'publishers' , component: NewsPublishers}

    //{path: '404', component:PageNotFoundComponent},

    //{path: '**', component: PageNotFoundComponent},
    
];