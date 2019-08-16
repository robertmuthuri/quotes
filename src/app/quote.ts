export class Quote {
  // tslint:disable-next-line:max-line-length

showQuote: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(public id: number, public name: string, public quoteText: string, public quoteAuthor: string, public quoteSubmitter: string) {
  // public quoteUpVote: number = 0, public quoteDownVote: number = 0

    this.showQuote = false;

  }

}
