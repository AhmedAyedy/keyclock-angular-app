import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpTokenInterceptor} from './services/interceptor/http-token.interceptor';
import {CodeInputModule} from 'angular-code-input';
import {KeycloakService} from './services/keycloak/keycloak.service';

export function kcFactory(kcService: KeycloakService) {
  return () => kcService.init();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CodeInputModule
    ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }