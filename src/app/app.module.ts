import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackerNewsListComponent } from './hacker-news-list/hacker-news-list.component';
import { FormsModule } from '@angular/forms';
import { HackerNewsService } from './hacker-news.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HackerNewsListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
