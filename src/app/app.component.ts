import {Component} from '@angular/core';
import {MoviesService} from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public moviesService: MoviesService) {
    this.moviesService.getPopulars().subscribe(data => console.log(data));

    this.moviesService
      .searchMovie('wall-e')
      .subscribe(data => console.log(data));
  }
}
