import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'main'
})
export class MainPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
