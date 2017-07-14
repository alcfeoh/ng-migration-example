import {Component, Inject} from '@angular/core';
import 'angular';
import {downgradeComponent} from "@angular/upgrade/static";
import {SampleService} from "../sample.service";

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

  name = "World";

  constructor(public service: SampleService) {
  }

  showSomethingSpecial() {
    this.service.showSomethingSpecial(this.name);
  }
}

angular.module('myapp').directive('appExample', downgradeComponent({component: ExampleComponent}));
