"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_search_search_module_ts"],{

/***/ 2562:
/*!********************************************************!*\
  !*** ./src/app/modals/search/search-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 1574);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 3614:
/*!************************************************!*\
  !*** ./src/app/modals/search/search.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 2562);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 1574);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 1574:
/*!**********************************************!*\
  !*** ./src/app/modals/search/search.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page.html?ngResource */ 7695);
/* harmony import */ var _search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss?ngResource */ 4314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _assets_JSON_information_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/JSON/information.json */ 8153);






let SearchPage = class SearchPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.blank = '';
        this.query = '';
        this.matches = [];
        this.selectedItem = '';
        this.selectedItemID = '';
        this.isDisabled = true;
        this.img = '';
        this.items_total = _assets_JSON_information_json__WEBPACK_IMPORTED_MODULE_2__;
        this.items = [];
        this.myColor = '#006400';
    }
    ngOnInit() {
        console.log("this.options", this.options);
        this.matches = this.options;
        if (this.conj_type == "subject" || this.conj_type == "object") {
            this.matches.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }
        else {
            this.matches.sort((a, b) => (a.translation > b.translation) ? 1 : -1);
        }
        this.formatSelected();
        for (let item of this.matches) {
            if (item.type_color == "") {
                item.type_color = this.conj_type;
            }
        }
    }
    // Logs clicked verb
    selectItem(v) {
        if (this.selectedItemID != v.id) {
            this.selectedItem = v;
            this.selectedItemID = v.id;
        }
        else {
            this.selectedItem = '';
            this.selectedItemID = '';
        }
        this.selectAbled();
    }
    formatSelected() {
        var r = document.querySelector(':root');
        let var_name = "--ion-color-" + this.conj_type;
        var rootStyle = getComputedStyle(r);
        let getColor = rootStyle.getPropertyValue(var_name);
        r.style.setProperty('--holder', getColor);
    }
    selectAbled() {
        if (this.selectedItem == '') {
            this.isDisabled = true;
        }
        else {
            this.isDisabled = false;
        }
    }
    // Linked to the OK button. Returns chosen verb OBJECT
    closeModalWithData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.selectedItem);
        });
    }
    // Linked to the cancel button. Returns no data.
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    // Code taken from https://github.com/roedoejet/mothertongues-UI/blob/fv-template/src/pages/search/search.ts and then altered.
    matchTranslation() {
        const results = [];
        const re = new RegExp(this.query, 'i');
        for (let entry of this.options) {
            if (re.test(entry.translation)) {
                results.push(entry);
            }
        }
        const sortedAnswers = results.sort(function (a, b) {
            return a.translation.length - b.translation.length;
        });
        return (sortedAnswers);
    }
    matchBase() {
        const results = [];
        const re = new RegExp(this.query, 'i');
        for (let entry of this.options) {
            if (re.test(entry.base)) {
                results.push(entry);
            }
        }
        let sortedAnswers;
        if (results.length > 0) {
            sortedAnswers = results.sort(function (a, b) {
                return a.base.length - b.base.length;
            });
        }
        else {
            sortedAnswers = [];
        }
        return (sortedAnswers);
    }
    // On keyup event, this function searches for relevant verbs. If event results on an empty search, will show all possibilities.
    getResults(event) {
        this.query = event.target.value;
        if (this.query.length > 0) {
            let t = this.matchTranslation();
            let b = this.matchBase();
            let results = b.concat(t);
            console.log(results);
            results = results.splice(0, results.length, ...(new Set(results)));
            this.matches = results;
        }
        else {
            this.matches = this.options;
        }
    }
};
SearchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
SearchPage.propDecorators = {
    conj_type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-search',
        template: _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchPage);



/***/ }),

