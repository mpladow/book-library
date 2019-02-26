import { environment } from './../../environments/environment.prod';
  import { Injectable, OnInit } from "@angular/core";
  import { HttpClient } from '@angular/common/http';
import { Book } from "src/app/models/book.model";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookListService{
bookCount: number;

// this is an event emitter. other components/services can subscribe to this. it is currently expecting a number
startedEditing = new Subject<number>();

  constructor(private http: HttpClient) {}

  getBook(id: number){
    return this.http.get<Book>(`${environment.serverUrl}/book/${id}`);
  }
  getBooks() {
    return this.http.get<Book[]>(`${environment.serverUrl}/book`);
  }

  postBook(book: Book) {
    return this.http.post(`${environment.serverUrl}/book`, book);
  }


}
