import { GenreService } from './../services/genre.service';
import { BookListService } from './../services/booklist.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Book } from '../models/book.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Route, ActivatedRoute, Params } from '@angular/router';
import { Genre } from '../models/genre.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  constructor(private bookService: BookListService,
    private route: ActivatedRoute,
    private genreService: GenreService,
    private fb: FormBuilder) { }

  subscription: Subscription;
  editMode = false;
  id: number;
  editedBook: Book;
  dropdownList = [];
  dropdownSettings = {};

  bookForm = this.initBookForm();

initBookForm(){
  return this.bookForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    author: ['', Validators.required],
    NoOfPages: [0],
    StartedAt: [''],
    FinishedAt: [''],
    Notes: [''],
    genres: this.fb.array([])
  });
}
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

        });
    } else {
      this.editMode = false;
    }
    // map genres into columns that can be recognised by the custom dropDownComponent
    this.genreService.getGenres().subscribe((data: Genre[]) => {
      this.dropdownList = data.map(g => ({ id: g.GenreId, itemName: g.Name }));
    });
    this.InitialiseDropdown();
  }
InitialiseDropdown(){
  this.dropdownSettings = {
    singleSelection: false,
    text: 'Select Genres',
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    enableSearchFilter: true
  };
}
  onAddItem(model:FormGroup, isValid: boolean) {
    // const value = this.bookForm.value;
    const newBook = new Book();
    newBook.Name = this.bookForm.get('name').value;
    newBook.Author = this.bookForm.get('author').value;
    newBook.StartedAt = this.bookForm.get('StartedAt').value;
    newBook.FinishedAt = this.bookForm.get('FinishedAt').value;
    newBook.NoOfPages = this.bookForm.get('NoOfPages').value;
    newBook.Notes = this.bookForm.get('Notes').value;

    const x = this.bookForm.get('genres').value;
    newBook.Genres = x.map(g => <Genre>({GenreId: g.id, Name: g.itemName}));

    var xx = this.bookForm.get('StartedAt.dateSelected');
    var xxx = this.bookForm.get('name');
    console.log(`Started at: ${this.bookForm.get('StartedAt')}`);
    // this.bookService.postBook(newBook)
    //   .subscribe((response) => console.log(response),
    //     (error) => console.log(error));
  }
  onGenreChange(event: Event) {
  }


}
