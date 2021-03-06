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
      this.images = [];
    }

    RallyCanvas.prototype.setUpSubscription = function setUpSubscription() {
      var _this = this;

      this.eventAggregator.subscribe("image-dragged", function (event) {
        var e = event.event;
        var canvasRect = _this.canvas.getBoundingClientRect();
        var point = {
          x: e.clientX - canvasRect.left - event.offsetX,
          y: e.clientY - canvasRect.top - event.offsetY
        };
        var ctx = _this.canvas.getContext("2d");
        ctx.drawImage(e.target, point.x, point.y, 100, 70);

        _this.images.push({
          img: e.target,
          x: point.x,
          y: point.y
        });
      });
    };

    RallyCanvas.prototype.redraw = function redraw() {
      var CXT = this.canvas.getContext("2d");
      CXT.clearRect(0, 0, 1000, 1000);
      this.images.forEach(function (img) {
        CXT.drawImage(img.img, img.x, img.y, 100, 70);
      });
    };

    RallyCanvas.prototype.touchAndClickHandler = function touchAndClickHandler(event) {
      var _this2 = this;

      this.redraw();
      if (event.type === "touchstart") {
        event = event.changedTouches[0];
      }
      var CANVAS_CLICK_POINT = {
        x: event.clientX - this.canvas.getBoundingClientRect().left,
        y: event.clientY - this.canvas.getBoundingClientRect().top
      };

      var clickedImage = this.images.find(function (image, index) {
        var isImage = CANVAS_CLICK_POINT.x >= image.x && CANVAS_CLICK_POINT.x <= image.x + 100 && CANVAS_CLICK_POINT.y >= image.y && CANVAS_CLICK_POINT.y <= image.y + 70;
        if (isImage) {
          _this2.images.splice(index, 1);
          return true;
        }
      });

      var cxt = this.canvas.getContext("2d");

      if (clickedImage) {
        (function () {
          var OFFSET_X = CANVAS_CLICK_POINT.x - clickedImage.x;
          var OFFSET_Y = CANVAS_CLICK_POINT.y - clickedImage.y;
          document.onmousemove = function (e) {
            cxt.clearRect(0, 0, 1000, 1000);

            clickedImage.x = e.clientX - _this2.canvas.getBoundingClientRect().left - OFFSET_X;
            clickedImage.y = e.clientY - _this2.canvas.getBoundingClientRect().top - OFFSET_Y;

            _this2.images.push(clickedImage);
            cxt.save();
            cxt.rotate(10 * Math.PI / 180);
            cxt.translate(35, 50);
            _this2.images.forEach(function (image) {
              cxt.drawImage(image.img, image.x, image.y, 100, 70);
            });
            cxt.restore();

            cxt.beginPath();
            cxt.rect(clickedImage.x - 1, clickedImage.y - 1, 102, 72);
            cxt.stroke();

            cxt.beginPath();
            cxt.arc(clickedImage.x + 50, clickedImage.y - 8, 5, 0, 2 * Math.PI);
            cxt.stroke();
          };

          var touchMove = function touchMove(e) {

            e = e.changedTouches[0];
            cxt.clearRect(0, 0, 1000, 1000);

            clickedImage.x = e.clientX - _this2.canvas.getBoundingClientRect().left - OFFSET_X;
            clickedImage.y = e.clientY - _this2.canvas.getBoundingClientRect().top - OFFSET_Y;

            _this2.images.push(clickedImage);

            _this2.images.forEach(function (image) {
              cxt.drawImage(image.img, image.x, image.y, 100, 70);
            });
          };
          document.addEventListener("touchmove", touchMove);
          document.addEventListener("touchend", function () {
            document.removeEventListener("touchmove", touchMove);
          });
        })();
      }
    };

    RallyCanvas.prototype.releasePressHandler = function releasePressHandler(event) {
      document.onmousemove = undefined;
    };

    RallyCanvas.prototype.click = function click(event) {
      var _this3 = this;

      var CANVAS_CLICK_POINT = {
        x: event.clientX - this.canvas.getBoundingClientRect().left,
        y: event.clientY - this.canvas.getBoundingClientRect().top
      };

      var clickedImage = this.images.find(function (image, index) {
        var isImage = CANVAS_CLICK_POINT.x >= image.x && CANVAS_CLICK_POINT.x <= image.x + 100 && CANVAS_CLICK_POINT.y >= image.y && CANVAS_CLICK_POINT.y <= image.y + 70;
        if (isImage) {
          _this3.images.splice(index, 1);
          return true;
        }
      });
      if (!clickedImage) {
        return;
      }
      console.log(123);

      var CXT = this.canvas.getContext("2d");
      CXT.clearRect(0, 0, 1000, 1000);

      this.images.forEach(function (img) {
        CXT.drawImage(img.img, img.x, img.y, 100, 70);
      });

      CXT.rect(clickedImage.x - 1, clickedImage.y - 1, 101, 71);
      CXT.stroke();

      this.images.push(clickedImage);
      CXT.beginPath();
      CXT.drawImage(clickedImage.img, clickedImage.x, clickedImage.y, 100, 70);
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
define('text!about.html', ['module'], function(module) { module.exports = "<template>\n\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = ".content {\r\n    margin-top: 65px;\r\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"resources/elements/header\"></require>\r\n  <require from=\"bootstrap/css/bootstrap.min.css\"></require>\r\n  <require from=\"./app.css\"></require>\r\n  <header message.bind=\"message\" router.bind=\"router\"></header>\r\n  <div class=\"content\">\r\n    <router-view></router-view>\r\n  </div>  \r\n</template>"; });
define('text!home.css', ['module'], function(module) { module.exports = ""; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./home.css\"></require>\r\n  <require from=\"resources/elements/side-bar\"></require>\r\n  <require from=\"resources/elements/rally-canvas\"></require>\r\n  <side-bar class=\"row\"></side-bar>\r\n  <rally-canvas></rally-canvas>\r\n</template>\r\n"; });
define('text!resources/elements/rally-canvas.css', ['module'], function(module) { module.exports = "canvas {\r\n  position: absolute;\r\n  left: 270px;\r\n  top:0;\r\n  bottom: 0;\r\n  top: 55px;\r\n  outline: solid #e7e7e7 1px;\r\n  border: solid #f8f8f8 1px;\r\n\r\n}\r\n"; });
define('text!resources/elements/header.html', ['module'], function(module) { module.exports = "<template bindable=\"message\" bindable=\"router\">\r\n\r\n  <require from=\"resources/attributes/tool-tip\"></require>\r\n\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a href=\"/\" class=\"navbar-brand\">${message}</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n        <a tool-tip title.bind=\"row.title\" href.bind=\"row.href\">${getName(row.title)}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n</template>\r\n"; });
define('text!resources/elements/side-bar.css', ['module'], function(module) { module.exports = "side-bar {\r\n  width: 280px;\r\n  position: absolute;\r\n  overflow-y: hidden;\r\n  top: 50px;\r\n  left: 0;\r\n  bottom: 0;\r\n  padding: 0;\r\n}\r\n.side-menu {\r\n  width: 280px;\r\n  position: absolute;\r\n  overflow-y: hidden;\r\n  top:0;\r\n  left: 0;\r\n  bottom: 0;\r\n  padding: 0;\r\n  border-right: 1px solid #e7e7e7;\r\n  background-color: #f8f8f8;\r\n}\r\n.sign-list {\r\n  height: calc(100% - 50px);\r\n  overflow-y: scroll;\r\n  bottom: 0;\r\n}\r\n.listItem {\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #e7e7e7;\r\n}\r\n.listItem a {\r\n  margin: 10px;\r\n}\r\n.sign-list::-webkit-scrollbar {\r\n  width: 12px;\r\n}\r\n.sign-list::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.1);\r\n  border-radius: 2px;\r\n}\r\n\r\n.sign-list::-webkit-scrollbar-thumb {\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.5);\r\n}\r\n#dragging.image {\r\n  width: 100px;\r\n  position: absolute;\r\n  zIndex: 9999;\r\n}\r\n"; });
define('text!resources/elements/rally-canvas.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./rally-canvas.css\"></require>\n  <canvas ref=\"canvas\" height=\"600px\" width=\"800px\" top=\"0\"\n          mousedown.delegate=\"touchAndClickHandler($event)\"\n          touchstart.delegate=\"touchAndClickHandler($event)\"\n          mouseup.delegate=\"releasePressHandler($event)\"\n          <!--click.delegate=\"click($event)\"-->\n  ></canvas>\n</template>\n<!--\ndragover.delegate=\"onDrop(1)\" drop.delegate=\"onDrop($event)\"\n-->\n"; });
define('text!resources/elements/side-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"filter\">\r\n  <require from=\"./side-bar.css\"></require>\r\n  <require from=\"./sign-list-item\"></require>\r\n  <require from=\"resources/attributes/tool-tip\"></require>\r\n  <div class=\"side-menu col-sm-3 col-md2 sidebar\">\r\n    <form class=\"navbar-form\" role=\"search\">\r\n      <div class=\"input-group\">\r\n        <input tool-tip title=\"Filtrera på skyltens nummer. Exempelvis 401\"\r\n               type=\"text\" class=\"form-control\" value.two-way=\"filter\"\r\n               placeholder=\"Filter\" name=\"q\">\r\n        <div class=\"input-group-btn\">\r\n          <button class=\"btn btn-default\" type=\"submit\">Filter</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <ul class=\"sign-list nav nav-sidebar\" ref=\"list\">\r\n      <!--Master class signs-->\r\n      <li class=\"listItem\" repeat.for=\"i of 13\">\r\n        <a>\r\n        ${400 + (i+1)}\r\n          <img src=\"img/${400 + (i+1)}.jpg\" alt=\"cannot find ${400 + (i+1)}\" touchend.delegate=\"onMouseUp($event)\" mouseup.delegate=\"onMouseUp($event)\" touchstart.delegate=\"touchStart($event)\" mousedown.delegate=\"mouseDown($event)\" width=\"100px\"/>\r\n        </a>\r\n      </li>\r\n      <!--END master class signs-->\r\n    </ul>\r\n  </div>\r\n</template>\r\n"; });
define('text!resources/elements/sign-list-item.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"sign-list-item-container\">\r\n    <slot></slot>\r\n  </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map