/***/ 4314:
/*!***********************************************************!*\
  !*** ./src/app/modals/search/search.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --holder: #FFFFFF;\n}\n\n/* title of search window */\n\nion-title {\n  font-size: 24px !important;\n  padding: 5% 0 2% 0;\n  color: white !important;\n}\n\nion-toolbar {\n  padding: 5px 15px;\n}\n\nion-header {\n  background-color: white;\n  box-shadow: 0px 0 2px black;\n  padding: 0px !important;\n}\n\nion-searchbar {\n  margin: 5px 5%;\n  border: 2px solid lightgrey;\n  border-radius: 10px;\n  color: white;\n  width: 90%;\n  height: 50px;\n}\n\nion-searchbar ion-icon {\n  color: white !important;\n}\n\n/* colour of item background in list */\n\nion-item.entry {\n  background-color: white;\n  --inner-padding-end: 0px;\n  padding-left: 0 !important;\n  font-size: 16px;\n  --min-height: 60px !important;\n}\n\nion-label.main {\n  top: 0;\n  position: absolute;\n  transform: translateX(10%);\n  -webkit-transform: translateX(10%);\n  margin: 2% 0 0 0;\n}\n\nion-label {\n  font-weight: bold;\n  box-sizing: content-box !important;\n  padding: 3px 0;\n}\n\nion-item.active-item {\n  box-sizing: border-box;\n  box-shadow: 0px 0px 0px;\n  background-color: var(--holder) !important;\n  /* Colour of text in selected item in list */\n}\n\nion-item.active-item ion-label {\n  color: white !important;\n  filter: brightness(100%) !important;\n}\n\n.checkmark {\n  visibility: hidden;\n  filter: brightness(120%);\n  width: 40px;\n  height: 26px;\n  padding-right: 10px;\n}\n\n.active-item .checkmark {\n  visibility: visible;\n}\n\n.footer {\n  box-shadow: 0px 0 2px black;\n  padding: 0 5px !important;\n  --min-height: 60px;\n  height: 10%;\n  background-color: var(--holder);\n}\n\n.body {\n  margin: 10px 0px !important;\n}\n\nion-footer {\n  padding: 5px;\n}\n\nion-header {\n  padding: 2% 5%;\n}\n\nion-header ion-title {\n  color: white;\n}\n\nion-button.cancel {\n  color: white;\n  font-weight: bold;\n  --border-color: white !important;\n  --border-width: 2px !important;\n  --border-radius: 0 !important;\n  width: 45%;\n  font-size: 20px;\n  text-transform: none !important;\n  height: 80%;\n  background-color: var(--holder);\n}\n\nion-button.select {\n  background-color: white;\n  font-weight: bold;\n  width: 45%;\n  height: 80%;\n  margin-left: 7%;\n  font-size: 20px;\n  text-transform: none !important;\n  color: var(--holder);\n}\n\ndiv.left ion-label {\n  bottom: 0;\n  position: absolute;\n  transform: translateX(10%);\n  transform: translateY(-5%);\n  -webkit-transform: translateY(-15%);\n  font-style: italic;\n  font-size: 15px;\n  margin: 2px 5px;\n}\n\nion-label {\n  filter: brightness(70%);\n}\n\ndiv.right .verb {\n  bottom: 0;\n  position: absolute;\n  font-style: bold;\n  transform: translateX(10%);\n  transform: translateY(-5%);\n  -webkit-transform: translateY(-15%);\n  font-size: 15px;\n  margin: 2px 5px;\n}\n\ndiv.right .ion-text-wrap {\n  top: 0;\n  position: absolute;\n  transform: translateX(10%);\n  transform: translateY(-5%);\n  -webkit-transform: translateY(-15%);\n  font-style: italic;\n  font-size: 20px;\n  margin: 2% 0 0 0;\n  line-height: 100%;\n}\n\ndiv.left img {\n  top: 0;\n  position: absolute;\n  transform: translateX(10%);\n  -webkit-transform: translateX(10%);\n  margin: 2% 0 0 0;\n}\n\ndiv.left {\n  margin-right: 2%;\n  width: 30%;\n  height: 100%;\n}\n\ndiv.right {\n  margin-left: 2%;\n  width: 20%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBLDJCQUFBOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBSUEsWUFBQTtBQUZKOztBQURJO0VBQ1EsdUJBQUE7QUFHWjs7QUFFQSxzQ0FBQTs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUdBO0VBQ0ksTUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBRUEsNENBQUE7QUFGSjs7QUFHSTtFQUNJLHVCQUFBO0VBQ0EsbUNBQUE7QUFEUjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBRko7O0FBTUE7RUFDSSwyQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtBQUhKOztBQUlJO0VBQVksWUFBQTtBQURoQjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFFQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBRUksdUJBQUE7QUFGSjs7QUFLQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFFQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLE1BQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBRUEsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNFLE1BQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRkoiLCJmaWxlIjoic2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290e1xuICAgIC0taG9sZGVyOiAjRkZGRkZGO1xufVxuXG4vKiB0aXRsZSBvZiBzZWFyY2ggd2luZG93ICovXG5pb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNSUgMCAyJSAwO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbmlvbi1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDAgMnB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VhcmNoYmFye1xuICAgIG1hcmdpbjogNXB4IDUlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGhlaWdodDogNTBweDtcbn1cblxuLyogY29sb3VyIG9mIGl0ZW0gYmFja2dyb3VuZCBpbiBsaXN0ICovXG5pb24taXRlbS5lbnRyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICBcbn1cblxuaW9uLWxhYmVsLm1haW57XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTAlKTtcbiAgICBtYXJnaW46IDIlIDAgMCAwO1xufVxuXG5pb24tbGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzcHggMDtcbn1cblxuXG5pb24taXRlbS5hY3RpdmUtaXRlbXtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvbGRlcikgIWltcG9ydGFudDtcbiAgICBcbiAgICAvKiBDb2xvdXIgb2YgdGV4dCBpbiBzZWxlY3RlZCBpdGVtIGluIGxpc3QgKi9cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSkgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5jaGVja21hcmt7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbiAgICB3aWR0aDo0MHB4OyBcbiAgICBoZWlnaHQ6MjZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWN0aXZlLWl0ZW0gLmNoZWNrbWFya3tcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZm9vdGVye1xuICAgIGJveC1zaGFkb3c6IDBweCAwIDJweCBibGFjaztcbiAgICBwYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O1xuICAgIC0tbWluLWhlaWdodDogNjBweDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob2xkZXIpO1xufVxuXG5cbi5ib2R5IHtcbiAgICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXJ7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5pb24taGVhZGVye1xuICAgIHBhZGRpbmc6IDIlIDUlO1xuICAgIGlvbi10aXRsZSB7IGNvbG9yOiB3aGl0ZSB9O1xufVxuXG5pb24tYnV0dG9uLmNhbmNlbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvbGRlcikgO1xufVxuXG5pb24tYnV0dG9uLnNlbGVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogNDUlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLWhvbGRlcik7XG59XG5cbmRpdi5sZWZ0IGlvbi1sYWJlbHtcbiAgICBib3R0b206MDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzEwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzEwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1JSk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDJweCA1cHg7XG59XG5cbmlvbi1sYWJlbHtcbiAgICAvLyBjb2xvcjogdmFyKC0taG9sZGVyKSAhaW1wb3J0YW50O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xufVxuXG5kaXYucmlnaHQgLnZlcmJ7XG4gICAgYm90dG9tOjA7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzEwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzEwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1JSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMnB4IDVweDtcbn1cblxuZGl2LnJpZ2h0IC5pb24tdGV4dC13cmFwe1xuICAgIHRvcDowO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUlKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMiUgMCAwIDA7XG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5cbmRpdi5sZWZ0IGltZyB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgrMTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKzEwJSk7XG4gIG1hcmdpbjogMiUgMCAwIDA7XG59XG5cbmRpdi5sZWZ0e1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmRpdi5yaWdodHtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 7695:
/*!***********************************************************!*\
  !*** ./src/app/modals/search/search.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<meta charset=\"UTF-8\">\n<ion-header>\n  <ion-toolbar color=\"{{conj_type}}\">\n    <ion-title class=\"ion-no-padding\" text-center>{{conj_type | titlecase}}</ion-title>\n    \n  </ion-toolbar>\n  <ion-searchbar (keyup) = getResults($event) autocapitalize=\"none\" show-cancel=\"true\" class=\"ion-no-padding\" color=\"white\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list class=\"body\" color=\"white\" lines=\"inset\">\n    <ion-item button (click)=selectItem(item) class=\"entry\" color=\"white\" *ngFor='let item of matches' detail=\"false\" [class.active-item] = \"selectedItemID === item.id\">\n      <div class=right>\n        <ion-label class=\"ion-text-wrap\" color=\"{{item.type_color}}\">{{item.translation}}</ion-label>  \n        <ion-label class=\"verb\" color=\"{{item.type_color}}\">{{item.base}}</ion-label>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer class=\"footer\">\n  <ion-button class=\"cancel\" (click)=\"closeModal()\" fill=\"outline\">Cancel</ion-button>\n  <ion-button class=\"select\" (click)=\"closeModalWithData()\" color=\"white\" disabled=\"{{isDisabled}}\">Select</ion-button>\n\n\n</ion-footer>\n\n";

/***/ }),

