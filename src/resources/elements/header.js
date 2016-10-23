import {bindable} from 'aurelia-framework';

export class Header {
  @bindable value;
  @bindable message;
  @bindable et = "test message";
  valueChanged(newValue, oldValue) {

  }
  
  trig() {
    console.log(this.message);
  }
  
  messageChanged(newValue, oldValue) {
    console.log(newValue, oldValue);
  }
}