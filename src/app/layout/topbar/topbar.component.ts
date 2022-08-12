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
        label: 'Brayan Andrade (Estudiante) ',
        icon: 'pi pi-user',
        items: [{ label: 'logout', routerLink: 'auth/login' }],
      },
      {
        label: 'Informacion del estudiante',
        routerLink: 'core/students',
        icon: 'pi pi-book',
      },
      {
        label: 'Perfil del estudiante',
        routerLink: 'core/student',
        icon: 'pi pi-book',
      },
    ];
  }
}
