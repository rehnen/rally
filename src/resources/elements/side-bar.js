import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class SideBar {
    @bindable filter;
    constructor(eventAggregator) {
      this.eventAggregator = eventAggregator;
      this.elements = [];
    }
    filterChanged(newValue) { //REMINDER: takes oldValue as second param
        if(!this.list)
            return;        
        var listItems = this.list.querySelectorAll("li");
        listItems.forEach((item) => {
            if(item.innerHTML.indexOf(newValue) === -1) {
                item.style.display = "none";
            } else {
                item.style.display = "block";                
            }
        });
    }
    imageClicked(e) {
      this.eventAggregator.publish("image-dragged", e);
    }
}

