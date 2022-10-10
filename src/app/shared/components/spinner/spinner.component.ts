import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: '',
  styles: [
    `
      :host {
        display: block;
        width: 30px;
        height: 30px;
        border: 2px solid var(--text-color);
        border-radius: 50%;
        border-top-color: transparent;
        animation: spinner 1s infinite linear;
      }

      @keyframes spinner {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  constructor() {}
}
