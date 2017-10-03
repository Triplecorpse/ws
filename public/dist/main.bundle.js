webpackJsonp([1,4],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.api = {
            newPerson: '/person'
        };
    }
    DataService.prototype.sendPerson = function (options) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        for (var option in options) {
            if (options.hasOwnProperty(option)) {
                search.set(option, options[option]);
            }
        }
        console.log(options, search);
        return this.http.get(this.api.newPerson, { search: search });
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=data.service.js.map

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


var viewerUrl = 'ws://localhost:3333/';
var ViewerDetectionOutputService = (function () {
    function ViewerDetectionOutputService(wsService) {
        this.wsService = wsService;
        this.connection = this.wsService.connection;
        this.ws = this.wsService.ws;
        this.messages = wsService
            .connect(viewerUrl)
            .map(function (response) {
            return JSON.parse(response.data);
        });
        var msgQ = this.messages.share();
        this.persons_alive = msgQ
            .filter(function (response) {
            return response.subject === 'persons_alive';
        })
            .map(function (alive) {
            return alive.data;
        });
        this.person_update = msgQ
            .filter(function (response) {
            return response.subject === 'person_update';
        })
            .map(function (update) {
            return update.data;
        });
        this.manifest = msgQ
            .filter(function (response) {
            return response.subject === 'manifest';
        })
            .map(function (manifest) {
            return manifest.data;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(528);
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
        }
        return this.subject;
    };
    ViewerDetectionService.prototype.create = function (url) {
        var _this = this;
        var ws = new WebSocket(url);
        ws.onopen = function () {
            _this.connection.next({ text: 'Connection established' });
        };
        this.ws = ws;
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

/***/ 353:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 353;


/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(465);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
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
    function AppComponent(viewerDetectionOutput, dataService) {
        var _this = this;
        this.viewerDetectionOutput = viewerDetectionOutput;
        this.dataService = dataService;
        this.initMessage = {
            type: 'rpc',
            message_id: '26fcc4a9-2fc5-4c46-a272-5e33485d9026',
            method_name: 'request_manifest',
            data: {}
        };
        this.statusText = 'Connecting...';
        this.qty = 1;
        this.people = [];
        viewerDetectionOutput.connection
            .subscribe(function (data) {
            _this.statusText = data.text;
            viewerDetectionOutput.messages
                .next(_this.initMessage);
        });
        viewerDetectionOutput.manifest
            .subscribe(function (data) {
        });
        viewerDetectionOutput.person_update
            .subscribe(function (person) {
            var peopleIds = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](_this.people, function (iterablePerson) { return iterablePerson.person_id; });
            var index = __WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](peopleIds, person.person_id);
            if (!index) {
                _this.people.push(person);
            }
        });
        viewerDetectionOutput.persons_alive
            .subscribe(function (data) {
            var ids = data.person_ids;
        });
    }
    AppComponent.prototype.submitPerson = function (personForm) {
        this.dataService.sendPerson(personForm)
            .subscribe(function (data) {
        });
    };
    AppComponent.prototype.cleanPeople = function (ids) {
        var _this = this;
        var indexesToDelete = [];
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](this.people, function (person, index) {
            var includes = __WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](ids, person.person_id);
            if (!includes) {
                indexesToDelete.push(index);
            }
        });
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](indexesToDelete, function (index) {
            _this.people.splice(index, 1);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.viewerDetectionOutput.messages.unsubscribe();
        this.viewerDetectionOutput.messages.complete();
        this.viewerDetectionOutput.ws.close();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(524),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_detection_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewer_detection_output_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__person_person_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__people_table_people_table_component__ = __webpack_require__(463);
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
                __WEBPACK_IMPORTED_MODULE_7__person_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_9__people_table_people_table_component__["a" /* PeopleTableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__viewer_detection_service__["a" /* ViewerDetectionService */], __WEBPACK_IMPORTED_MODULE_6__viewer_detection_output_service__["a" /* ViewerDetectionOutputService */], __WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleTableComponent = (function () {
    function PeopleTableComponent() {
    }
    PeopleTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], PeopleTableComponent.prototype, "people", void 0);
    PeopleTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-people-table',
            template: __webpack_require__(525),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [])
    ], PeopleTableComponent);
    return PeopleTableComponent;
}());
//# sourceMappingURL=people-table.component.js.map

/***/ }),

