/**
 * This file shows the hello-world app with a name variable binding
 */
System.register(["@angular/core", "@angular/platform-browser", "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, platform_browser_dynamic_1;
    var HelloWorld, HelloWorldAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            HelloWorld = (function () {
                function HelloWorld() {
                    this.name = 'Felipe';
                }
                HelloWorld = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "<div>Hello {{ name }}</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorld);
                return HelloWorld;
            }());
            HelloWorldAppModule = (function () {
                function HelloWorldAppModule() {
                }
                HelloWorldAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [HelloWorld],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [HelloWorld],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorldAppModule);
                return HelloWorldAppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
        }
    }
});
//# sourceMappingURL=app-name.js.map