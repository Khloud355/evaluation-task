import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true,
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, limitOfText: number = 50): string {
    if (!value) return '';
    return value.length > limitOfText
      ? value.substring(0, limitOfText) + '...'
      : value;
  }
}
