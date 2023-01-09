import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Menu } from '../../models/Sidebar.model';

import { faCompass, faComment, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss']
})
export class BottombarComponent implements OnInit {
  iconHouse = faHouse;
  iconSearch = faSearch;
  iconCompass = faCompass as IconProp;
  iconComment = faComment as IconProp;
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
      name: 'Explorar',
      icon: this.iconCompass,
      route: '',
      active: false
    },
    
    {
      id: 2,
      name: 'Criar',
      icon: this.iconSquarePlus,
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
      name: 'Perfil',
      route: '',
      active: false
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
