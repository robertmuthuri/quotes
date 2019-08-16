export class Quote {
  id: number;
  name: string;
  quoteText: string;
  quoteAuthor: string;
  quoteSubmitter: string;
  quoteUpVote: number = 0;
  quoteDownVote: number = 0;
}
