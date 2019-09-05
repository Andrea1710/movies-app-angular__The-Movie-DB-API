import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MoviesService {
  private apikey = 'e26a2b683dbf8105718ce4c3b8185ca9';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getBoard() {
    return this.getQuery(
      `/discover/movie?primary_release_date.gte=${this.desdeDate()}&primary_release_date.lte=${this.hastaDate()}`
    );
  }

  getPopulars() {
    return this.getQuery('/discover/movie?sort_by=popularity.desc');
  }

  searchMovie(texto: string) {
    return this.getQuery(
      `/search/movie?query=${texto}&sort_by=popularity.desc`
    );
  }

  private desdeDate() {
    let desde = new Date();
    let desdeDay = desde.getDate() + 1;
    let desdeMonth = desde.getMonth() + 1;
    desdeDay = this.getTwoDigits(desdeDay);
    desdeMonth = this.getTwoDigits(desdeMonth);
    return `${desde.getFullYear()}-${desdeMonth}-${desdeDay}`;
  }

  private hastaDate() {
    let hasta = new Date();
    let hastaDay = hasta.getDate() + 1;
    hasta.setDate(hastaDay + 7);
    let hastaMonth = hasta.getMonth() + 1;
    hastaDay = this.getTwoDigits(hastaDay);
    hastaMonth = this.getTwoDigits(hastaMonth);
    return `${hasta.getFullYear()}-${hastaMonth}-${hastaDay}`;
  }

  private getTwoDigits(date) {
    return date < 10 ? '0' + date : date;
  }

  private getQuery(query: string) {
    const url = `${this.urlMoviedb}${query}&api_key=${this.apikey}&language=es&limit=10`;
    return this.http.get(url);
  }
}
