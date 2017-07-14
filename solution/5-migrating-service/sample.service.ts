import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor() {
  }

  showSomethingSpecial(name){
    alert("There you go, " + name);
  }
}
