import { TuiRoot } from '@taiga-ui/core';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // для Web Components элементов
})
export class App {
  protected readonly title = signal('generic-ng-tpl');
}