/***/ 464:
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
            template: __webpack_require__(526),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonComponent);
    return PersonComponent;
}());
//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ 465:
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

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(93)();
// imports


// module
exports.push([module.i, ".group-header {\n  border-bottom: 1px solid lightgray; }\n\n.separator-top {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(93)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(93)();
// imports


// module
exports.push([module.i, ".panel-heading {\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <img src=\"../assets/advertima-logo.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div>{{statusText}}</div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">New Person(s)</div>\r\n        <div class=\"panel-body\">\r\n          <form id=\"person-form\" #newPersonForm=\"ngForm\" (ngSubmit)=\"submitPerson(newPersonForm.value)\">\r\n            <div class=\"col-xs-6\">\r\n              <p class=\"group-header\">Gender: </p>\r\n              <div class=\"form-group\">\r\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"gender\" value=\"male\" [ngModel]>Male</label>\r\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"gender\" value=\"female\" [ngModel]>Female</label>\r\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"gender\" value=\"random\" [ngModel]=\"'random'\">Hermaphrodite\r\n                  (randomize)</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <p class=\"group-header\">Age: </p>\r\n              <div class=\"col-xs-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"value\">Value</label>\r\n                  <input type=\"number\" class=\"form-control\" id=\"value\" step=\".01\" min=\"1\" [ngModel]=\"30\"\r\n                         name=\"ageValue\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"ADeviation\">Deviation</label>\r\n                  <input type=\"number\" class=\"form-control\" id=\"ADeviation\" step=\".01\" min=\"0\" [ngModel]=\"1\"\r\n                         name=\"ageDeviation\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6 separator-top\">\r\n              <p class=\"group-header\">Position</p>\r\n              <div class=\"col-xs-3\">\r\n                <label for=\"x\">X</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"x\" step=\".01\" min=\"0\" [ngModel]=\"0\" name=\"posX\">\r\n              </div>\r\n              <div class=\"col-xs-3\">\r\n                <label for=\"y\">Y</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"y\" step=\".01\" min=\"0\" [ngModel]=\"0\" name=\"posY\">\r\n              </div>\r\n              <div class=\"col-xs-3\">\r\n                <label for=\"z\">Z</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"z\" step=\".01\" min=\"0\" [ngModel]=\"0\" name=\"posZ\">\r\n              </div>\r\n              <div class=\"col-xs-3\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"PDeviation\">Deviation</label>\r\n                  <input type=\"number\" class=\"form-control\" id=\"PDeviation\" step=\".01\" min=\"0\" [ngModel]=\"1\"\r\n                         name=\"posDeviation\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6 separator-top\">\r\n              <p class=\"group-header\">Other Options</p>\r\n              <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"lookingAtScreen\" [ngModel]=\"false\">Looking at Screen</label>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-2 col-xs-offset-8\">\r\n              <button class=\"btn btn-primary btn-block\" type=\"submit\" form=\"person-form\">\r\n                <span *ngIf=\"qty === 1\">Launch person</span>\r\n                <span *ngIf=\"qty > 1\">Launch people</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">Quantity</span>\r\n                <input type=\"number\" step=\"1\" class=\"form-control\" min=\"1\" required [(ngModel)]=\"qty\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <app-people-table [people]=\"people\"></app-people-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Id</th>\n    <th>Gender</th>\n    <th>Age</th>\n    <th>\n      Position\n      <span class=\"label label-danger\">x</span>\n      <span class=\"label label-success\">y</span>\n      <span class=\"label label-primary\">z</span>\n    </th>\n    <th>Looking at screen</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let person of people\">\n    <td>{{person.person_id}}</td>\n    <td>{{person.rolling_expected_values.gender}}</td>\n    <td>{{person.rolling_expected_values.age}}</td>\n    <td>\n      <span class=\"label label-danger\">{{person.coordinates.x}}</span>\n      <span class=\"label label-success\">{{person.coordinates.y}}</span>\n      <span class=\"label label-primary\">{{person.coordinates.z}}</span>\n    </td>\n    <td>{{person.looking_at_screen}}</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"viewer\" class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n      {{viewer.rolling_expected_values.gender}}, {{viewer.rolling_expected_values.age}} years old\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <p>\r\n      Id: {{viewer.person_id}}\r\n    </p>\r\n    <p>\r\n      Came on: {{getTime(viewer.local_timestamp)}}\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(354);


/***/ })

},[809]);
//# sourceMappingURL=main.bundle.js.map