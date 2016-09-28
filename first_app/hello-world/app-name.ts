/**
 * This file shows the hello-world app with a name variable binding
 */

import { 
  NgModule,
  Component 
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'hello-world',
  template: `<div>Hello {{ name }}</div>`
})
class HelloWorld {
  name: string;

  constructor() {
    this.name = 'Felipe';
  }
}

@NgModule({
  declarations: [ HelloWorld ],
  imports: [ BrowserModule ],
  bootstrap: [ HelloWorld ],
})
class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
