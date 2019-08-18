import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isUpVoted = new EventEmitter<boolean>();
  @Output() isDownVoted = new EventEmitter<boolean>();

  quoteUpVote(upvote: boolean) {
    this.isUpVoted.emit(upvote);
  }

  quoteDownVote(downvote: boolean) {
    this.isDownVoted.emit(downvote);
  }

  constructor() { }

  ngOnInit() {
  }

}
