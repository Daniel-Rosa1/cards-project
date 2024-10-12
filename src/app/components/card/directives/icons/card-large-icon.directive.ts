import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardLargeIcon]',
  host:{'class':'ca-c-card__large_icon'}
})
export class CardLargeIconDirective {
}
