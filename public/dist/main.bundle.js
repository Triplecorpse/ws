webpackJsonp([1,4],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewer_detection_service__ = __webpack_require__(306);
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


var viewerUrl = 'ws://localhost:3333/';
var ViewerDetectionOutputService = (function () {
    function ViewerDetectionOutputService(wsService) {
        this.wsService = wsService;
        this.connection = this.wsService.connection;
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(523);
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
        this.connection = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"]();
    }
    ViewerDetectionService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            if (!this.subject.hasError) {
            }
            else {
            }
        }
        return this.subject;
    };
    ViewerDetectionService.prototype.create = function (url) {
        var _this = this;
        var ws = new WebSocket(url);
        ws.onopen = function () {
            _this.connection.next({ text: 'Connection established' });
        };
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                console.log(ws.readyState, WebSocket.OPEN);
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

/***/ 351:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 351;


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(463);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__ = __webpack_require__(305);
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
    function AppComponent(viewerDetectionOutput) {
        var _this = this;
        this.viewerDetectionOutput = viewerDetectionOutput;
        this.initMessage = {
            type: 'rpc',
            message_id: '26fcc4a9-2fc5-4c46-a272-5e33485d9026',
            method_name: 'request_manifest',
            data: {}
        };
        this.statusText = 'Connecting...';
        viewerDetectionOutput.messages
            .subscribe(function (msg) {
            // console.log(msg);
        });
        viewerDetectionOutput.connection
            .subscribe(function (data) {
            _this.statusText = data.text;
            console.log(new Date());
            setTimeout(function () {
                viewerDetectionOutput.messages
                    .next(_this.initMessage);
            }, 1000);
        });
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(520),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_detection_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewer_detection_output_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__person_person_component__ = __webpack_require__(462);
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
                __WEBPACK_IMPORTED_MODULE_7__person_person_component__["a" /* PersonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__viewer_detection_service__["a" /* ViewerDetectionService */], __WEBPACK_IMPORTED_MODULE_6__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 462:
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
            template: __webpack_require__(521),
            styles: [__webpack_require__(518)]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonComponent);
    return PersonComponent;
}());
//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ 463:
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

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)();
// imports


// module
exports.push([module.i, ".content-image {\n  max-width: 100%;\n  max-height: 300px;\n  margin: 20px auto;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)();
// imports


// module
exports.push([module.i, ".panel-heading {\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <img src=\"../assets/advertima-logo.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div>{{statusText}}</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"viewer\" class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n      {{viewer.rolling_expected_values.gender}}, {{viewer.rolling_expected_values.age}} years old\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <p>\r\n      Id: {{viewer.person_id}}\r\n    </p>\r\n    <p>\r\n      Came on: {{getTime(viewer.local_timestamp)}}\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);


/***/ })

},[803]);
//# sourceMappingURL=main.bundle.js.map