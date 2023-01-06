import { Component, OnInit } from '@angular/core';
import { faHouse, faSearch, faBars, faGear, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faComment, faHeart, faSquarePlus, faBookmark, faMoon, faClock } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Menu } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  iconHouse = faHouse;
  iconSearch = faSearch;
  iconCompass = faCompass as IconProp;
  iconComment = faComment as IconProp;
  iconHeart = faHeart as IconProp;
  iconSquarePlus = faSquarePlus as IconProp;
  iconBars = faBars;
  iconGear = faGear;
  iconBookMark = faBookmark as IconProp;
  iconMoon = faMoon as IconProp;
  iconClock = faClock as IconProp;
  iconExclamation = faExclamation;

  logo = '-dark';

  menu: Menu[] = [
    {
      id: 0,
      name: 'Página inicial',
      icon: this.iconHouse,
      route: '',
      active: true
    }, 
    {
      id: 1,
      name: 'Pesquisa',
      icon: this.iconSearch,
      route: '',
      active: false
    },
    {
      id: 2,
      name: 'Explorar',
      icon: this.iconCompass,
      route: '',
      active: false
    },
    {
      id: 3,
      name: 'Mensagens',
      icon: this.iconComment,
      route: '',
      hasBadge: true,
      active: false
    },
    {
      id: 4,
      name: 'Notificações',
      icon: this.iconHeart,
      route: '',
      hasBadge: true,
      active: false
    },
    {
      id: 5,
      name: 'Criar',
      icon: this.iconSquarePlus,
      route: '',
      active: false
    },
    {
      id: 6,
      name: 'Perfil',
      route: '',
      active: false
    },
  ] 
  
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

  showDrop(forceHide: boolean): void {
    if (forceHide) {
     return document.getElementById('dropUp')?.classList.remove('show');
    }
    document.getElementById('dropUp')?.classList.toggle('show');
  }

}
