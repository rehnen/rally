import {bindable, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class RallyCanvas {
  @bindable value;

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.setUpSubscription();
    this.images = [];
  }

  setUpSubscription() {
    this.eventAggregator.subscribe("image-dragged", event => {
      const e = event.event;
      const canvasRect = this.canvas.getBoundingClientRect();
      const point = {
        x: e.clientX - canvasRect.left - event.offsetX,
        y: e.clientY - canvasRect.top - event.offsetY
      };
      const ctx = this.canvas.getContext("2d");
      ctx.drawImage(e.target, point.x, point.y, 100, 70);

      this.images.push({
        img: e.target,
        x: point.x,
        y: point.y
      });

    });
  }

  touchAndClickHandler(event) {
    if(event.type === "touchstart") {
      event = event.changedTouches[0];
    }
    const CANVAS_CLICK_POINT = {
      x: event.clientX - this.canvas.getBoundingClientRect().left,
      y: event.clientY - this.canvas.getBoundingClientRect().top
    };


    let clickedImage = this.images.find((image, index) => {
      let isImage = (CANVAS_CLICK_POINT.x >= image.x
      && CANVAS_CLICK_POINT.x <= image.x + 100
      && CANVAS_CLICK_POINT.y >= image.y
      && CANVAS_CLICK_POINT.y <= image.y + 70);
      if(isImage) {
        this.images.splice(index, 1);
        return true;
      }
    });

    const cxt = this.canvas.getContext("2d");

    if(clickedImage) {
      const OFFSET_X = (CANVAS_CLICK_POINT.x - clickedImage.x);
      const OFFSET_Y = (CANVAS_CLICK_POINT.y - clickedImage.y);
      document.onmousemove = (e) => {
        cxt.clearRect(0,0, 1000, 1000);

        clickedImage.x = e.clientX - this.canvas.getBoundingClientRect().left - OFFSET_X;
        clickedImage.y = e.clientY - this.canvas.getBoundingClientRect().top - OFFSET_Y;



        this.images.push(clickedImage);

        this.images.forEach(image => {
          cxt.drawImage(image.img, image.x, image.y, 100, 70);
        });
      };


        const touchMove = (e) => {

        e = e.changedTouches[0];

        console.log(e);
        cxt.clearRect(0,0, 1000, 1000);

        clickedImage.x = e.clientX - this.canvas.getBoundingClientRect().left - OFFSET_X;
        clickedImage.y = e.clientY - this.canvas.getBoundingClientRect().top - OFFSET_Y;



        this.images.push(clickedImage);

        this.images.forEach(image => {
          cxt.drawImage(image.img, image.x, image.y, 100, 70);
        });
      };
      document.addEventListener("touchmove", touchMove);
      document.addEventListener("touchend", () => {
        document.removeEventListener("touchmove", touchMove);
      });


    }

    console.log("gecklicken", clickedImage);
    console.log(event);
  }

  releasePressHandler(envet) {
    console.log("fisk");
    document.onmousemove = undefined;
  }

}
