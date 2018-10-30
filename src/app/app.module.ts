import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TitleBarComponent } from './components/home/title-bar/title-bar.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { NavItemComponent } from './components/home/navbar/nav-item/nav-item.component';
import { LogComponent } from './components/home/log/log.component';
import { ListarlogComponent } from './components/home/log/listarlog/listarlog.component';
import { EdiComponent } from './components/home/edi/edi.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { LogDetailComponent } from './components/home/log/log-detail/log-detail.component';
import { FilterPipe } from './components/shared/filter/filter.pipe';
import { FormatDataPipe } from './components/shared/formatData/format-data.pipe';
import { ShowProgressComponent } from './components/home/edi/show-progress/show-progress.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    TitleBarComponent,
    NavbarComponent,
    NavItemComponent,
    LogComponent,
    ListarlogComponent,
    EdiComponent,
    ModalComponent,
    LogDetailComponent,
    FilterPipe,
    FormatDataPipe,
    ShowProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
