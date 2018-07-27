/**
 * Provides TranslatePipe.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { Dictionary } from '../interface/dictionary';


@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  public transform(text: string, args?: Dictionary<any>): string {
    // TODO: Implement i18n system.
    return text;
  }
}
