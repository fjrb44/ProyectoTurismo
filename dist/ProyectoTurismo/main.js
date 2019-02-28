(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routerModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerModules", function() { return routerModules; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_atencion_atencion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/atencion/atencion.component */ "./src/app/pages/atencion/atencion.component.ts");
/* harmony import */ var _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/servicios/servicios.component */ "./src/app/pages/servicios/servicios.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");








var routes = [
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "about", component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
    { path: "contactanos", component: _pages_atencion_atencion_component__WEBPACK_IMPORTED_MODULE_5__["AtencionComponent"] },
    { path: "reserva", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "servicios", component: _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_6__["ServiciosComponent"] },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routerModules = [
    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"],
    _pages_atencion_atencion_component__WEBPACK_IMPORTED_MODULE_5__["AtencionComponent"],
    _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_6__["ServiciosComponent"],
    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margen{\r\n    margin-top: 70px;\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2Vue1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n\r\n<div class=\"container-fluid margen\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-popper */ "./node_modules/angular-popper/fesm5/angular-popper.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routerModules"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                angular_popper__WEBPACK_IMPORTED_MODULE_9__["NgxPopper"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".black{\r\n    color: #000;\r\n}\r\nul{\r\n    color: green;   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxhY2t7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG51bHtcclxuICAgIGNvbG9yOiBncmVlbjsgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center mb-3\">\n    <h2>\n        <span class=\"black\">\n          {{ info('a-titulo') }}\n        </span>\n    </h2>\n    <p>\n      {{ info('a-about') }}\n    </p>\n    <h2>\n      {{ info('a-join') }}\n    </h2>\n  </div>\n  <div class=\"row\">\n    <article class=\"col-lg-6 border-right border-right-success\">\n      <p>{{ info('a-inten') }}</p>\n      <h3>{{ info('a-personal') }}</h3>\n      <ul>\n        <li>{{ info('a-dir') }}</li>\n        <li>{{ info('a-ad-per') }}</li>\n        <li>{{ info('a-ad-con') }}</li>\n        <li>{{ info('a-jf') }}</li>\n        <li>{{ info('a-cd') }}</li>\n      </ul>\n    </article>\n    <article class=\"col-lg-6\">\n      <h2 class=\"black\">\n          {{ info('a-cond') }}\n      </h2>\n      <p>\n        {{ info('a-flor') }}\n      </p>\n      <p>{{ info('a-humanos') }}</p>\n    </article>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-5 border-right border-right-success\">\n      <h4 class=\"text-center\">\n        {{ info('a-seguridad') }}\n      </h4>\n      <img src=\"../../../assets/img/safety.jpg\" alt=\"\" width=\"100%\" height=\"auto\">\n      <ul class=\"mt-3\">\n        <li>{{ info('a-s-cin') }}</li>\n        <li>{{ info('a-s-ve') }}</li>\n        <li>{{ info('a-s-ant') }}</li>\n        <li>{{ info('a-s-est') }}</li>\n        <li>{{ info('a-s-abs') }}</li>\n        <li>{{ info('a-s-asr') }}</li>\n        <li>{{ info('a-s-gps') }}</li>\n        <li>{{ info('a-s-anti') }}</li>\n        <li>{{ info('a-s-bas') }}</li>\n        <li>{{ info('a-s-fat') }}</li>\n        <li>{{ info('a-s-sat') }}</li>\n      </ul>\n    </div>\n    <div class=\"col-lg-7\">\n      <h4 class=\"text-center\">{{ info('a-conf') }}</h4>\n      <img src=\"../../../assets/img/conf.jpg\"\n        alt=\"\" width=\"100%\" height=\"auto\">\n      <div class=\"row mt-3\">\n        <img class=\"col-lg-5\" src=\"../../../assets/img/sillones.jpg\" width=\"350\" height=\"220\" alt=\"\">\n        <ul class=\"col-lg-7\">\n          <li>{{ info('a-c-wifi') }}</li>\n          <li>{{ info('a-c-car') }}</li>\n          <li>{{ info('a-c-sis') }}</li>\n          <li>{{ info('a-c-son') }}</li>\n          <li>{{ info('a-c-apo') }}</li>\n          <li>{{ info('a-c-lz') }}</li>\n          <li>{{ info('a-c-dvd') }}</li>\n          <li>{{ info('a-c-mus') }}</li>\n          <li>{{ info('a-c-nev') }}</li>\n          <li>{{ info('a-c-wc') }}</li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!--\n\n  <h2>Preguntas frecuentes</h2>\n<p>¿Tiene alguna otra duda?</p>\n<p>Contactar</p>\n\n<span>\n  ¿A qué teléfono pueden llamar los viajeros para hacer la reserva del \"transporte a la demanda”?\n</span>\n<p>\n  Pueden llamar al teléfono gratuito de la Junta de Castilla y León 900 204 020 en horario de 9,00 h a 14,00 h., de lunes a viernes.\n</p>\n<span>\n  ¿Qué equipaje se puede llevar?\n</span>\n<p>\n  El viajero tiene derecho a transportar una maleta sin coste adicional.\n</p>\n<p>\n  La vigilancia del equipaje de mano es responsabilidad del viajero al que acompañan.\n</p>\n<p>\n  En la bodega pueden transportarse bicicletas u otros objetos siempre y cuando exista\n  espacio suficiente en la misma y no haya riesgo de dañar al resto de los equipajes. El\n  transporte de estos objetos se realizarán mediante el  pago de un billete especial.\n</p>\n<p>\n  Las bicicletas u otros objetos  deberán viajar embaladas adecuadamente para evitar\n  desperfectos en las mismas y al resto del equipaje. Asimismo, deberán llevar un\n  sistema para sujetarlas a la carrocería del vehículo. Deberán sacar el billete con\n  anterioridad.\n</p>\n<p>\n  Las sillas de ruedas propiedad de los viajeros serán transportadas de forma gratuita.\n</p>\n<span class=\"\">\n  ¿Qué normas son de aplicación una vez en el interior del autobús?\n</span>\n<p>\n  No se hablará con el conductor a menos que sea imprescindible.\n</p>\n<p>\n  Se seguirán las indicaciones del conductor en todo momento, especialmente en caso de\n  que se produjeran situaciones excepcionales o de emergencia.\n</p>\n<p>\n  Se usarán los agarraderos para evitar caídas.\n</p>\n<p>\n  Se evitará permanecer en las zonas de pasillo y de salida.\n</p>\n<p>\n  Tendrán que viajar sentados y se respetará la prioridad de asiento reservado para las\n   personas de movilidad reducida (invidentes, personas con muletas, embarazadas,\n  personas con niños,…..).\n</p>\n<p>\n  Cuando se utilice el teléfono móvil se procurará hablar en un tono bajo para no\n  molestar al resto de viajeros.\n</p>\n<p>\n  No está permitido fumar, comer o consumir bebidas alcohólicas.\n</p>\n<span class=\"\">\n  ¿Cómo puedo dar mi opinión sobre el servicio recibido?\n</span>\n<p>\n  En el interior de nuestros autocares encontrará en la mampara detrás del conductor un\n  cartel con el código QR (BIDI) y un enlace que te lleva directo a la encuesta, para que\n  accedas de la forma que te sea más cómoda.\n</p>\n<span class=\"\">\n  ¿Dónde puedo informarme sobre un objeto perdido?\n</span>\n<p>\n  Puede solicitar información contactando con nuestra oficina en el teléfono de atención\n  al cliente 979851336 en horarios de 9,30h a 13,30 h y de 15,30h a 19,00 h.\n</p>\n<p>\n  Para facilitar la localización del mismo es importante que aporte la máxima información\n  posible.\n</p>\n<span class=\"\">\n  ¿Puedo viajar con mi mascota?\n</span>\n<p>\n  Su mascota puede viajar en caja homologada y en el maletero del vehículo. Por ley solo\n  podrán viajar en el interior los perros lazarillo. El viajero será en todo momento el\n  responsable de la mascota.\n</p>\n<p>\n  Sólo se permitirá una mascota por autobús y para ello, deberá adquirir su billete con\n  antelación.\n</p>\n<p>\n   Seguridad en los trayectos\n</p>\n<p>\n  Autocares Abagon cuenta con los vehículos más modernos equipados con lo último en tecnología para\n  la seguridad de sus viajeros.\n</p>\n<p>\n  Máxima puntualidad\n</p>\n<p>Ofrecemos la máxima puntualidad posible para cumplimiento de los horarios de salida y llegada a\n  los destinos según los horarios programados. \n</p>\n<p>\n  Soporte telefónico:\n</p>\n<p>\n  979 851 336 \n</p>\n<p>\n  Llámanos si tiene cualquier duda sobre nuestros servicios o trayectos. Estaremos encantados de\n  atenderle en horario de Lun - Vier: de 9:30h a 13:30h y de 15:30h a 19:00h.\n</p>\n-->"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/idioma.service */ "./src/app/service/idioma.service.ts");



var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(idioma) {
        this.idioma = idioma;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent.prototype.info = function (id) {
        return this.idioma.getData(id);
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__["IdiomaService"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/atencion/atencion.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/atencion/atencion.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F0ZW5jaW9uL2F0ZW5jaW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/atencion/atencion.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/atencion/atencion.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article (click)=\"cerrarMensaje()\">\n  <div *ngIf=\"exito\" class=\"alert alert-success\" >\n    {{ info('at-success') }}\n  </div>\n\n  <div class=\"container\">\n    <h2>\n      {{ info('at-cn') }}\n    </h2>\n    <p>\n      {{ info('at-si') }}\n    </p>\n    <h4>{{ info('at-ho') }}</h4>\n    <p>{{ info('at-hor') }}</p>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"nombre\">{{ info('at-nam') }}</label>\n        <input id=\"nombre\" type=\"text\" placeholder=\"{{ info('at-pl-nam') }}\" class=\"form-control\" formControlName=\"nombre\">\n        <div *ngIf=\"nombre.invalid && (nombre.touched || nombre.dirty)\" class=\"alert alert-danger\">\n          <div *ngIf=\"nombre.errors.required\">{{ info('at-r-na') }}</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"correo\">{{ info('at-cor') }}</label>\n        <input id=\"correo\" type=\"email\" placeholder=\"{{ info('at-pl-cor') }}\" class=\"form-control\" formControlName=\"correo\">\n        <div *ngIf=\"correo.invalid && (correo.touched || correo.dirty)\" class=\"alert alert-danger\">\n          <div *ngIf=\"correo.errors.required\">{{ info('at-r-ma') }}</div>\n          <div *ngIf=\"correo.errors.pattern\">{{ info('at-r-inv') }}</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"telefono\">{{ info('at-tlf') }}</label>\n        <input id=\"telefono\" type=\"text\" class=\"form-control\" placeholder=\"{{ info('at-pl-tlf') }}\" formControlName=\"telefono\">\n        <div *ngIf=\"telefono.invalid && (telefono.touched || telefono.dirty)\" class=\"alert alert-danger\">\n          <div *ngIf=\"telefono.errors.pattern\">\n            {{ info('at-r-tlf') }}\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"mensaje\">{{ info('at-mnj') }}</label>\n        <textarea class=\"form-control\" id=\"mensaje\" rows=\"5\" placeholder=\"{{ info('at-mnj') }}\" formControlName=\"mensaje\"></textarea>\n        <div *ngIf=\"mensaje.invalid && (mensaje.touched || mensaje.dirty)\" class=\"alert alert-danger\">\n          <div *ngIf=\"mensaje.errors.required\">{{ info('at-r-msj') }}</div>\n        </div>\n      </div>\n      <div class=\"form-group text-center\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.invalid\">{{ info('at-env') }}</button>\n      </div>\n    </form>\n  </div>\n</article>"

/***/ }),

/***/ "./src/app/pages/atencion/atencion.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/atencion/atencion.component.ts ***!
  \******************************************************/
/*! exports provided: AtencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtencionComponent", function() { return AtencionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/idioma.service */ "./src/app/service/idioma.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AtencionComponent = /** @class */ (function () {
    function AtencionComponent(idioma, fb) {
        this.idioma = idioma;
        this.fb = fb;
    }
    AtencionComponent.prototype.ngOnInit = function () {
        this.exito = false;
        this.crearForm();
    };
    AtencionComponent.prototype.crearForm = function () {
        this.form = this.fb.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[0-9]{9}")]),
            mensaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    AtencionComponent.prototype.cerrarMensaje = function () {
        this.exito = false;
    };
    AtencionComponent.prototype.onSubmit = function () {
        this.crearForm();
        this.exito = true;
    };
    AtencionComponent.prototype.info = function (id) {
        return this.idioma.getData(id);
    };
    Object.defineProperty(AtencionComponent.prototype, "nombre", {
        get: function () {
            return this.form.get("nombre");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtencionComponent.prototype, "correo", {
        get: function () {
            return this.form.get("correo");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtencionComponent.prototype, "telefono", {
        get: function () {
            return this.form.get("telefono");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtencionComponent.prototype, "mensaje", {
        get: function () {
            return this.form.get("mensaje");
        },
        enumerable: true,
        configurable: true
    });
    AtencionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-atencion',
            template: __webpack_require__(/*! ./atencion.component.html */ "./src/app/pages/atencion/atencion.component.html"),
            styles: [__webpack_require__(/*! ./atencion.component.css */ "./src/app/pages/atencion/atencion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__["IdiomaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AtencionComponent);
    return AtencionComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (click)=\"cerrarMensaje()\">\n\n  <div *ngIf=\"success\" class=\"alert alert-success\">\n    {{ info('h-ticket') }}\n  </div>\n  <form class=\"mt-5\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"origen\">{{ info('h-or') }}</label>\n      <select id=\"origen\" formControlName=\"origen\" class=\"form-control\">\n        <option value=\"\" disabled hidden selected>{{ info('h-or') }}...</option>\n        <option *ngFor=\"let or of origenes\" value=\"{{or}}\">{{or}}</option>\n      </select>\n\n      <div *ngIf=\"origen.errors && (origen.touched || origen.dirty)\" class=\"alert alert-danger\">\n        <div *ngIf=\"origen.errors.required\">\n          {{ info('h-error-origen') }}\n        </div>\n      </div>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"destino\">{{ info('h-des') }}</label>\n      <select id=\"destino\" formControlName=\"destino\" class=\"form-control centrar\">\n        <option value=\"\" disabled hidden selected>{{ info('h-des') }}...</option>\n        <option *ngFor=\"let des of destinos\" value=\"{{des}}\">{{des}}</option>\n      </select>\n\n      <div *ngIf=\"destino.invalid && (destino.touched || destino.dirty)\" class=\"alert alert-danger\">\n        <div *ngIf=\"destino.errors.required\">\n          {{ info('h-error-destino') }}\n        </div>\n      </div>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"fecha\">{{ info('h-fe') }}</label>\n      <input id=\"fecha\" type=\"date\" min=\"{{date}}\" id=\"myInput\" formControlName=\"fecha\" class=\"form-control\">\n\n      <div *ngIf=\"fecha.errors && (fecha.touched || fecha.dirty)\" class=\"alert alert-danger\">\n        {{ fecha.errors | json }}\n        <div *ngIf=\"fecha.errors.required\">\n            {{ info('h-fe-req') }}\n        </div>\n        <div *ngIf=\"fecha.errors.prevDate\">\n            {{ info('h-fe-today') }}\n        </div>\n        <div *ngIf=\"fecha.errors.tooLate\">\n            {{ info('h-fe-future') }}\n        </div>\n        <div *ngIf=\"fecha.errors.dateInvalid\">\n            {{ info('h-wrong') }}\n        </div>\n      </div>\n\n    </div>\n    <div class=\"form-group text-center\">\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.invalid\">{{ info('at-env') }}</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/idioma.service */ "./src/app/service/idioma.service.ts");
/* harmony import */ var src_app_validator_dateValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/validator/dateValidator */ "./src/app/validator/dateValidator.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, idioma) {
        this.fb = fb;
        this.idioma = idioma;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.today();
        this.crearForm();
        this.success = false;
        this.origenes = [
            "AGP Málaga Centro",
            "AGP Málaga Victoria Kent"
        ];
        this.destinos = [
            "Ronda, Hotel Ronda Moments",
            "Ronda, Hotel Molino del Arco",
            "Ronda, Hotel Maestranza",
            "Ronda, Hotel Polo"
        ];
    };
    HomeComponent.prototype.info = function (id) {
        return this.idioma.getData(id);
    };
    HomeComponent.prototype.crearForm = function () {
        this.form = this.fb.group({
            origen: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            destino: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_validator_dateValidator__WEBPACK_IMPORTED_MODULE_4__["DateValidator"].dateValidator])
        });
    };
    HomeComponent.prototype.today = function () {
        var today = new Date();
        var dia = "" + today.getDate();
        var mes = "" + (today.getMonth() + 1);
        var anio = "" + today.getFullYear();
        if (Number(dia) < 10) {
            dia = '0' + dia;
        }
        if (Number(mes) < 10) {
            mes = '0' + mes;
        }
        this.date = anio + "-" + mes + "-" + dia;
    };
    HomeComponent.prototype.onSubmit = function () {
        this.success = true;
        this.crearForm();
    };
    HomeComponent.prototype.cerrarMensaje = function () {
        this.success = false;
    };
    Object.defineProperty(HomeComponent.prototype, "origen", {
        get: function () {
            return this.form.get("origen");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "destino", {
        get: function () {
            return this.form.get("destino");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "fecha", {
        get: function () {
            return this.form.get("fecha");
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_3__["IdiomaService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/servicios/servicios.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/servicios/servicios.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".black{\r\n    color: #000000;\r\n}\r\n.green{\r\n    color: #00581e;\r\n}\r\nul{\r\n    list-style-type: none;\r\n}\r\n.borde{\r\n    border: 3px green solid;\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    height: 100px;\r\n    border-radius: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljaW9zL3NlcnZpY2lvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljaW9zL3NlcnZpY2lvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNre1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmdyZWVue1xyXG4gICAgY29sb3I6ICMwMDU4MWU7XHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uYm9yZGV7XHJcbiAgICBib3JkZXI6IDNweCBncmVlbiBzb2xpZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/servicios/servicios.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/servicios/servicios.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-4 mb-lg-5 mt-lg-5\">\n        <h3>{{ info('s-alquiler') }}</h3>\n      </div>\n      <div class=\"d-none d-lg-block borde mt-5\"></div>\n      <div class=\"offset-lg-1 col-lg-6 mb-5 mt-5\">\n        <p>\n          <span>\n            {{ info('s-reserva') }}\n          </span>\n        </p>\n      </div>\n      <div class=\"col-lg-6 offset-lg-3 mt-lg-5\">\n        <p>{{ info('s-ofrecemos') }}</p>\n        <ul class=\"black\">\n          <li>\n            <strong> {{ info('s-linea') }} </strong>\n          </li>\n          <li>\n            <strong>\n              {{ info('s-servicio') }}\n            </strong>\n          </li>\n          <li>\n            <strong>\n              {{ info('s-servicio-pres') }}\n            </strong>\n          </li>\n          <li>\n            <strong>\n              <span class=\"black\">\n                {{ info('s-servicio-dis') }}\n              </span>\n            </strong>\n\n            <ul>\n              <li>{{ info('s-circuitos') }}</li>\n              <li>{{ info('s-equipos') }}</li>\n              <li>{{ info('s-excursiones') }}</li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      \n  </div>\n</article>"

/***/ }),

/***/ "./src/app/pages/servicios/servicios.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/servicios/servicios.component.ts ***!
  \********************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/idioma.service */ "./src/app/service/idioma.service.ts");



var ServiciosComponent = /** @class */ (function () {
    function ServiciosComponent(idioma) {
        this.idioma = idioma;
    }
    ServiciosComponent.prototype.ngOnInit = function () {
    };
    ServiciosComponent.prototype.info = function (id) {
        return this.idioma.getData(id);
    };
    ServiciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicios',
            template: __webpack_require__(/*! ./servicios.component.html */ "./src/app/pages/servicios/servicios.component.html"),
            styles: [__webpack_require__(/*! ./servicios.component.css */ "./src/app/pages/servicios/servicios.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__["IdiomaService"]])
    ], ServiciosComponent);
    return ServiciosComponent;
}());



/***/ }),

/***/ "./src/app/service/idioma.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/idioma.service.ts ***!
  \*******************************************/
/*! exports provided: IdiomaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiomaService", function() { return IdiomaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var IdiomaService = /** @class */ (function () {
    function IdiomaService(http) {
        this.http = http;
        this.idioma = "esp";
        this.idiomas = new Array();
        this.loadData();
    }
    IdiomaService.prototype.loadData = function () {
        var _this = this;
        return new Promise(function () {
            _this.http.get("../../assets/PageText.json").subscribe(function (data) {
                _this.idiomas = data;
            });
        });
    };
    IdiomaService.prototype.verifyData = function (func) {
        if (this.idiomas.length === 0) {
            this.loadData().then(function () {
                return func();
            });
        }
        else {
            return func();
        }
    };
    IdiomaService.prototype.cambiarIdioma = function (idiom) {
        this.idioma = idiom;
    };
    IdiomaService.prototype.getData = function (id) {
        var _this = this;
        if (!this.idiomas[id])
            return;
        return this.verifyData(function () {
            switch (_this.idioma) {
                case "eng":
                    return _this.idiomas[id].eng;
                case "fra":
                    return _this.idiomas[id].fra;
                case "esp":
                default:
                    return _this.idiomas[id].esp;
            }
        });
    };
    IdiomaService.prototype.getIdioma = function () {
        return this.idioma;
    };
    IdiomaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IdiomaService);
    return IdiomaService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-footer{\r\n    background-color: rgba(171, 226, 255, 0.95);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzEsIDIyNiwgMjU1LCAwLjk1KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-2 bg-footer fixed-bottom\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-black\">{{ info('f-copy') }} {{ data }}</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/idioma.service */ "./src/app/service/idioma.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(idioma) {
        this.idioma = idioma;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.data = ((new Date()).getFullYear());
    };
    FooterComponent.prototype.info = function (id) {
        return this.idioma.getData(id);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__["IdiomaService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-header{\r\n    background-color: rgba(171, 226, 255, 0.95);\r\n    background-image: url('prueba.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n}\r\n\r\n.idioma{\r\n    margin: 7px 2px 0px 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxtQ0FBdUQ7SUFDdkQsNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzEsIDIyNiwgMjU1LCAwLjk1KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcHJ1ZWJhLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbi5pZGlvbWF7XHJcbiAgICBtYXJnaW46IDdweCAycHggMHB4IDJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-header\">\n\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">\n      <strong>{{ info('h-nombre') }}</strong>\n    </a>\n    \n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active-link\">\n            <strong>\n                {{ info('h-sobre') }}\n            </strong>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contactanos\" routerLinkActive=\"active-link\">\n            <strong>{{ info('h-contact') }}</strong>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/reserva\" routerLinkActive=\"active-link\">\n            <strong>{{ info('h-reserva') }}</strong>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/servicios\" routerLinkActive=\"active-link\">\n            <strong>{{ info('h-servicios') }}</strong>\n          </a>\n        </li>\n\n        <li class=\"nav-item idioma\" *ngIf=\"lang()!=='esp'\">\n          <img (click)=\"cambiarIdioma('esp')\" src=\"assets/img/esp.jpg\" [style.width.px]=\"30\" [style.height.px]=\"20\" alt=\"esp\">\n        </li>\n        <li class=\"nav-item idioma\" *ngIf=\"lang()!=='eng'\">\n          <img (click)=\"cambiarIdioma('eng')\" src=\"assets/img/eng.png\" [style.width.px]=\"30\" [style.height.px]=\"20\" alt=\"eng\">\n        </li>\n        <li class=\"nav-item idioma\" *ngIf=\"lang()!=='fra'\">\n          <img (click)=\"cambiarIdioma('fra')\" src=\"assets/img/fra.jpg\" [style.width.px]=\"30\" [style.height.px]=\"20\" alt=\"fra\">\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/idioma.service */ "./src/app/service/idioma.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(idioma) {
        this.idioma = idioma;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.cambiarIdioma = function (idioma) {
        this.idioma.cambiarIdioma(idioma);
    };
    HeaderComponent.prototype.info = function (id) {
        return this.idioma.getData(id);
    };
    HeaderComponent.prototype.lang = function () {
        return this.idioma.getIdioma();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_idioma_service__WEBPACK_IMPORTED_MODULE_2__["IdiomaService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/validator/dateValidator.ts":
/*!********************************************!*\
  !*** ./src/app/validator/dateValidator.ts ***!
  \********************************************/
/*! exports provided: DateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidator", function() { return DateValidator; });
var DateValidator = /** @class */ (function () {
    function DateValidator() {
    }
    DateValidator.dateValidator = function (c) {
        if (c.pristine) {
            return null;
        }
        if ((c.value !== undefined && c.value !== '' && c.value != null)) {
            var month = null;
            var day = null;
            var year = null;
            var currentTaxYear = Number(new Date().getFullYear());
            var currentMonth = Number(new Date().getMonth() + 1);
            var currentDay = Number(new Date().getDate());
            if (c.value.indexOf('-') > -1) {
                var res = c.value.split("-");
                if (res.length > 1) {
                    year = res[0];
                    month = res[1];
                    day = res[2];
                }
            }
            else {
                return { 'dateInvalid': true };
            }
            if (isNaN(month) || isNaN(day) || isNaN(year)) {
                return { 'dateInvalid': true };
            }
            month = Number(month);
            day = Number(day);
            year = Number(year);
            if (month < 1 || month > 12) { // check month range
                return { 'dateInvalid': true };
            }
            if (day < 1 || day > 31) {
                return { 'dateInvalid': true };
            }
            if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
                return { 'dateInvalid': true };
            }
            if (month == 2) { // check for february 29th
                var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
                if (day > 29 || (day === 29 && !isleap)) {
                    return { 'dateInvalid': true };
                }
            }
            if (year < currentTaxYear || month < currentMonth || day < currentDay) {
                return { 'prevDate': true };
            }
            if (year > (currentTaxYear + 2)) {
                return { "tooLate": true };
            }
        }
        return null;
    };
    return DateValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Usuario\Escritorio\2 DAW\Angular\ProyectoTurismo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map