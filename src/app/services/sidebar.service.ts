import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
      title: "Dashboard",
      icon: "mdi mdi-gauge",
      submenu: [
        {title: "Main", url: '/'},
        {title: "ProgressBar", url: 'progress'},
        {title: "Donnut", url: 'grafica-1'},
        {title: "Promises", url: 'promesas'},
        {title: "RxJS", url: 'rxjs'},
      ]
    }
  ]

  constructor() { }
}
