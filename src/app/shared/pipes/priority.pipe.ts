import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'baixa':
        return 'star_border'
      case 'media':
        return 'star_half'
      case 'alta':
        return 'star'
    }

    return 'star';
  }

}
