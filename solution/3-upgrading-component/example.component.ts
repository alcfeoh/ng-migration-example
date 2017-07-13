import { Component } from '@angular/core';
import 'angular';
import {downgradeComponent} from "@angular/upgrade/static";

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

  name = "World";

  constructor() { }

  showSomethingSpecial() {
    alert("There you go, " + this.name);
  }
}


angular.module('myapp').directive('appExample', downgradeComponent({component: ExampleComponent}));
