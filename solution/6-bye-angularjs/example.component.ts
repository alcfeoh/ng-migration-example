import {Component} from '@angular/core';

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

