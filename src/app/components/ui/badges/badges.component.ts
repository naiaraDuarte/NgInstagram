import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  @Input() type: String = '';
  @Input() value: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
