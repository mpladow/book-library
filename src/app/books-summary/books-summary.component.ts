import { Book } from 'src/app/models/book.model';
import { BookListService } from './../services/booklist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-summary',
  templateUrl: './books-summary.component.html',
  styleUrls: ['./books-summary.component.scss']
})
export class BooksSummaryComponent implements OnInit{

  totalBooksRead: number;

  constructor(private booklistService: BookListService) {

  }
  ngOnInit(){
    console.log("Hi");
    this.booklistService.getBooks().subscribe((res: Book[]) => {
      this.totalBooksRead = res.filter(book => book.FinishedAt != null).length;
    }, (fail) => console.log("nnope"));
  }
}
