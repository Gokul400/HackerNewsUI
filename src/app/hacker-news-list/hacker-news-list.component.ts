import { Component, OnInit } from '@angular/core';
import { DataItem } from '../data-item';
import { HackerNewsService } from '../hacker-news.service';


@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.css']
})
export class HackerNewsListComponent implements OnInit {

  constructor(private hackerNewsService: HackerNewsService) { }

  isLoading: boolean = true;
  data: DataItem[] = [];

  paginatedData: DataItem[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  searchText: string = '';

  ngOnInit() {
    this.loadTopStories();
  }

  paginateData() {
    this.isLoading = true;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    let filteredData = this.data;

    // Filter by search text
    if (this.searchText) {
      filteredData = this.data.filter(item =>
        item.title.toLowerCase().includes(this.searchText.toLowerCase())
         ||  item.url.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    this.paginatedData = filteredData.slice(startIndex, startIndex + this.itemsPerPage);
    this.isLoading = false;
  }

  loadTopStories(){
    this.isLoading = true;
    this.hackerNewsService.getTopStories().subscribe(
      (data: DataItem[]) => {
        this.data = data;
        this.paginateData();
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching Hacker News items', error);
      }
    );
  }


  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.paginateData();
  }

  onSearch() {
    this.isLoading = true;
    this.currentPage = 1; // Reset to first page when searching
    this.paginateData();
  }
}



