import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  
  constructor() { 
    const url = localStorage.getItem('theme') || "./assets/css/colors/default.css";
    this.linkTheme?.setAttribute('href', url);
    
  }
  
  changeTheme( color:string ){
    const url = `./assets/css/colors/${color}.css`;
    
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    
    this.checkCurrentTheme();
  }
  
  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    
    links.forEach( element =>{
      element.classList.remove("working");
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeURL = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeURL === currentTheme) {
        element.classList.add('working');
      }

    })
  }
}
