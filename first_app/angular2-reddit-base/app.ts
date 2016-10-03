/**
 * A basic reddit clone
*/

import {
  NgModule,
  Component
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * 
 * 
 * @class Article
 */
@Component({
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  template: `
    <div class="four wide column center aligned votes">
      <div class="ui statistic">
        <div class="value">{{ votes }}</div>
        <div class="label">Points</div>
      </div>
    </div>
    <div class="twelve wide column">
      <a class="ui large header" href="{{ link }}">{{ title }}</a>
      <ul class="ui big horizontal list voters">
        <li class="item">
          <a href (click)="voteUp()"><i class="arrow up icon"></i>upvote</a>
        </li>
        <li class="item">
          <a href (click)="voteDown()"><i class="arrow down icon"></i>downvote</a>
        </li>
      </ul>
    </div>
`
})


class Article {
  /**
   * 
   * 
   * @type {string}
   * @memberOf Article
   */
  title: string;
  /**
   * 
   * 
   * @type {string}
   * @memberOf Article
   */
  link: string;
  /**
   * 
   * 
   * @type {number}
   * @memberOf Article
   */
  votes: number;
  /**
   * Creates an instance of Article.
   * 
   * @param {string} title
   * @param {string} link
   * @param {number} [votes]
   * 
   * @memberOf Article
   */
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0
  }
}

/**
 * 
 * 
 * @class ArticleComponent
 */
/**
 * 
 * 
 * @class ArticleComponent
 */
class ArticleComponent {
  /**
   * 
   * 
   * @type {number}
   * @memberOf ArticleComponent
   */
  votes: number;
  /**
   * 
   * 
   * @type {string}
   * @memberOf ArticleComponent
   */
  title: string;
  /**
   * 
   * 
   * @type {string}
   * @memberOf ArticleComponent
   */
  link: string;
  /**
   * Creates an instance of ArticleComponent.
   * 
   * 
   * @memberOf ArticleComponent
   */
  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }
  /**
   * 
   * 
   * @returns {boolean}
   * 
   * @memberOf ArticleComponent
   */
  voteUp(): boolean {
    this.votes += 1;
    return false
  }
  /**
   * 
   * 
   * @returns {boolean}
   * 
   * @memberOf ArticleComponent
   */
  voteDown(): boolean {
    this.votes -= 1;
    return false
  }
} 

/**
 * 
 * 
 * @class RedditApp
 */
/**
 * 
 * 
 * @class RedditApp
 */
@Component({
  selector: 'reddit',
  template: `
 <form class="ui large form segment">
   <h3 class="ui header">Add a Link</h3>
   <div class="field">
     <label for="title">Title:</label>
     <input name="title" #newtitle> 
   </div>
   <div class="field">
     <label for="link">Link:</label>
     <input name="link" #newlink> 
   </div>

 <!-- added this button -->
   <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">Submit link</button>
 </form>
<div class="ui grid posts"> 
  <reddit-article>
  </reddit-article>
</div>
`
})

class RedditApp {
  /**
   * 
   * 
   * @param {HTMLInputElement} title
   * @param {HTMLInputElement} link
   * @returns {boolean}
   * 
   * @memberOf RedditApp
   */
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    var a = 1;
    console.log(a + 1);
    console.log(a += 1);
    return false;
  }
}

/**
 * 
 * 
 * @class RedditAppModule
 */
@NgModule({
  declarations: [
    RedditApp,
    ArticleComponent 
  ],
  imports: [BrowserModule],
  bootstrap: [RedditApp]
}) class RedditAppModule { }

platformBrowserDynamic().bootstrapModule(RedditAppModule);