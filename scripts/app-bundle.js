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
define('resources/elements/side-bar',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
    "use strict";

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

    var _desc, _value, _class, _descriptor;

    var SideBar = exports.SideBar = (_class = function () {
        function SideBar() {
            _classCallCheck(this, SideBar);

            _initDefineProp(this, "filter", _descriptor, this);
        }

        SideBar.prototype.filterChanged = function filterChanged(newValue, oldValue) {
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

        return SideBar;
    }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "filter", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class);
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
define('text!resources/elements/side-bar.css', ['module'], function(module) { module.exports = ".side-menu {\n  width: 280px;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  bottom: 0;\n  padding: 0;\n  border-right: 1px solid #e7e7e7;\n  background-color: #f8f8f8;\n}"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"resources/elements/side-bar\"></require>\n  <side-bar class=\"row\"></side-bar>\n</template>\n  "; });
define('text!resources/elements/header.html', ['module'], function(module) { module.exports = "<template bindable=\"message\" bindable=\"router\">\n  \n  <require from=\"resources/attributes/tool-tip\"></require>\n  \n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"/\" class=\"navbar-brand\">${message}</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n        <a tool-tip title.bind=\"row.title\" href.bind=\"row.href\">${getName(row.title)}</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n</template>"; });
define('text!resources/elements/side-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"filter\">\n  <require from=\"./side-bar.css\"></require>\n  <require from=\"./sign-list-item\"></require>\n  <div class=\"side-menu col-sm-3 col-md2 sidebar\">\n    <form class=\"navbar-form\" role=\"search\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" value.two-way=\"filter\" placeholder=\"Filter\" name=\"q\">\n      <div class=\"input-group-btn\">\n        <button class=\"btn btn-default\" type=\"submit\">Filter</button>\n      </div>\n    </div>\n    <sign-list-item>deh hey! thats pretty cool</sign-list-item>\n    <ul class=\"nav nav-sidebar\" ref=\"list\">\n      <!-- TODO pass in an array to loop in the foor loop -->\n      <li repeat.for=\"i of 10\"><a href=\"#\">  item${i+1}</a></li>\n    </ul>\n  </div>\n</template>"; });
define('text!resources/elements/sign-list-item.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"sign-list-item-container\">\n    <slot></slot>\n  </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map