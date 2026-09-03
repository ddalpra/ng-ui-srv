import { Component, signal } from '@angular/core';
import { AppShell } from './layout/shell/app-shell/app-shell';


@Component({
  imports: [AppShell],
  selector: 'app-root',
  styleUrl: './app.scss',
  template: `
        <app-shell />
    `
})
export class App {
  protected readonly title = signal('ng-ui-srv');
}
