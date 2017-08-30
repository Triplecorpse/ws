webpackJsonp([1,4],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_delivery_service__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentDeliveryOutputService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var viewerUrl = 'ws://localhost:3333/show-content';
var ContentDeliveryOutputService = (function () {
    function ContentDeliveryOutputService(wsService) {
        this.messages = wsService
            .connect(viewerUrl)
            .map(function (response) {
            var res = JSON.parse(response.data);
            return {
                local_timestamp: res.local_timestamp,
                name_of_event: res.name_of_event,
                content_id: res.content_id,
                content_name: res.content_name
            };
        });
    }
    ContentDeliveryOutputService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__content_delivery_service__["a" /* ContentDeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__content_delivery_service__["a" /* ContentDeliveryService */]) === 'function' && _a) || Object])
    ], ContentDeliveryOutputService);
    return ContentDeliveryOutputService;
    var _a;
}());
//# sourceMappingURL=content-delivery-output.service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentDeliveryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentDeliveryService = (function () {
    function ContentDeliveryService() {
    }
    ContentDeliveryService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            if (!this.subject.hasError) {
                console.warn('Content connection established');
            }
        }
        return this.subject;
    };
    ContentDeliveryService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"].create(observer, observable);
    };
    ContentDeliveryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ContentDeliveryService);
    return ContentDeliveryService;
}());
//# sourceMappingURL=content-delivery.service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewer_detection_service__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerDetectionOutputService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var viewerUrl = 'ws://localhost:3333/connect-viewer';
var ViewerDetectionOutputService = (function () {
    function ViewerDetectionOutputService(wsService) {
        this.messages = wsService
            .connect(viewerUrl)
            .map(function (response) {
            var res = JSON.parse(response.data);
            return JSON.parse(response.data);
        });
    }
    ViewerDetectionOutputService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__viewer_detection_service__["a" /* ViewerDetectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__viewer_detection_service__["a" /* ViewerDetectionService */]) === 'function' && _a) || Object])
    ], ViewerDetectionOutputService);
    return ViewerDetectionOutputService;
    var _a;
}());
//# sourceMappingURL=viewer-detection-output.service.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerDetectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewerDetectionService = (function () {
    function ViewerDetectionService() {
    }
    ViewerDetectionService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            if (!this.subject.hasError) {
                console.warn('Viewer connection established');
            }
        }
        return this.subject;
    };
    ViewerDetectionService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"].create(observer, observable);
    };
    ViewerDetectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ViewerDetectionService);
    return ViewerDetectionService;
}());
//# sourceMappingURL=viewer-detection.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 354;


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_delivery_output_service__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(viewerDetectionOutput, contentDeliveryOutput) {
        var _this = this;
        this.viewerDetectionOutput = viewerDetectionOutput;
        this.contentDeliveryOutput = contentDeliveryOutput;
        this.viewers = [];
        this.content = '';
        this.stats = {
            age: 0,
            gender: '',
            people: 0
        };
        this.message = {
            author: 'AUTH1',
            message: ''
        };
        viewerDetectionOutput.messages
            .subscribe(function (msg) {
            _this.updateViewers(msg);
        });
        contentDeliveryOutput.messages
            .subscribe(function (msg) {
            _this.previousContentId = _this.contentId;
            _this.setStats();
            _this.setContentUrl(msg);
        });
    }
    AppComponent.prototype.updateViewers = function (viewer) {
        if (viewer.away) {
            return;
        }
        this.viewers = viewer;
    };
    AppComponent.prototype.setStats = function () {
        var avgGender = 'Male';
        var mGenderCount = 0;
        var fGenderCount = 0;
        var avgAge = 0;
        if (!this.viewers.length) {
            return;
        }
        this.viewers.forEach(function (viewer) {
            if (viewer.rolling_expected_values.gender === 'male') {
                mGenderCount++;
            }
            else {
                fGenderCount++;
            }
        });
        var sum = this.viewers.reduce(function (v1, v2) {
            var sum = 0;
            if (typeof v1 === 'number') {
                sum = v1;
            }
            else {
                sum = v1.rolling_expected_values.age;
            }
            return sum + v2.rolling_expected_values.age;
        });
        avgAge = sum / this.viewers.length;
        if (fGenderCount > mGenderCount) {
            avgGender = 'Female';
        }
        this.stats.age = avgAge.toFixed(2);
        this.stats.gender = avgGender;
        this.stats.people = this.viewers.length;
    };
    AppComponent.prototype.setContentUrl = function (msg) {
        if (msg) {
            this.content = '../assets/' + msg.content_name;
            this.contentId = msg.content_id;
        }
        else {
            this.content = '';
        }
    };
    AppComponent.prototype.sendMsg = function (command) {
        this.message.message = command;
        this.viewerDetectionOutput.messages
            .next(this.message);
        this.message.message = 'start';
        this.contentDeliveryOutput.messages
            .next(this.message);
        this.message.message = '';
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(523),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__content_delivery_output_service__["a" /* ContentDeliveryOutputService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__content_delivery_output_service__["a" /* ContentDeliveryOutputService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_detection_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewer_detection_output_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_delivery_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_delivery_output_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__person_person_component__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__person_person_component__["a" /* PersonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__viewer_detection_service__["a" /* ViewerDetectionService */], __WEBPACK_IMPORTED_MODULE_6__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */], __WEBPACK_IMPORTED_MODULE_7__content_delivery_service__["a" /* ContentDeliveryService */], __WEBPACK_IMPORTED_MODULE_8__content_delivery_output_service__["a" /* ContentDeliveryOutputService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonComponent = (function () {
    function PersonComponent() {
    }
    PersonComponent.prototype.getTime = function (timestamp) {
        var time = new Date(timestamp);
        return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], PersonComponent.prototype, "viewer", void 0);
    PersonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-person',
            template: __webpack_require__(524),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonComponent);
    return PersonComponent;
}());
//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)();
// imports


// module
exports.push([module.i, ".content-image {\n  max-width: 100%;\n  max-height: 300px;\n  margin: 20px auto;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)();
// imports


// module
exports.push([module.i, ".panel-heading {\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <img src=\"../assets/advertima-logo.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div>\n        Previuos Content Avg Gender:{{stats.gender}}\n      </div>\n      <div>\n        Previuos Content Avg Age:{{stats.age}}\n      </div>\n      <div>\n        Previuos Content People:{{stats.people}}\n      </div>\n      <div>\n        Previuos Content Id:{{previousContentId}}\n      </div>\n      <hr>\n      <div>\n        Content Id:{{contentId}}\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" (click)=\"sendMsg('start')\">New Person</button>\n      <button class=\"btn btn-primary\" (click)=\"sendMsg('remove.one')\">Remove Random Person</button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\" *ngIf=\"content\">\n        <img class=\"content-image\" [src]=\"content\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let viewer of viewers\">\n      <app-person [viewer]=\"viewer\">\n      </app-person>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"viewer\" class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n      {{viewer.rolling_expected_values.gender}}, {{viewer.rolling_expected_values.age}} years old\n  </div>\n  <div class=\"panel-body\">\n    <p>\n      Id: {{viewer.person_id}}\n    </p>\n    <p>\n      Came on: {{getTime(viewer.local_timestamp)}}\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(355);


/***/ })

},[805]);
//# sourceMappingURL=main.bundle.js.map