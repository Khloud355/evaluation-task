import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Iproduct } from '../../models/Iproduct.model';
import { TruncateTextPipe } from '../../pipes/truncate-text.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, CommonModule, TruncateTextPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardData = input<Iproduct>(); // instead of @input decorator we use input function to make it a signal and accept any type of value (can give type optional)
  linkUrl = input<string>();
}
