import {Component, Inject} from '@angular/core';
import 'angular';
import {downgradeComponent} from "@angular/upgrade/static";

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

  name = "World";

  constructor(@Inject('sampleService') public service) {
    debugger;
  }

  showSomethingSpecial() {
    debugger;
    this.service.showSomethingSpecial(this.name);
  }
}


angular.module('myapp').directive('appExample', downgradeComponent({component: ExampleComponent}));
