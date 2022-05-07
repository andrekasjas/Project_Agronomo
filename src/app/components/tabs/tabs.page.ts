import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  user = this.authSvc.user$;
  darkMode = true;
  public appPages = [
    { title: 'inicio', url: '/tabs/tabs/finca', icon: 'home' },
    { title: 'proveedores', url: '/tabs/tabs/proveedores', icon: 'people-circle' },
    { title: 'trabajadores', url: '/tabs/tabs/trabajadores', icon: 'construct' }
  ];
  constructor(private authSvc: AuthService) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }
  cerrar(): void {
    this.authSvc.logout();
  }
  cambio(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }
  }
