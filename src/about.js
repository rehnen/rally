import {observable} from "aurelia-framework";
export class About {
  @observable m = "Hello world";
  mChanged(newValue, oldValue) {
    console.log(newValue, oldValue);
  }
}
