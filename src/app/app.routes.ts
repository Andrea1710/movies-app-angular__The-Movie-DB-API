import {Routes} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './components/home/home.component';
import {MovieComponent} from './components/movie/movie.component';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:searchInput', component: SearchComponent},
  {path: 'movie/:id/:page', component: MovieComponent},
  {path: 'movie/:id/:page/:searchInput', component: MovieComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];
