import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, i = 80): string {
    return value.split('').splice(0, i).join('').split(' ').slice(0, -1).join(' ') + '...'
  }

}
