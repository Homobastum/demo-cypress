import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() href: string;
  @Input() titre: string;
  @Input() newTab: boolean;

  constructor() {}

  ngOnInit(): void {}
}
