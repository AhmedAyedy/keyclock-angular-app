import { Component } from '@angular/core';
import { KeycloakService } from './services/keycloak/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'keyclock-app';
  constructor(
    private keycloakService: KeycloakService
  ) {
  }
  async logout() {
    await this.keycloakService.logout();
  }
}