/***/ 8153:
/*!******************************************!*\
  !*** ./src/assets/JSON/information.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"verb","children":[{"id":"be named","translation":"teluisi","base":"be named"},{"id":"pray","translation":"alasutmay","base":"pray"},{"id":"remove","translation":"mena\'tu","base":"remove"},{"id":"see","translation":"nemi\'k","base":"see"},{"id":"understand","translation":"nestm","base":"understand"},{"id":"write","translation":"ewi\'kikey","base":"write"}]},{"name":"tense","children":[{"id":"present","translation":"kiskuk","base":"present"}]},{"name":"subject","children":[{"id":"i","translation":"n\'in","base":"i"},{"id":"s/he","translation":"nekm","base":"s/he"},{"id":"s/he and i (excl.)","translation":"ninen (dual)","base":"s/he and i (excl.)"},{"id":"them and i (excl.)","translation":"ninen (plural)","base":"them and i (excl.)"},{"id":"those three","translation":"nekmow (plural)","base":"those three"},{"id":"those two","translation":"nekmow (dual)","base":"those two"},{"id":"you","translation":"k\'il","base":"you"},{"id":"you and i (incl.)","translation":"kinu (dual)","base":"you and i (incl.)"},{"id":"you three","translation":"kilew (plural)","base":"you three"},{"id":"you two","translation":"kilew (dual)","base":"you two"},{"id":"you two and i (incl.)","translation":"kinu (plural)","base":"you two and i (incl.)"}]},{"name":"object","children":[{"id":"i","translation":"n\'in","base":"i"},{"id":"it","translation":"it","base":"it"},{"id":"no object","translation":"-","base":"no object"},{"id":"s/he","translation":"nekm","base":"s/he"},{"id":"s/he and i (excl.)","translation":"ninen (dual)","base":"s/he and i (excl.)"},{"id":"they","translation":"they","base":"they"},{"id":"those three","translation":"nekmow (plural)","base":"those three"},{"id":"you","translation":"k\'il","base":"you"},{"id":"you and i (incl.)","translation":"kinu (dual)","base":"you and i (incl.)"},{"id":"you three","translation":"kilew (plural)","base":"you three"}]}]');

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_search_search_module_ts.js.map