import { BooksSummaryComponent } from './../books-summary/books-summary.component';
import { BookListService } from './../services/booklist.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Book } from '../models/book.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Route, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  @ViewChild('f') bookForm: NgForm;
  subscription: Subscription;
  editMode = false;
  id: number;
  editedBook: Book;
  constructor(private bookService: BookListService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this component will listen to the book service's startedEditing emitter.
    // Once this event has been emitted, it will pass through the index
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
      });
    if (this.id !== 0 && !isNaN(this.id)) {
      this.bookService.getBook(this.id)
        .subscribe((book: Book) => {
          this.editMode = true;
          this.editedBook = book;
          this.bookForm.setValue({
            name: this.editedBook.Name,
            author: this.editedBook.Author,
            image: this.editedBook.Image,
            genre: this.editedBook.GenreName,
            startedAt: this.editedBook.StartedAt,
            finishedAt: this.editedBook.FinishedAt
          });
        });
    } else {
this.editMode = false;
    }

  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  onAddItem(form: NgForm) {
    const value = form.value;

    const newBook = new Book();
    newBook.Name = value.name;
    newBook.Author = value.author;
    newBook.Image = value.image;
    newBook.StartedAt = value.startedAt;
    newBook.FinishedAt = value.finishedAt;
    newBook.GenreName = value.genre;
    console.log(newBook);

    this.bookService.postBook(newBook)
      .subscribe((response) => console.log(response),
        (error) => console.log(error));
  }

}
