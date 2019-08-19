import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Quote} from './quote';

@Directive({
  selector: '[appBestquote]'
})

export class BestquoteDirective {

  @Input() quotes: Quote[];

  constructor(private elem: ElementRef) {}

@HostListener('click') onClicks() {
    console.log(this.quotes[1]);

    const sortByUpvotes = (quotes: Quote[]) => {

    quotes.sort((quoteA, quoteB) => {
       if (quoteA.quoteUpVote > quoteB.quoteUpVote) { return 1; }
       if (quoteA.quoteUpVote < quoteB.quoteUpVote) { return 0; }

    const sortedByUpvotes = sortByUpvotes(quotes);
    console.log(quotes);
    });

  };
    alert('The best quote is: ');
}

}
