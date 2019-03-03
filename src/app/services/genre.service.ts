import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Genre } from '../models/genre.model';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres: Genre[] = [];

  constructor(private http: HttpClient) {
    this.getGenres().subscribe((genres: Genre[]) => {
      this.genres = genres;
    });
}


  getGenres() {
    return this.http.get<Genre[]>(`${environment.serverUrl}/genres`);
  }
}
