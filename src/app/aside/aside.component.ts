import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  sidebars = [
    {
      titre: 'Sidebar 1',
    },
    {
      titre: 'Sidebar 2',
    },
    {
      titre: 'Sidebar 3',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
