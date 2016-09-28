/**
 * A basic hello-world Angular 2 app
 */
import { 
  NgModule,
  Component 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'hello-world',
  template: `
  <div>
    Hello world
  </div>
  `
})
class HelloWorld {
}

@NgModule({
  declarations: [ HelloWorld ],
  imports: [ BrowserModule ],
  bootstrap: [ HelloWorld ],
})
class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
