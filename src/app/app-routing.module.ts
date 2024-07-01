import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackerNewsListComponent } from './hacker-news-list/hacker-news-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/hackerNews', pathMatch: 'full' },
  { path: 'hackerNews', component: HackerNewsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
