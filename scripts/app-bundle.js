define('about',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.About = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var About = exports.About = function About() {
    _classCallCheck(this, About);
  };
});
define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'Rally in aurelia!';
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = "Rally";
      config.options.pushState = true;
      config.map([{
        route: ["", "home", "start"],
        name: "Home",
        moduleId: "home",
        nav: true,
        title: "Börja bygga bana!"
      }, {
        route: "about",
        name: "About",
        moduleId: "about",
        nav: true,
        title: "About Marcus"
      }]);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('home',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/attributes/tool-tip',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ToolTipCustomAttribute = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var ToolTipCustomAttribute = exports.ToolTipCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = (_class2 = function () {
    function ToolTipCustomAttribute(element) {
      _classCallCheck(this, ToolTipCustomAttribute);

      _initDefineProp(this, "title", _descriptor, this);

      _initDefineProp(this, "placement", _descriptor2, this);

      this.element = element;

      if (!this.placement) {
        this.placement = "bottom";
      }
    }

    ToolTipCustomAttribute.prototype.attached = function attached() {
      $(this.element).tooltip({
        title: this.title,
        placement: this.placement,
        delay: 100,
        animation: true,
        width: "500px"
      });
    };

    return ToolTipCustomAttribute;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "placement", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});
define('resources/elements/header',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Header = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

  var Header = exports.Header = (_class = function () {
    function Header() {
      _classCallCheck(this, Header);

      _initDefineProp(this, 'router', _descriptor, this);

      _initDefineProp(this, 'message', _descriptor2, this);

      _initDefineProp(this, 'routes', _descriptor3, this);
    }

    Header.prototype.routerChange = function routerChange(router) {
      this.router = router;
      console.log(router);
    };

    Header.prototype.getName = function getName(title) {
      var route = this.router.routes.find(function (a) {
        return a.title === title;
      });
      return route.name;
    };

    return Header;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'router', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'message', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'routes', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/elements/rally-canvas',['exports', 'aurelia-framework', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RallyCanvas = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var RallyCanvas = exports.RallyCanvas = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = (_class2 = function () {
    function RallyCanvas(eventAggregator) {
      _classCallCheck(this, RallyCanvas);

      _initDefineProp(this, 'value', _descriptor, this);

      this.eventAggregator = eventAggregator;
      this.setUpSubscription();
    }

    RallyCanvas.prototype.setUpSubscription = function setUpSubscription() {
      var _this = this;

      this.eventAggregator.subscribe("image-dragged", function (event) {
        console.log("retarded", event);
        var e = event.event;
        var canvasRect = _this.canvas.getBoundingClientRect();
        console.log(canvasRect, e);
        var point = {
          x: e.clientX - canvasRect.left - event.offsetX,
          y: e.clientY - canvasRect.top - event.offsetY
        };
        var ctx = _this.canvas.getContext("2d");
        ctx.drawImage(e.target, point.x, point.y, 100, 70);
        console.log(canvasRect);
        console.log(e.screenY, window.screenY);
      });
    };

    return RallyCanvas;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});
define('resources/elements/side-bar',['exports', 'aurelia-framework', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SideBar = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var SideBar = exports.SideBar = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = (_class2 = function () {
    function SideBar(eventAggregator) {
      _classCallCheck(this, SideBar);

      _initDefineProp(this, 'filter', _descriptor, this);

      this.eventAggregator = eventAggregator;
      this.elements = [];
    }

    SideBar.prototype.filterChanged = function filterChanged(newValue) {
      if (!this.list) return;
      var listItems = this.list.querySelectorAll("li");
      listItems.forEach(function (item) {
        if (item.innerHTML.indexOf(newValue) === -1) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
    };

    SideBar.prototype.mouseDown = function mouseDown(e) {
      var _this = this;

      console.log("mousedown");
      var imageRect = e.target.getBoundingClientRect();
      var offsetX = e.clientX - imageRect.left;
      var offsetY = e.clientY - imageRect.top;

      this.image = document.createElement("img");
      this.image.src = e.target.src;
      this.image.setAttribute("id", "dragging-image");
      this.image.width = 100;
      this.image.style.position = "absolute";
      this.image.style.zIndex = 9999;
      this.image.style.left = e.clientX - offsetX + "px";
      this.image.style.top = e.clientY - offsetY + "px";
      document.getElementsByTagName("body")[0].appendChild(this.image);

      this.image.onmouseup = function (e) {
        console.log(e);
        document.onmousemove = undefined;
        document.ontouchmove = undefined;

        document.getElementsByTagName("body")[0].removeChild(_this.image);
        _this.eventAggregator.publish("image-dragged", {
          event: e,
          offsetX: offsetX,
          offsetY: offsetY
        });
      };

      document.onmousemove = function (e) {
        _this.image.style.left = e.clientX - offsetX + "px";
        _this.image.style.top = e.clientY - offsetY + "px";
      };
    };

    SideBar.prototype.onMouseUp = function onMouseUp(e) {
      console.log(e);
      document.onmousemove = undefined;
      return true;
    };

    SideBar.prototype.touchStart = function touchStart(e) {
      var _this2 = this;

      console.log("touchstart");
      console.log(e);

      var imageRect = e.target.getBoundingClientRect();
      var offsetX = e.targetTouches[0].clientX - imageRect.left;
      var offsetY = e.targetTouches[0].clientY - imageRect.top;

      this.image = document.createElement("img");
      this.image.src = e.target.src;
      this.image.setAttribute("id", "dragging-image");
      this.image.width = 100;
      this.image.style.position = "absolute";
      this.image.style.zIndex = 9999;
      this.image.style.left = e.targetTouches[0].clientX - offsetX + "px";
      this.image.style.top = e.targetTouches[0].clientY - offsetY + "px";
      document.getElementsByTagName("body")[0].appendChild(this.image);

      var touchHandler = function touchHandler(e) {
        _this2.image.style.left = e.targetTouches[0].clientX - offsetX + "px";
        _this2.image.style.top = e.targetTouches[0].clientY - offsetY + "px";
        _this2.latestDrag = e;
      };

      var touchEndHandler = function touchEndHandler(e) {
        document.removeEventListener("touchmove", touchHandler);
        document.removeEventListener("touchend", touchEndHandler);

        console.log(e);
        document.getElementsByTagName("body")[0].removeChild(_this2.image);
        var positions = {
          clientX: _this2.latestDrag.targetTouches[0].clientX,
          clientY: _this2.latestDrag.targetTouches[0].clientY,
          target: _this2.latestDrag.target
        };
        _this2.eventAggregator.publish("image-dragged", {
          event: positions,
          offsetX: offsetX,
          offsetY: offsetY
        });
      };

      document.addEventListener("touchmove", touchHandler);
      document.addEventListener("touchend", touchEndHandler);
    };

    return SideBar;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'filter', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});
define('resources/elements/sign-list-item',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SignListItem = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var SignListItem = exports.SignListItem = (_class = function () {
    function SignListItem() {
      _classCallCheck(this, SignListItem);

      _initDefineProp(this, 'value', _descriptor, this);
    }

    SignListItem.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return SignListItem;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('text!about.html', ['module'], function(module) { module.exports = "<template>\n  \n</template>"; });
define('text!app.css', ['module'], function(module) { module.exports = ".content {\r\n    margin-top: 65px;\r\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"resources/elements/header\"></require>\n  <require from=\"bootstrap/css/bootstrap.min.css\"></require>\n  <require from=\"./app.css\"></require>\n  <header message.bind=\"message\" router.bind=\"router\"></header>\n  <div class=\"content\">\n    <router-view></router-view>\n  </div>  \n</template>"; });
define('text!home.css', ['module'], function(module) { module.exports = ""; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./home.css\"></require>\n  <require from=\"resources/elements/side-bar\"></require>\n  <require from=\"resources/elements/rally-canvas\"></require>\n  <side-bar class=\"row\"></side-bar>\n  <rally-canvas></rally-canvas>\n</template>\n"; });
define('text!resources/elements/rally-canvas.css', ['module'], function(module) { module.exports = "canvas {\n  position: absolute;\n  left: 270px;\n  top:0;\n  bottom: 0;\n  top: 55px;\n  outline: solid #e7e7e7 1px;\n  border: solid #f8f8f8 1px;\n\n}\n"; });
define('text!resources/elements/header.html', ['module'], function(module) { module.exports = "<template bindable=\"message\" bindable=\"router\">\n\n  <require from=\"resources/attributes/tool-tip\"></require>\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"/\" class=\"navbar-brand\">${message}</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n        <a tool-tip title.bind=\"row.title\" href.bind=\"row.href\">${getName(row.title)}</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n</template>\n"; });
define('text!resources/elements/side-bar.css', ['module'], function(module) { module.exports = "side-bar {\n  width: 280px;\n  position: absolute;\n  overflow-y: hidden;\n  top: 50px;\n  left: 0;\n  bottom: 0;\n  padding: 0;\n}\n.side-menu {\n  width: 280px;\n  position: absolute;\n  overflow-y: hidden;\n  top:0;\n  left: 0;\n  bottom: 0;\n  padding: 0;\n  border-right: 1px solid #e7e7e7;\n  background-color: #f8f8f8;\n}\n.sign-list {\n  height: calc(100% - 50px);\n  overflow-y: scroll;\n  bottom: 0;\n}\n.listItem {\n  background-color: #fff;\n  border-bottom: 1px solid #e7e7e7;\n}\n.listItem a {\n  margin: 10px;\n}\n.sign-list::-webkit-scrollbar {\n  width: 12px;\n}\n.sign-list::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.1);\n  border-radius: 2px;\n}\n\n.sign-list::-webkit-scrollbar-thumb {\n  border-radius: 2px;\n  -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.5);\n}\n#dragging.image {\n  width: 100px;\n  position: absolute;\n  zIndex: 9999;\n}\n"; });
define('text!resources/elements/rally-canvas.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./rally-canvas.css\"></require>\n  <canvas ref=\"canvas\" height=\"600px\" width=\"800px\" top=\"0\"></canvas>\n</template>\n<!--\ndragover.delegate=\"onDrop(1)\" drop.delegate=\"onDrop($event)\"\n-->\n"; });
define('text!resources/elements/side-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"filter\">\n  <require from=\"./side-bar.css\"></require>\n  <require from=\"./sign-list-item\"></require>\n  <require from=\"resources/attributes/tool-tip\"></require>\n  <div class=\"side-menu col-sm-3 col-md2 sidebar\">\n    <form class=\"navbar-form\" role=\"search\">\n      <div class=\"input-group\">\n        <input tool-tip title=\"Filtrera på skyltens nummer. Exempelvis 401\"\n               type=\"text\" class=\"form-control\" value.two-way=\"filter\"\n               placeholder=\"Filter\" name=\"q\">\n        <div class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"submit\">Filter</button>\n        </div>\n      </div>\n    </form>\n    <ul class=\"sign-list nav nav-sidebar\" ref=\"list\">\n      <!--Master class signs-->\n      <li class=\"listItem\" repeat.for=\"i of 13\">\n        <a>\n        ${400 + (i+1)}\n          <img src=\"img/${400 + (i+1)}.jpg\" alt=\"cannot find ${400 + (i+1)}\" touchend.delegate=\"onMouseUp($event)\" mouseup.delegate=\"onMouseUp($event)\" touchstart.delegate=\"touchStart($event)\" mousedown.delegate=\"mouseDown($event)\" width=\"100px\"/>\n        </a>\n      </li>\n      <!--END master class signs-->\n    </ul>\n  </div>\n</template>\n"; });
define('text!resources/elements/sign-list-item.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"sign-list-item-container\">\n    <slot></slot>\n  </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map