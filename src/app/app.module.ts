import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import HomeComponent from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule, routes } from './app.routes';
import { RouterModule, RouterOutlet } from '@angular/router';


import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './core/utils/translate-browser.loader';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeBrowserLoaderFactory } from './core/utils/localize-browser.loader';
import { Location } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';
import { initializeDirectionFactory } from './core/utils/initialize-direction.factory';
import PrivacyComponent from './privacy/privacy.component';
import FeatureComponent from './feature/feature.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyComponent,
    FeatureComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RoutingModule,
    LocalizeRouterModule
  ],
  providers: [
    provideRouter(routes, withDisabledInitialNavigation()),
    provideClientHydration(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: translateBrowserLoaderFactory,
          deps: [HttpClient],
        },
      }), LocalizeRouterModule.forRoot(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      initialNavigation: true,
    })),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDirectionFactory,
      multi: true,
    },
  ],
  exports:[
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
