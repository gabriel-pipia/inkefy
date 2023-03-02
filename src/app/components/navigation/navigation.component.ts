import { ThemeService } from './../../service/theme.service';
import { Component, Input } from '@angular/core';
import { Theme } from 'src/app/models/Theme.model';

@Component({
  selector: 'todo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() ThemeColor: Theme = new Theme();

  ngOnInit(): void {
    setTimeout(() => {
      const activeLink = document.querySelector('a.active') as any;
      this.setIndicatorPosition(activeLink);
    }, 100);
    window.addEventListener("resize", () => {
      const activeLink = document.querySelector('a.active') as any;
      this.setIndicatorPosition(activeLink);
    });
  }

  activeNavItem(event: any) {
    let element: HTMLDivElement = event.target;
    this.setIndicatorPosition(element);
  }

  setIndicatorPosition(element: HTMLDivElement) {
    const indicator = document.querySelector('.indicator') as HTMLDivElement;
    const nav = document.querySelector('nav ul') as HTMLDivElement;
    let width = element.getBoundingClientRect().width;
    let navleft = nav.getBoundingClientRect().left;
    let left = element.getBoundingClientRect().left - navleft;
    element.classList.add('active');
    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
  }
}
