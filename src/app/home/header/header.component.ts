import { Component, HostListener, inject } from '@angular/core';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgIf, NgFor, TranslateModule, LocalizeRouterModule],
})
export class HeaderComponent {
  // This property will decide the class is added or not.
  isScrolled = false;
  isOpened = false;

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 80
      ? (this.isScrolled = true)
      : (this.isScrolled = false);
  }
  private readonly localizeRouterService = inject(LocalizeRouterService);
  private readonly router = inject(Router);
  protected isCollapsed = true;
  protected currentUrl = '';
  protected currentActiveUrl = '';

  constructor() {
    this.setCurrentUrl();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.setCurrentUrl();
    });
  }

  private setCurrentUrl(): void {
    this.currentActiveUrl=this.router.url;
    console.log(this.currentActiveUrl);
    this.currentUrl = this.router.url
      .replace('/' + this.localizeRouterService.parser.currentLang, '')
      .split('?')[0];
  }
}
