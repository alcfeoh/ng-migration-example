import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'angular';
import {UpgradeModule } from "@angular/upgrade/static";
import { ExampleComponent } from '../../solution/3-upgrading-component/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  entryComponents: [
    ExampleComponent
  ],
  imports: [
    BrowserModule, UpgradeModule
  ],
  providers: []//,
  // We have to remove the regular Angular Bootstrap to use Angular JS instead in hybrid mode
  //bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private upgrade: UpgradeModule){
  }

  ngDoBootstrap(){
      this.upgrade.bootstrap(document.body, ['myapp'], {strictDi: true});
  }
}

