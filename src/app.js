export class App {
  constructor() {
    this.message = 'Rally in aurelia!';
  }
  
  configureRouter(config, router) {
    this.router = router;    
    config.title = "Rally";
    config.options.pushState = true;
    config.map([
      {
        route: ["", "home", "start"],
        name: "Home",
        moduleId: "home",
        nav: true,
        title: "Börja bygga bana!"
      },
      {
        route: "about",
        name: "About",
        moduleId: "about",
        nav: true,
        title: "About Marcus"
      }
    ]);
  }
}
