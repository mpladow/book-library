
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookListService } from '../services/booklist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookListService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.showBookList();
  }
  showBookList() {
    this.bookService.getBooks()
      .subscribe(data => this.books = data);
  }
  navigateToNewBook(){
    this.router.navigate(['book-edit']);
  }
onEditBook(id: number) {
  this.bookService.startedEditing.next(id);
  this.router.navigate(['book-edit', id]);
}

}
