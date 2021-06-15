import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    let newName = '';
    for(var i = 0; i < value.length; i++) {
      if(i == 0){
        newName += value.charAt(i).toUpperCase();        
      }
      else if(value.charAt(i-1) == ' '){
        newName += value.charAt(i).toUpperCase();        
      }
      else{
        newName += value.charAt(i).toLowerCase();
      }
    }
    return newName;
  }

}
