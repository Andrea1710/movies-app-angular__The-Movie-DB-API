import {MoviesService} from '../../services/movies.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService) {
    this.moviesService.getBoard().subscribe(data => console.log(data));
  }

  ngOnInit() {}
}
