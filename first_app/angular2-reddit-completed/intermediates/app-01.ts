import {
  NgModule,
  Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'reddit',
  template: `
    <form class="ui large form segment">
      <h3 class="ui header">Add a Link</h3>

      <div class="field">
        <label for="title">Title:</label>
        <input name="title" #newtitle>  <!-- changed -->
      </div>
      <div class="field">
        <label for="link">Link:</label>
        <input name="link" #newlink> <!-- changed -->
      </div>

      <!-- added this button -->
      <button (click)="addArticle(newtitle, newlink)"  
              class="ui positive right floated button">  
        Submit link  
      </button>  
    </form>
  `
})
class RedditApp {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}

@NgModule({
  declarations: [
    RedditApp
  ],
  imports: [ BrowserModule ],
  bootstrap: [ RedditApp ]
})
class RedditAppModule {}

platformBrowserDynamic().bootstrapModule(RedditAppModule);

