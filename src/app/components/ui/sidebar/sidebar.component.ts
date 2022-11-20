import { Component, OnInit } from '@angular/core';
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faComment, faHeart, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
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

}
