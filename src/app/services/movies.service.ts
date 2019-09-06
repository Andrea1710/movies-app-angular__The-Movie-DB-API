import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MoviesService {
  private apikey = 'e26a2b683dbf8105718ce4c3b8185ca9';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  movies: any[] = [];

  constructor(private http: HttpClient) {}

  getBoard() {
    return this.getQuery(
      `/discover/movie?primary_release_date.gte=${this.formatDate()}&primary_release_date.lte=${this.formatDate(
        'to'
      )}`
    );
  }

  getMovie(id: string) {
    return this.getQuery(`/movie/${id}?`);
  }

  getPopulars() {
    return this.getQuery('/discover/movie?sort_by=popularity.desc');
  }

  getKidsPopulars() {
    return this.getQuery(
      '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
    );
  }

  searchMovie(text: string) {
    return this.getQuery(
      `/search/movie?query=${text}&sort_by=popularity.desc`
    ).pipe(map((searchedMovie: any) => (this.movies = searchedMovie)));
  }

  private formatDate(dateType?: string) {
    let now = new Date();
    let day = now.getDate() + 1;
    let month = now.getMonth() + 1;
    day = this.getTwoDigits(day);
    month = this.getTwoDigits(month);
    if (dateType === 'to') now.setDate(day + 7);
    return `${now.getFullYear()}-${month}-${day}`;
  }

  private getTwoDigits(date) {
    return date < 10 ? '0' + date : date;
  }

  private getQuery(query: string) {
    const url = `${this.urlMoviedb}${query}&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(
      map((movies: any) => {
        if (movies.results) return movies.results;
        else return movies;
      })
    );
  }
}
