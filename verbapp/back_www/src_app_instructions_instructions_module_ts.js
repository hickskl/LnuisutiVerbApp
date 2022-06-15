"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_instructions_instructions_module_ts"],{

/***/ 5511:
/*!*************************************************************!*\
  !*** ./src/app/instructions/instructions-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstructionsPageRoutingModule": () => (/* binding */ InstructionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _instructions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructions.page */ 5365);




const routes = [
    {
        path: '',
        component: _instructions_page__WEBPACK_IMPORTED_MODULE_0__.InstructionsPage,
    }
];
let InstructionsPageRoutingModule = class InstructionsPageRoutingModule {
};
InstructionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], InstructionsPageRoutingModule);



/***/ }),

/***/ 9066:
/*!*****************************************************!*\
  !*** ./src/app/instructions/instructions.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstructionsPageModule": () => (/* binding */ InstructionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _instructions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructions.page */ 5365);
/* harmony import */ var _instructions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions-routing.module */ 5511);








let InstructionsPageModule = class InstructionsPageModule {
};
InstructionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _instructions_page__WEBPACK_IMPORTED_MODULE_0__.InstructionsPage }]),
            _instructions_routing_module__WEBPACK_IMPORTED_MODULE_1__.InstructionsPageRoutingModule,
        ],
        declarations: [_instructions_page__WEBPACK_IMPORTED_MODULE_0__.InstructionsPage]
    })
], InstructionsPageModule);



/***/ }),

/***/ 5365:
/*!***************************************************!*\
  !*** ./src/app/instructions/instructions.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstructionsPage": () => (/* binding */ InstructionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _instructions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructions.page.html?ngResource */ 7155);
/* harmony import */ var _instructions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions.page.scss?ngResource */ 3363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let InstructionsPage = class InstructionsPage {
    constructor() {
        this.toggledLang = false;
    }
    toggleLang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log("toggle state");
        });
    }
};
InstructionsPage.ctorParameters = () => [];
InstructionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-instructions',
        template: _instructions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_instructions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InstructionsPage);



/***/ }),

/***/ 3363:
/*!****************************************************************!*\
  !*** ./src/app/instructions/instructions.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "h5 {\n  padding: 15px 10% !important;\n  text-align: center;\n}\n\nh2 {\n  padding: 0 10% !important;\n  text-align: center;\n}\n\np {\n  padding: 0 10% !important;\n  line-height: 150%;\n}\n\nol {\n  padding: 0 !important;\n  margin: 0 10% !important;\n  line-height: 150%;\n}\n\n.logo {\n  padding: 15px !important;\n  margin: auto;\n  display: block;\n}\n\n.disabled {\n  opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFJQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESiIsImZpbGUiOiJpbnN0cnVjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDV7XG4gICAgcGFkZGluZzogMTVweCAxMCUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgye1xuICAgIHBhZGRpbmc6IDAgMTAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5we1xuICAgIHBhZGRpbmc6IDAgMTAlICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5vbHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDEwJSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ297XG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc2FibGVke1xuICAgIG9wYWNpdHk6IDAuMjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 7155:
/*!****************************************************************!*\
  !*** ./src/app/instructions/instructions.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<!--<ion-footer [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-item slot=\"end\">\n      <ion-label>EN</ion-label>\n      <ion-toggle [(ngModel)]=\"lang\" (ionChange)=\"toggleLang()\"></ion-toggle>\n      <ion-label>MK</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>-->\n\n<ion-content class=\"background\" scroll=\"true\">\n  <ion-grid class=\"ion-no-margin ion-no-padding justify-content-center\">\n      <ion-row class=\"ion-no-margin ion-no-padding\">\n        <ion-col class=\"ion-no-margin ion-no-padding\" size-sm=\"8\" offset-sm=\"2\" size-md=\"6\" offset-md=\"3\" size-xl=\"4\" offset-xl=\"4\">\n          <ion-text>\n          <h2 style=\"text-align: center;\"><strong>How To Use</strong></h2>\n          <p>On the main conjugator page, there are a few categories to choose from for your conjugation (e.g. verb, subject, etc.).</p>\n          <p><strong>In order to choose an option from these categories, click the <ion-icon name=\"search-circle-sharp\" size=\"large\"></ion-icon> icon.&nbsp;</strong></p>\n          <p>Please note two important things:</p>\n          <ol>\n          <li>You have to choose from the categories <strong>in the order</strong> that they are in. This is to make sure you do not choose options that cannot go together.\n          <ul>\n          <li>For example, it does not make sense to choose \"I sleep you\" because \"sleep\" does not act on anyone or anything.</li>\n          </ul>\n          </li>\n          <br>\n          <li>To help make sure you do not choose options that do not go together, some of the options will be&nbsp;<strong>disabled</strong> and the icon will look more greyed out, like this <ion-icon class=\"disabled\" name=\"search-circle-sharp\" size=\"large\"></ion-icon>. Once you choose from the options above, these will become clickable again and you can choose the next option.</li>\n          </ol>\n          <p>Once you have chosen an option from each cateogry, click the \"conjugate\" button at the bottom.&nbsp;</p>\n          <p>If you make a mistake or want to conjugate another verb, simply select a new verb.</p>\n          <p><strong>In order to get more information on each category, click the <ion-icon name=\"help-circle-sharp\" size=\"large\"></ion-icon> icon.</strong></p>\n          <p style=\"text-align: center;\">&nbsp;</p>\n          </ion-text>\n          \n        </ion-col>\n      </ion-row>\n      <ion-row></ion-row>\n\n      <ion-row>\n         <img class=\"logo\" src=\"../../assets/icon/favicon.png\" width=\"180px\" height =\"180px\">\n      </ion-row>\n\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_instructions_instructions_module_ts.js.map