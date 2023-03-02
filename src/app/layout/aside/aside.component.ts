import { Theme } from './../../models/Theme.model';
import { ThemeService } from './../../service/theme.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Output() OpenAsideEmitter: EventEmitter<boolean> = new EventEmitter();
  constructor(private ThemeService: ThemeService) { }
  ThemeColor: Theme = this.ThemeService.GetTheme() || new Theme();

  ngOnInit(): void {
    this.ThemeService.ThemeColorEmitter.emit(this.ThemeColor);
    this.setAttribute(this.ThemeColor.accentColor);
  }

  SetTheme(accentColor: string, backgroundColor: string) {
    this.setAttribute(accentColor);
    this.ThemeColor.accentColor = `${accentColor}`;
    this.ThemeColor.backgroundColor = `${backgroundColor}`;
    this.ThemeService.SetTheme(this.ThemeColor);
    this.ThemeService.ThemeColorEmitter.emit(this.ThemeColor);
  }

  setAttribute(color: string) {
    let selectedTheme = document.querySelector('[selected-theme]') as HTMLDivElement;
    selectedTheme.setAttribute('selected-theme', `${color}`);
  }

  onOpenAside(e: boolean) {
    this.OpenAsideEmitter.emit(e);
  }
}
