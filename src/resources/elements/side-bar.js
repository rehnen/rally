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
  mouseDown(e) {
    console.log("mousedown");
    const imageRect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - imageRect.left;
    const offsetY = e.clientY - imageRect.top;

    this.image = document.createElement("img");
    this.image.src = e.target.src;
    this.image.setAttribute("id", "dragging-image");
    this.image.width = 100;
    this.image.style.position = "absolute";
    this.image.style.zIndex = 9999;
    this.image.style.left = (e.clientX - offsetX) + "px";
    this.image.style.top = (e.clientY - offsetY) + "px";
    document.getElementsByTagName("body")[0].appendChild(this.image);

    this.image.onmouseup = (e) => {
      console.log(e);
      document.onmousemove = undefined;
      document.ontouchmove = undefined;

      document.getElementsByTagName("body")[0].removeChild(this.image);
      this.eventAggregator.publish("image-dragged", {
        event: e,
        offsetX: offsetX,
        offsetY: offsetY
      });
    };

    document.onmousemove = (e) => {
      this.image.style.left = (e.clientX - offsetX) + "px";
      this.image.style.top = (e.clientY - offsetY) + "px";
    };

  }
  onMouseUp(e) {
    console.log(e)
    document.onmousemove = undefined;
    return true; //do not prevent default;
  }

  touchStart(e) {
    console.log("touchstart")
    console.log(e)

    const imageRect = e.target.getBoundingClientRect();
    const offsetX = e.targetTouches[0].clientX - imageRect.left;
    const offsetY = e.targetTouches[0].clientY - imageRect.top;

    this.image = document.createElement("img");
    this.image.src = e.target.src;
    this.image.setAttribute("id", "dragging-image");
    this.image.width = 100;
    this.image.style.position = "absolute";
    this.image.style.zIndex = 9999;
    this.image.style.left = (e.targetTouches[0].clientX - offsetX) + "px";
    this.image.style.top = (e.targetTouches[0].clientY - offsetY) + "px";
    document.getElementsByTagName("body")[0].appendChild(this.image);


    const touchHandler = (e) => {
      this.image.style.left = (e.targetTouches[0].clientX - offsetX) + "px";
      this.image.style.top = (e.targetTouches[0].clientY - offsetY) + "px";
      this.latestDrag = e;
    };

    const touchEndHandler = (e) => {
      document.removeEventListener("touchmove", touchHandler);
      document.removeEventListener("touchend", touchEndHandler);

      console.log(e);
      document.getElementsByTagName("body")[0].removeChild(this.image);
      const positions = {
        clientX: this.latestDrag.targetTouches[0].clientX,
        clientY: this.latestDrag.targetTouches[0].clientY,
        target: this.latestDrag.target
      };
      this.eventAggregator.publish("image-dragged", {
        event: positions,
        offsetX: offsetX,
        offsetY: offsetY
      });
    };

    document.addEventListener("touchmove", touchHandler);
    document.addEventListener("touchend", touchEndHandler);
  }
}

