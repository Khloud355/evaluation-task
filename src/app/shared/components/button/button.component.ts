import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  buttonType = input();
  clicked = output<string>();
  buttonText = input();
  buttonStyle = input<any>();
  disabledButton = input();

  buttonClicked() {
    this.clicked.emit('Button was clicked!');
  }
}
