import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {MovieComponent} from './components/movie/movie.component';
import {SearchComponent} from './components/search/search.component';

// Routes
import {ROUTES} from './app.routes';

// Pipes
import {MovieImagePipe} from './pipes/movie-image.pipe';
import {GalleryComponent} from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    MovieImagePipe,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
