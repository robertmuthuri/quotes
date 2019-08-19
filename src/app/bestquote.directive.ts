import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Quote} from './quote';

@Directive({
  selector: '[appBestquote]'
})

export class BestquoteDirective {

  @Input() quotes: Quote[];

  constructor(private elem: ElementRef) {
     // const favQuote = sortQuotes(this.quotes)[0];
     // console.log(favQuote);
    this.elem.nativeElement.style.backgroundColor = 'red';

  }

}
