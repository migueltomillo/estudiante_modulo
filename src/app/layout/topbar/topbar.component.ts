import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Bryan Andrade (Estudiante)',
        routerLink: 'core/projects',
        icon: 'pi pi-user',
        items: [{ label: 'logout', routerLink: 'core/projects' }],
      },
      {
        label: 'Informacion',
        routerLink: 'core/projects',
        icon: 'pi pi-book',
      },
    ];
  }
}
