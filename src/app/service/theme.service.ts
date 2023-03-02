import { Theme } from './../models/Theme.model';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  @Output() ThemeColorEmitter: EventEmitter<Theme> = new EventEmitter();
  private ThemeKey: string = "Theme";
  private ThemeColor: Theme = new Theme();

  SetTheme(theme: Theme) {
    this.ThemeColor = theme;
    localStorage.setItem(this.ThemeKey, JSON.stringify(this.ThemeColor));
  }

  GetTheme() {
    let theme = localStorage.getItem(this.ThemeKey);
    if (theme) {
      return JSON.parse(theme);
    } else {
      this.ThemeColor.accentColor = '#2076da';
      this.ThemeColor.backgroundColor = '#041524';
      this.SetTheme(this.ThemeColor);
      this.ThemeColor = new Theme();
    }
  }
}
