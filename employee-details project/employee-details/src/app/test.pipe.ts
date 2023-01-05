import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(p: any, wish: string): any {
    if (p.gender == 'f'){
      return `Hello Miss ${p.name} ${wish}`
  }
else{
  return `Hello Mr ${p.name} ${wish}`
}
 
}
}
