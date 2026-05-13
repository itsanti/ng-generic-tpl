import { Component, Input } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-button',
  imports: [TuiButton],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input()
  appearance: 'primary' | 'secondary' = 'primary';

  @Input()
  size: 's' | 'm' | 'l' = 'm';

  @Input()
  disabled = false;
}
