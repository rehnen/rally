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
    this.eventAggregator.subscribe("image-dragged", e => {
      console.log(e);
    });
  }
}

