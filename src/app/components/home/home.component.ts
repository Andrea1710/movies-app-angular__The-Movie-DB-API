import {MoviesService} from '../../services/movies.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  board: any;
  populars: any;
  kidsPopulars: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getBoard().subscribe(data => (this.board = data));
    this.moviesService.getPopulars().subscribe(data => (this.populars = data));
    this.moviesService
      .getKidsPopulars()
      .subscribe(data => (this.kidsPopulars = data));
  }
}
