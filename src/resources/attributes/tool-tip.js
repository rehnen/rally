import {inject, bindable} from 'aurelia-framework';

@inject(Element)
export class ToolTipCustomAttribute {
  @bindable title:any;
  @bindable placement:any;
  constructor(element) {
    this.element = element;
    
    if(!this.placement) {
      this.placement = "bottom"
    }
  }
  
  attached() {
    $(this.element).tooltip({
      title:this.title,
      placement: this.placement,
      delay: 100,
      animation: true,
      width: "500px"
    });
  }
}