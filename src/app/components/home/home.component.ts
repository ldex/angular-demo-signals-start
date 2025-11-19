import { Component, inject } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private readonly authService = inject(AuthService);

  readonly authState$ = this.authService.getAuthState();

  logout(): void {
    this.authService.logout();
  }
}