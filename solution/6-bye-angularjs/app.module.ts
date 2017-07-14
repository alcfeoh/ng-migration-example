import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import {SampleService} from "./sample.service";

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SampleService
  ],
  bootstrap: [ExampleComponent]
})
export class AppModule {
}


