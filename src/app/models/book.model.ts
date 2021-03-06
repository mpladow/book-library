import { Genre } from "./genre.model";


export class Book {
  BookId: number;
  Name: string;
  Author: string;
  GenreName: string;
  SeriesName: string;
  NoOfPages: number;
  StartedAt: Date;
  FinishedAt: Date;
  Rating: number;
  Image: string;
  IsSeries: boolean;
  BookNumberInSeries: boolean;
  Notes: string;
  Genres: Genre[] = [];


}
export class BookVM {
  BookId: number;
  Name: string;
  Author: string;
  GenreName: string;
  SeriesName: string;
  NoOfPages: number;
  StartedAt: Date;
  FinishedAt: Date;
  Rating: number;
  Image: string;
  IsSeries: boolean;
  BookNumberInSeries: boolean;
  Notes: string;
  Genres: Genre[] = [];
}



