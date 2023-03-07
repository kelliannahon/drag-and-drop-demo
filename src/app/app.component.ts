import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

/**
 * https://javascript.plainenglish.io/the-new-features-of-angular-v14-851995870f59
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
