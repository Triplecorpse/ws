webpackJsonp([1,4],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(289);
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
            newPerson: '/person',
            getManifest: '/manifest.json',
            setManifest: '/manifest',
            manifestSchema: '/manifest-schema.json'
        };
    }
    DataService.prototype.addPerson = function (options, qty) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        for (var option in options) {
            if (options.hasOwnProperty(option)) {
                search.set(option, options[option]);
            }
        }
        search.set('qty', qty.toString());
        return this.http.get(this.api.newPerson + '/add', { search: search });
    };
    DataService.prototype.removePerson = function (id) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* URLSearchParams */]();
        search.set('id', id);
        return this.http.get(this.api.newPerson + '/remove', { search: search });
    };
    DataService.prototype.getManifestSchema = function () {
        return this.http.get(this.api.manifestSchema);
    };
    DataService.prototype.getManifest = function () {
        return this.http.get(this.api.getManifest);
    };
    DataService.prototype.setManifest = function (manifest) {
        return this.http.post(this.api.setManifest, { manifest: manifest });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(531);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(524);
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
            else {
                _this.replacePerson(person.person_id, person);
            }
        });
        viewerDetectionOutput.persons_alive
            .subscribe(function (data) {
            var ids = data.person_ids;
            _this.cleanPeople(ids);
        });
    }
    AppComponent.prototype.submitPerson = function (personForm) {
        this.dataService.addPerson(personForm, this.qty)
            .subscribe();
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
    AppComponent.prototype.replacePerson = function (id, newPerson) {
        var index = __WEBPACK_IMPORTED_MODULE_3_lodash__["findIndex"](this.people, function (person) { return person.person_id === id; });
        var oldPerson = this.people[index];
        // console.log('i run', oldPerson);
        if (oldPerson && newPerson.rolling_expected_values) {
            oldPerson.rolling_expected_values = {
                age: newPerson.rolling_expected_values.age,
                gender: newPerson.rolling_expected_values.gender
            };
            oldPerson.coordinates.x = newPerson.coordinates.x;
            oldPerson.coordinates.y = newPerson.coordinates.y;
            oldPerson.coordinates.z = newPerson.coordinates.z;
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.viewerDetectionOutput.messages.unsubscribe();
        this.viewerDetectionOutput.messages.complete();
        this.viewerDetectionOutput.ws.close();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(526),
            styles: [__webpack_require__(520)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_detection_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewer_detection_output_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__person_person_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__people_table_people_table_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manifest_setter_manifest_setter_component__ = __webpack_require__(463);
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
                __WEBPACK_IMPORTED_MODULE_9__people_table_people_table_component__["a" /* PeopleTableComponent */],
                __WEBPACK_IMPORTED_MODULE_10__manifest_setter_manifest_setter_component__["a" /* ManifestSetterComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManifestSetterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManifestSetterComponent = (function () {
    function ManifestSetterComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        dataService.getManifestSchema()
            .subscribe(function (schema) {
            _this.schema = schema.text();
        });
        dataService.getManifest()
            .subscribe(function (manifest) {
            _this.manifest = manifest.text();
        });
    }
    ManifestSetterComponent.prototype.saveManifest = function () {
        this.dataService.setManifest(this.manifest)
            .subscribe(function () {
            alert('Manifest is saved');
        }, function (error) {
            alert('Manifest is NOT saved, llok the console');
            console.error(error);
        });
    };
    ManifestSetterComponent.prototype.ngOnInit = function () {
    };
    ManifestSetterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-manifest-setter',
            template: __webpack_require__(527),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], ManifestSetterComponent);
    return ManifestSetterComponent;
    var _a;
}());
//# sourceMappingURL=manifest-setter.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(136);
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
    function PeopleTableComponent(dataService) {
        this.dataService = dataService;
    }
    PeopleTableComponent.prototype.removePerson = function (id) {
        this.dataService.removePerson(id)
            .subscribe();
    };
    PeopleTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], PeopleTableComponent.prototype, "people", void 0);
    PeopleTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-people-table',
            template: __webpack_require__(528),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], PeopleTableComponent);
    return PeopleTableComponent;
    var _a;
}());
//# sourceMappingURL=people-table.component.js.map

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
            template: __webpack_require__(529),
            styles: [__webpack_require__(523)]
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

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, ".group-header {\n  border-bottom: 1px solid lightgray; }\n\n.separator-top {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, "table.table > thead > tr > th {\n  width: 12.5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)();
// imports


// module
exports.push([module.i, ".panel-heading {\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <img src=\"../assets/advertima-logo.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div>{{statusText}}</div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"panel-group\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h4 class=\"panel-title\">\r\n              <a data-toggle=\"collapse\" href=\"#collapseManifest\" aria-expanded=\"true\">Set up Manifest</a>\r\n            </h4>\r\n          </div>\r\n          <div id=\"collapseManifest\" class=\"panel-collapse collapse\">\r\n            <div class=\"panel-body\">\r\n              <app-manifest-setter></app-manifest-setter>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"panel-group\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h4 class=\"panel-title\">\r\n              <a data-toggle=\"collapse\" href=\"#collapseNewPerson\" aria-expanded=\"true\">New Person</a>\r\n            </h4>\r\n          </div>\r\n          <div id=\"collapseNewPerson\" class=\"panel-collapse collapse in\">\r\n            <div class=\"panel-body\">\r\n              <form id=\"person-form\" #newPersonForm=\"ngForm\" (ngSubmit)=\"submitPerson(newPersonForm.value)\">\r\n                <div class=\"col-xs-6\">\r\n                  <p class=\"group-header\">Gender: </p>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"radio-inline\"><input type=\"radio\" name=\"gender\" value=\"male\" [ngModel]>Male</label>\r\n                    <label class=\"radio-inline\"><input type=\"radio\" name=\"gender\" value=\"female\"\r\n                                                       [ngModel]>Female</label>\r\n                    <label class=\"radio-inline\"><input type=\"radio\" name=\"gender\" value=\"random\" [ngModel]=\"'random'\">Hermaphrodite\r\n                      (randomize)</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                  <p class=\"group-header\">Age: </p>\r\n                  <div class=\"col-xs-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"value\">Value</label>\r\n                      <input type=\"number\" class=\"form-control\" id=\"value\" step=\".1\" min=\"1\" [ngModel]=\"30\"\r\n                             name=\"ageValue\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-xs-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"ADeviation\">Deviation</label>\r\n                      <input type=\"number\" class=\"form-control\" id=\"ADeviation\" step=\".1\" min=\"0\" [ngModel]=\"10\"\r\n                             name=\"ageDeviation\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 separator-top\">\r\n                  <p class=\"group-header\">Position</p>\r\n                  <div class=\"col-xs-3\">\r\n                    <label for=\"x\">X</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"x\" step=\".1\" min=\"0\" [ngModel]=\"0\" name=\"posX\">\r\n                  </div>\r\n                  <div class=\"col-xs-3\">\r\n                    <label for=\"y\">Y</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"y\" step=\".1\" min=\"0\" [ngModel]=\"0\" name=\"posY\">\r\n                  </div>\r\n                  <div class=\"col-xs-3\">\r\n                    <label for=\"z\">Z</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"z\" step=\".1\" min=\"0\" [ngModel]=\"0\" name=\"posZ\">\r\n                  </div>\r\n                  <div class=\"col-xs-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"PDeviation\">Deviation</label>\r\n                      <input type=\"number\" class=\"form-control\" id=\"PDeviation\" step=\".01\" min=\"0\" [ngModel]=\"1\"\r\n                             name=\"posDeviation\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 separator-top\">\r\n                  <p class=\"group-header\">Other Options</p>\r\n                  <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"lookingAtScreen\" [ngModel]=\"false\">Looking\r\n                    at Screen</label>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-2 col-xs-offset-8\">\r\n                  <button class=\"btn btn-primary btn-block\" type=\"submit\" form=\"person-form\">\r\n                    <span *ngIf=\"qty === 1\">Launch person</span>\r\n                    <span *ngIf=\"qty > 1\">Launch people</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">Quantity</span>\r\n                    <input type=\"number\" step=\"1\" class=\"form-control\" min=\"1\" required [(ngModel)]=\"qty\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"panel-group\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <h4 class=\"panel-title\">\r\n              <a data-toggle=\"collapse\" href=\"#collapsePeople\" aria-expanded=\"true\">People List</a>\r\n            </h4>\r\n          </div>\r\n          <div id=\"collapsePeople\" class=\"panel-collapse collapse in\">\r\n            <div class=\"panel-body\">\r\n              <app-people-table [people]=\"people\"></app-people-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li><a data-toggle=\"tab\" href=\"#visual\">Visual</a></li>\n  <li class=\"active\"><a data-toggle=\"tab\" href=\"#json\">JSON</a></li>\n</ul>\n\n<div class=\"tab-content\">\n  <div id=\"visual\" class=\"tab-pane fade\">\n    <h3>Not Implemented</h3>\n  </div>\n  <div id=\"json\" class=\"tab-pane fade in active\">\n    <pre>\n      <textarea class=\"form-control\" rows=\"50\" [(ngModel)]=\"manifest\"></textarea>\n    </pre>\n    <button class=\"btn btn-primary\" (click)=\"saveManifest()\">Save Manifest</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Actions</th>\n    <th>Id</th>\n    <th>Gender</th>\n    <th>Looking</th>\n    <th>Age</th>\n    <th><span class=\"label label-danger\">x</span></th>\n    <th><span class=\"label label-success\">y</span></th>\n    <th><span class=\"label label-primary\">z</span></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let person of people\">\n    <td><button class=\"btn btn-danger\" (click)=\"removePerson(person.person_id)\">X</button></td>\n    <td><pre>{{person.person_id}}</pre></td>\n    <td>{{person.rolling_expected_values && person.rolling_expected_values.gender}}</td>\n    <td>{{person.looking_at_screen}}</td>\n    <td>{{person.rolling_expected_values && person.rolling_expected_values.age}}</td>\n    <td><span class=\"label label-danger\">{{person.coordinates.x}}</span></td>\n    <td><span class=\"label label-success\">{{person.coordinates.y}}</span></td>\n    <td><span class=\"label label-primary\">{{person.coordinates.z}}</span></td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"viewer\" class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    {{viewer.rolling_expected_values.gender}}, {{viewer.rolling_expected_values.devAge}} years old\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <p>\r\n      Id: {{viewer.person_id}}\r\n    </p>\r\n    <p>\r\n      Came on: {{getTime(viewer.local_timestamp)}}\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(354);


/***/ })

},[812]);
//# sourceMappingURL=main.bundle.js.map