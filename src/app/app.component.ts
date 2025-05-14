import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <h1>{{ 'HELLO' | translate }}</h1>
    <h2>{{ 'WELCOME' | translate }}</h2>

    <button (click)="switchLang('en')">English</button>
    <button (click)="switchLang('ar')">عربي</button>
  `
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
