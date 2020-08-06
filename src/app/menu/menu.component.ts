import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items = [
    {
      href: '/',
      titre: 'Home',
      newTab: false,
    },
    {
      href: 'https://html-css-js.com/',
      titre: 'HTML',
      newTab: true,
    },
    {
      href: 'https://html-css-js.com/',
      titre: 'CSS',
      newTab: true,
    },
    {
      href: 'https://htmlcheatsheet.com/js/">',
      titre: 'JS',
      newTab: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
