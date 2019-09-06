import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  @ViewChild('searchInput', {static: false}) searchInput;

  constructor(private router: Router) {}

  searchMovie(searchInput: string) {
    if (!searchInput.length) return;
    this.router.navigate(['search', searchInput]);
    this.searchInput.nativeElement.value = '';
  }
}
