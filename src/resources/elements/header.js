import {bindable} from 'aurelia-framework';

export class Header {
  @bindable router;
  @bindable message;
  @bindable routes;
  
  constructor() {}
  routerChange(router) {
    this.router = router;
    console.log(router);
  }
  getName(title) {
    //The title comes from the list that does not contain duplicates
    //That list however does not contain the name of the 
    var route = this.router.routes.find(a => a.title === title);
    return route.name;
  }
  
  
}