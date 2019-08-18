import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    // tslint:disable-next-line:max-line-length
    new Quote(1, 'The Man in the Arena Quote', 'It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat', 'Theodore Roosevelt', 'RK', 0, 0),
    new Quote(2, 'Creativity', 'To invent… is to choose', 'Henri Poincaré', 'Robert Frost', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(3, 'Find your Purpose', 'Find something more important than you are, and dedicate your life to it!', 'Dan Dennett', 'Maria Popova', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(4, 'Life\'s Dance', 'I myself am a firm believer in the power of curiosity and choice as the engine of fulfillment, but precisely how you arrive at your true calling is an intricate and highly individual dance of discovery', 'Maria Popova', 'RK', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(5, 'The foly of prestige', 'What you should not do, I think, is worry about the opinion of anyone beyond your friends. You shouldn’t worry about prestige. Prestige is the opinion of the rest of the world.\n' +
      '[…]\n' +
      // tslint:disable-next-line:max-line-length
      'Prestige is like a powerful magnet that warps even your beliefs about what you enjoy. It causes you to work not on what you like, but what you’d like to like\n', 'Paul Graham', 'RK', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(6, 'The pleasures and sorrows of work', 'One of the interesting things about success is that we think we know what it means. A lot of the time our ideas about what it would mean to live successfully are not our own. They’re sucked in from other people. And we also suck in messages from everything from the television to advertising to marketing, etcetera. These are hugely powerful forces that define what we want and how we view ourselves. What I want to argue for is not that we should give up on our ideas of success, but that we should make sure that they are our own. We should focus in on our ideas and make sure that we own them, that we’re truly the authors of our own ambitions. Because it’s bad enough not getting what you want, but it’s even worse to have an idea of what it is you want and find out at the end of the journey that it isn’t, in fact, what you wanted all along\n', 'Alain de Botton', 'RK', 0, 0),

    // tslint:disable-next-line:max-line-length
    new Quote(7, 'Boundaries', '16. The most important thing a creative per­son can learn professionally is where to draw the red line that separates what you are willing to do, and what you are not. \n' +
      // tslint:disable-next-line:max-line-length
      'Art suffers the moment other people start paying for it. The more you need the money, the more people will tell you what to do. The less control you will have. The more bullshit you will have to swallow. The less joy it will bring. Know this and plan accordingly.\n' +
      '28. The best way to get approval is not to need it. \n' +
      'This is equally true in art and business. And love. And sex. And just about everything else worth having\n', 'Hugh Macleod', 'RK', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(8, 'The gift', 'Work is an intended activity that is accomplished through the will. A labor can be intended but only to the extent of doing the groundwork, or of not doing things that would clearly prevent the labor. Beyond that, labor has its own schedule\n' +
      '…\n' +
      // tslint:disable-next-line:max-line-length
      'There is no technology, no time-saving device that can alter the rhythms of creative labor. When the worth of labor is expressed in terms of exchange value, therefore, creativity is automatically devalued every time there is an advance in the technology of work\n', ': Lewis Hyde', 'RK', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(9, 'Flow', 'A kind of intense focus and crisp sense of clarity where you forget yourself, lose track of time, and feel like you’re part of something larger. If you’ve ever pulled an all-nighter for a pet project, or even spent 20 consecutive hours composing a love letter, you’ve experienced flow and you know creative labor', 'Mihaly Csikszentmihalyi', 'RK', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(10, 'The power of intuition', 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it. And, like any great relationship, it just gets better and better as the years roll on. So keep looking until you find it. Don’t settle\n', 'Steve Jobs', 'RK', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(11, 'The social aspect of loving what you do', 'You will build a body of work, but you will also build a body of affection, with the people you’ve helped who’ve helped you back. This is the era of Friends in Low Places. The ones you meet now, who will notice you, challenge you, work with you, and watch your back. Maybe they will be your strength.\n' +
      '…\n' +
      // tslint:disable-next-line:max-line-length
      'If you can… fall in love, with the work, with people you work with, with your dreams and their dreams. Whatever it was that got you to this school, don’t let it go. Whatever kept you here, don’t let that go. Believe in your friends. Believe that what you and your friends have to say… that the way you’re saying it — is something new in the world\n', 'Robert Krulwich', 'RK', 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quote(12, 'The Holstee Manifesto', 'This is your life.  Do what you love, and do it often.  If you don’t like your job, quit.  If you don’t have enough time, stop watching TV.  If you are looking for the love of your life, stop; they will be waiting for you when you start doing things you love.  Stop over analyzing, life is simple.  All emotions are beautiful.  When you eat, appreciate every last bite.  Open your mind, arms, and heart to new things and people, we are united in our differences.  Ask the next person you see what their passion is, and share your inspiring dream with them.  Travel often; getting lost will help you find yourself.  Some opportunities only come once, seize them.  Life is about the people you meet, and the things you create with them so go out and start creating.  Life is short.  Live your dream and share your passion', 'Holstee’s three founders – Mike, Fabian and Dave', 'RK', 0, 0),
  ];

  toggleDetails(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete this goal?');

      if (toDelete) {
      this.quotes.splice(index, 1);
      }
    }
  }

  upvoteQuote(isUpVoted, index) {
    if (isUpVoted) {
      this.quotes[index].quoteUpVote ++;
    }
  }

  downvoteQuote(isDownVoted, index) {
    if (isDownVoted) {
      this.quotes[index].quoteDownVote ++;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
