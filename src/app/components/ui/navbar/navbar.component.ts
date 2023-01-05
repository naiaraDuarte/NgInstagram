import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchElement') searchElement!: ElementRef;

  logo = '-dark';
  iconMagnifyingGlass = faMagnifyingGlass;
  iconHeart = faHeart as IconProp;
  iconClose = faXmark;
  search = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  darkTheme(): string {
    const theme = document.body.classList.toggle('dark-theme');
 
    if (theme) {
     return this.logo = '-dark'; 
    }
 
    return this.logo = '';
   }

   clearSearch(): void {
    this.search.reset();
   }

}
