import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenres(){
    return this.http.get<Genre[]>(`${environment.serverUrl}`);
  }
}
