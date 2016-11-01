import {bindable, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class RallyCanvas {
  @bindable value;

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.setUpSubscription();
  }

  setUpSubscription() {
    this.eventAggregator.subscribe("image-dragged", event => {
      console.log("retarded", event)
      const e = event.event;
      const canvasRect = this.canvas.getBoundingClientRect();
      console.log(canvasRect, e)
      const point = {
        x: e.clientX - canvasRect.left - event.offsetX,
        y: e.clientY - canvasRect.top - event.offsetY
      };
      const ctx = this.canvas.getContext("2d");
      ctx.drawImage(e.target, point.x, point.y, 100, 70);
      console.log(canvasRect)
      console.log(e.screenY , window.screenY)
    });
  }


}

