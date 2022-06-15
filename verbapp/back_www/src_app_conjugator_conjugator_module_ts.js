"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_conjugator_conjugator_module_ts"],{

/***/ 5270:
/*!*********************************************************!*\
  !*** ./src/app/conjugator/conjugator-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugatorPageRoutingModule": () => (/* binding */ ConjugatorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _conjugator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conjugator.page */ 9490);




const routes = [
    {
        path: '',
        component: _conjugator_page__WEBPACK_IMPORTED_MODULE_0__.ConjugatorPage,
    }
];
let ConjugatorPageRoutingModule = class ConjugatorPageRoutingModule {
};
ConjugatorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ConjugatorPageRoutingModule);



/***/ }),

/***/ 3639:
/*!*************************************************!*\
  !*** ./src/app/conjugator/conjugator.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugatorPageModule": () => (/* binding */ ConjugatorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _conjugator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conjugator.page */ 9490);
/* harmony import */ var _conjugator_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conjugator-routing.module */ 5270);
/* harmony import */ var src_app_modals_verb_tooltip_verb_tooltip_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/verb-tooltip/verb-tooltip.module */ 5161);
/* harmony import */ var _modals_verb_tooltip_verb_tooltip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/verb-tooltip/verb-tooltip.page */ 2771);
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/search/search.page */ 1574);
/* harmony import */ var src_app_modals_search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/search/search.module */ 3614);











let ConjugatorPageModule = class ConjugatorPageModule {
};
ConjugatorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _conjugator_routing_module__WEBPACK_IMPORTED_MODULE_1__.ConjugatorPageRoutingModule,
            src_app_modals_verb_tooltip_verb_tooltip_module__WEBPACK_IMPORTED_MODULE_2__.VerbTooltipPageModule,
            src_app_modals_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchPageModule
        ],
        declarations: [_conjugator_page__WEBPACK_IMPORTED_MODULE_0__.ConjugatorPage],
        entryComponents: [_modals_verb_tooltip_verb_tooltip_page__WEBPACK_IMPORTED_MODULE_3__.VerbTooltipPage, _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__.SearchPage]
    })
], ConjugatorPageModule);



/***/ }),

/***/ 9490:
/*!***********************************************!*\
  !*** ./src/app/conjugator/conjugator.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConjugatorPage": () => (/* binding */ ConjugatorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _conjugator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conjugator.page.html?ngResource */ 4042);
/* harmony import */ var _conjugator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conjugator.page.scss?ngResource */ 8906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/search/search.page */ 1574);
/* harmony import */ var _modals_verb_tooltip_verb_tooltip_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/verb-tooltip/verb-tooltip.page */ 2771);









let ConjugatorPage = class ConjugatorPage {
    constructor(modalController, service) {
        this.modalController = modalController;
        this.service = service;
        this.open = '../../../assets/minusicon.png';
        this.closed = '../../../assets/plusicon.png';
        this.error = '';
        this.show_result = false;
        this.show_error = false;
        this.result = '';
        this.showVerb = '';
        this.automaticClose = false;
        this.information = [];
        this.myFunInformation$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.information);
        this.selectedOptions = {};
        this.selectedPath = {};
    }
    ngOnInit() {
        this.information = JSON.parse(JSON.stringify(this.service.setinformation));
        this.myFunInformation$.subscribe(data => {
            this.information = data;
        });
        this.myFunInformation$.next(JSON.parse(JSON.stringify(this.service.setinformation)));
        //Creates the array that contains the selected keys
        this.information.forEach(element => {
            let key = element.name;
            this.selectedOptions[key] = {
                translation: '',
                id: '',
                base: ''
            };
        });
        return;
    }
    ;
    getContent() {
        return document.querySelector('ion-content');
    }
    scrollToBottom() {
        let content = document.querySelector('ion-content');
        setTimeout(function () {
            content.scrollToBottom(500);
        }, 250);
    }
    scrollToTop() {
        this.getContent().scrollToTop(500);
    }
    scroll(id) {
        console.log(`scrolling to ${id}`);
        let el = document.getElementById(id);
        if (id == "result" || id == "error") {
            setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, 250);
        }
        else {
            setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 500);
        }
    }
    updateDisabled(pos, index) {
        /*
        This function handles tasks relating to enabling and disabling available categories.
        Returns none
        */
        let i = index + 1;
        this.disableLowerCat(i); // IMPORTANT: Disable must ALWAYS come before able, otherwise it will not enable the lower category
        this.ableCat(i);
    }
    updatePath(pos, index, selected) {
        /*Function updates the path and the information for the follow category
        pos is current cat
        index is the pos index
        selected is the selected option
        */
        let prev_pos;
        let n;
        if (index == 0) {
            prev_pos = pos;
            let root = this.service.tree.getRoot();
            n = root.getChild(selected.id);
        }
        else {
            prev_pos = this.information[index - 1].name;
            n = this.selectedPath[prev_pos].getChild(selected.id);
        }
        console.log("should be node", n);
        this.updateNodePath(n, pos);
        console.log("Updated Path", this.selectedPath);
        this.updateInformation(index + 1, pos);
    }
    ableCat(index) {
        /*
        This function takes in an index and enables the next category
        to be accessible.
        */
        if (index < this.information.length) {
            this.information[index].disabled = false;
            this.myFunInformation$.next(this.information);
        }
    }
    disableLowerCat(index) {
        /*
        This function takes in an index and disables all categories lower than that,
        so that the user cannot change a previous category without resetting the below categories.
        */
        let key;
        for (let i = index; i < this.information.length; i++) { // find all categories at a lower index
            key = this.information[i].name; // get the name
            this.selectedOptions[key] = { translation: '', id: '', base: '' }; // reset so that there is no selected option at that name
            this.information[i].disabled = true; // disable access
        }
        console.log(this.selectedOptions);
    }
    setSelected(pos, selected) {
        /*
        This function takes in the category name (pos as in part of speech)
        */
        this.selectedOptions[pos].translation = selected.translation;
        this.selectedOptions[pos].id = selected.id;
        this.selectedOptions[pos].base = selected.base;
    }
    updateNodePath(n, pos) {
        /*Updates path at the current cateogry with the newly created node object
        n is the newly created node object
        pos is the current category
         */
        this.selectedPath[pos] = n;
        console.log("this.selectedPath[", pos, "]", this.selectedPath[pos]);
    }
    updateInformation(index, pos) {
        let selectFrom = this.service.setinformation[index].cat;
        this.information[index].cat = [];
        let children = this.selectedPath[pos].getChildren();
        console.log("Got children", children);
        selectFrom.forEach(element => {
            for (let i = 0; i < children.length; i++) {
                if (children[i].getId() == element.id) {
                    this.information[index].cat.push(element);
                    break;
                }
            }
        });
        console.log("after this.information", this.information);
        this.myFunInformation$.next(this.information);
    }
    Conjugate() {
        console.log("conjugate", this.selectedOptions);
        let canconjugate = true;
        Object.keys(this.selectedOptions).forEach(element => {
            if (this.selectedOptions[element].id === '') {
                canconjugate = false;
            }
        });
        if (!canconjugate) {
            this.show_error = true;
            this.error = "Please make sure to choose an option from each category.";
            this.result = '';
            this.show_result = false;
            // this.scrollToBottom();
            this.scroll("error");
            return;
        }
        this.error = '';
        this.show_result = true;
        this.show_error = false;
        let results = this.service.conjugate(this.selectedOptions);
        let s = '';
        for (let r of results) {
            s += r.toString();
            s += ' ';
        }
        this.result = s;
        this.scroll("result");
        // this.scrollToBottom();
    }
    openModalSearch(whichSearch, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("this.information[index].cat", this.information[index].cat);
            const modal = yield this.modalController.create({
                component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_3__.SearchPage,
                componentProps: {
                    'conj_type': whichSearch,
                    'options': this.information[index].cat
                }
            });
            modal.onWillDismiss().then(dataReturned => {
                // trigger when about to close the modal
                if (dataReturned != null || dataReturned != undefined) {
                    if (dataReturned.data.id.length > 0) { // if something was returned, set it as the selected option
                        this.selectedOptions[whichSearch].translation = dataReturned.data.translation;
                        this.selectedOptions[whichSearch].id = dataReturned.data.id;
                        this.selectedOptions[whichSearch].base = dataReturned.data.base;
                        this.updateDisabled(whichSearch, index);
                        this.updatePath(whichSearch, index, dataReturned.data);
                        console.log(this.selectedOptions);
                        let id = this.information[index + 1].name;
                        this.scroll(id);
                    }
                }
                console.log('Receive: ', dataReturned.data);
            });
            // Currently does actively send information, but could be a useful feater that if a user already picked a verb that it
            // appears in the search when they search again (?)
            return yield modal.present().then(_ => {
            });
        });
    }
    openModalToolTip(whichtip) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // with data
            console.log("Tooltip pressed", whichtip);
            const modal = yield this.modalController.create({
                component: _modals_verb_tooltip_verb_tooltip_page__WEBPACK_IMPORTED_MODULE_4__.VerbTooltipPage,
                componentProps: {
                    'conj_type': whichtip
                }
            });
            modal.onWillDismiss().then(dataReturned => {
            });
            return yield modal.present().then(_ => {
            });
        });
    }
    ngOnDestory() {
        this.myFunInformation$.unsubscribe();
    }
};
ConjugatorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ConjugatorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-conjugator',
        template: _conjugator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_conjugator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConjugatorPage);



/***/ }),

/***/ 8959:
/*!**************************************!*\
  !*** ./src/app/models/node.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "node": () => (/* binding */ node)
/* harmony export */ });
class node {
    constructor(id) {
        this.children = [];
        this.id = id;
    }
    // id getter and setter
    getId() {
        return this.id;
    }
    setId(newId) {
        this.id = newId;
    }
    // parent getter and setter
    getParent() {
        return this.parent;
    }
    setParent(newParent) {
        this.parent = newParent;
    }
    // children getters and setters
    getChildren() {
        return this.children;
    }
    getChild(childId) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].getId() == childId) {
                return this.children[i];
            }
        }
    }
    addChild(child) {
        this.children.push(child);
    }
}


/***/ }),

/***/ 2611:
/*!**************************************!*\
  !*** ./src/app/models/tree.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tree": () => (/* binding */ Tree)
/* harmony export */ });
class Tree {
    constructor(root) {
        this.root = root;
    }
    getRoot() {
        return this.root;
    }
    setRoot(root) {
        this.root = root;
    }
}


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _assets_JSON_conjugation_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/JSON/conjugation.json */ 2917);
/* harmony import */ var _assets_JSON_information_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/JSON/information.json */ 8153);
/* harmony import */ var _assets_JSON_category_tree_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/JSON/category_tree.json */ 8900);
/* harmony import */ var src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/tree.model */ 2611);
/* harmony import */ var _models_node_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/node.model */ 8959);







let DataService = class DataService {
    constructor() {
        this.JsonTree = _assets_JSON_category_tree_json__WEBPACK_IMPORTED_MODULE_2__;
        this.conjugation_info = _assets_JSON_conjugation_json__WEBPACK_IMPORTED_MODULE_0__;
        this.conjugations = this.conjugation_info[1]; // conjugation tree
        this.conj_order = this.conjugation_info[0]; // level order of conjugation tree
        this.setinformation = [];
        this.tree = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_3__.Tree(new _models_node_model__WEBPACK_IMPORTED_MODULE_4__.node('root'));
        this.loadInformation();
        for (let item of this.setinformation) {
            item.cat.forEach(child => {
                if (typeof child.type_color === 'undefined') {
                    child.type_color = "";
                }
            });
        }
        this.setinformation[0].disabled = false;
        let root_node = this.tree.getRoot();
        this.buildTree(this.JsonTree, root_node);
    }
    loadInformation() {
        this.setinformation = _assets_JSON_information_json__WEBPACK_IMPORTED_MODULE_1__.map(item => {
            let catItem = item.children.map(child => {
                let item = {
                    translation: child.translation,
                    id: child.id,
                    base: child.base,
                    type_color: child.type_color
                };
                return item;
            });
            let cat = {
                name: item.name,
                cat: catItem,
                open: false,
                disabled: true,
            };
            return cat;
        });
    }
    buildTree(tree, upper_node) {
        if (Array.isArray(tree)) {
            tree.forEach(id => {
                let n_level_node = new _models_node_model__WEBPACK_IMPORTED_MODULE_4__.node(id);
                upper_node.addChild(n_level_node);
            });
            return;
        }
        Object.keys(tree).forEach(id => {
            let n_level_node = new _models_node_model__WEBPACK_IMPORTED_MODULE_4__.node(id);
            upper_node.addChild(n_level_node);
            if (typeof tree[id] !== 'undefined' && typeof tree[id] != "string") {
                this.buildTree(tree[id], n_level_node);
            }
        });
        return;
    }
    conjugate(chosenIds) {
        let results = [];
        console.log("chosenIds", chosenIds);
        console.log("typeof chosenIds", typeof chosenIds);
        let current_tree = this.conjugations;
        for (let item of this.conj_order) { // for each category type item
            console.log("current item", item);
            if (item == this.conj_order[this.conj_order.length - 1]) { //if its the last item, its the conjugation
                console.log("item", item);
                results.push(current_tree); //return the current value at the last level
                break;
            }
            for (let key of Object.keys(current_tree)) { //otherwise go through the current tree level
                console.log("key", key, "item", item, 'chosenIds[item]', chosenIds[item]);
                if (key === chosenIds[item].id) { // if the leaf node is the same value as the chosen value
                    current_tree = current_tree[key]; // start the next level of the tree
                }
            }
        }
        console.log('conjugation results', results);
        return results;
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 8906:
/*!************************************************************!*\
  !*** ./src/app/conjugator/conjugator.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".result {\n  color: var(--ion-color-tense);\n  font: bold 70px Century Gothic, Arial;\n  text-shadow: 0 0 1px var(--ion-color-tense-shade), 0 0 1px var(--ion-color-tense-shade), 0 0 1px var(--ion-color-tense-shade), 0 0 1px var(--ion-color-tense-shade), 0 0 1px var(--ion-color-tense-shade), 0 0 1px var(--ion-color-tense-shade), 0 0 1px var(--ion-color-tense-shade), 0 0 1px var(--ion-color-tense-shade);\n  font-size: 250%;\n  letter-spacing: 2px;\n  text-align: center;\n  padding-bottom: 40%;\n  padding-top: 5%;\n  margin: 0%;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start:0px;\n}\n\n.selected {\n  padding: 0px 15px !important;\n}\n\n/* title of card */\n\n.title {\n  font-size: 22px;\n  width: 50%;\n  color: white !important;\n}\n\n.tooltip {\n  color: white !important;\n}\n\n/* colour of text on card after selecting item*/\n\nion-label {\n  font-size: 16pt !important;\n  font-family: Helvetica;\n  letter-spacing: 0.03em;\n  color: white !important;\n  padding-left: 5%;\n  width: 20px !important;\n}\n\nion-label.english {\n  font-weight: bold;\n}\n\nion-label.ling {\n  font-style: italic;\n  float: left;\n}\n\nion-item.child {\n  --margin-start: 0 !important;\n  filter: brightness(90%);\n  display: block;\n}\n\n.icon {\n  padding: 0px !important;\n  width: 20px !important;\n  height: 20px !important;\n}\n\nion-card-content {\n  padding: 15px 15px 0px 15px !important;\n}\n\nion-card {\n  margin: 8px 8px;\n}\n\nion-button.build {\n  height: 80px;\n  width: 160px;\n  font-weight: bold;\n  font-size: 16px;\n  color: white;\n}\n\n.error {\n  color: red;\n  padding-top: 5%;\n  padding-bottom: 30%;\n  font-size: 16pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmp1Z2F0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJUQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSw0QkFBQTtBQUFKOztBQUdFLGtCQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdFO0VBQ0UsdUJBQUE7QUFBSjs7QUFHRSwrQ0FBQTs7QUFDQTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdFO0VBQ0UsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBQ0UsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdFO0VBQ0Usc0NBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJjb25qdWdhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJlc3VsdCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZW5zZSk7XG4gICAgZm9udDogYm9sZCA3MHB4IENlbnR1cnkgR290aGljLCBBcmlhbDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDFweCB2YXIoLS1pb24tY29sb3ItdGVuc2Utc2hhZGUpLCAwIDAgMXB4IHZhcigtLWlvbi1jb2xvci10ZW5zZS1zaGFkZSksIDAgMCAxcHggdmFyKC0taW9uLWNvbG9yLXRlbnNlLXNoYWRlKSwgMCAwIDFweCB2YXIoLS1pb24tY29sb3ItdGVuc2Utc2hhZGUpLCAwIDAgMXB4IHZhcigtLWlvbi1jb2xvci10ZW5zZS1zaGFkZSksIDAgMCAxcHggdmFyKC0taW9uLWNvbG9yLXRlbnNlLXNoYWRlKSwgMCAwIDFweCB2YXIoLS1pb24tY29sb3ItdGVuc2Utc2hhZGUpLCAwIDAgMXB4IHZhcigtLWlvbi1jb2xvci10ZW5zZS1zaGFkZSk7XG4gICAgZm9udC1zaXplOiAyNTAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MCU7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIG1hcmdpbjowJTtcbiAgfVxuICBcbiAgaW9uLWl0ZW17XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDowcHg7XG4gIH1cbiAgXG4gIC5zZWxlY3RlZHtcbiAgICBwYWRkaW5nOiAwcHggMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKiB0aXRsZSBvZiBjYXJkICovXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAudG9vbHRpcHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qIGNvbG91ciBvZiB0ZXh0IG9uIGNhcmQgYWZ0ZXIgc2VsZWN0aW5nIGl0ZW0qL1xuICBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNnB0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6NSU7XG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaW9uLWxhYmVsLmVuZ2xpc2h7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgfVxuICBcbiAgaW9uLWxhYmVsLmxpbmd7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICBpb24taXRlbS5jaGlsZHtcbiAgICAtLW1hcmdpbi1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gIH1cbiAgXG4gIC5pY29uIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24tY2FyZHtcbiAgICBtYXJnaW46IDhweCA4cHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b24uYnVpbGR7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuZXJyb3J7XG4gICAgY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDMwJTtcbiAgICBmb250LXNpemU6IDE2cHQ7XG4gIH1cblxuICAiXX0= */";

/***/ }),

/***/ 4042:
/*!************************************************************!*\
  !*** ./src/app/conjugator/conjugator.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n<!--<ion-footer translucent=\"true\">\n  <ion-toolbar>\n    <ion-title>Conjugator</ion-title>\n  </ion-toolbar>\n</ion-footer>-->\n\n<ion-content color=\"background\">\n\n  <ion-grid class=\"ion-no-margin ion-no-padding justify-content-center\">\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding ion-text-center\" size-sm=\"8\" offset-sm=\"2\" size-md=\"6\" offset-md=\"3\" size-xl=\"4\" offset-xl=\"4\">\n\n        <ion-card *ngFor=\"let item of information; let i = index;\" color=\"{{item.name}}\" lines=\"none\" detail=\"false\" no-padding>\n          <!-- <div *ngSwitchCase=\"item.cat.length > 10 && item.name != 'verb'\"> -->\n          <div>\n          <ion-card-content id=\"{{item.name}}\">\n            <ion-item color=\"{{item.name}}\" lines=\"none\">\n              <ion-card-title class=\"title\">{{item.name | titlecase}}</ion-card-title>\n              <ion-icon (click)=\"openModalToolTip(item.name)\" slot=\"end\" class =\"tooltip\" name=\"help-circle-sharp\" size=\"large\"></ion-icon>\n            </ion-item>\n          </ion-card-content>\n\n          <ion-item color=\"{{item.name}}\" class=\"selected\" disabled=\"{{item.disabled}}\">\n            <ion-icon slot=\"start\" (click)=\"openModalSearch(item.name, i)\" class=\"tooltip\" name=\"search-circle-sharp\" size=\"large\"></ion-icon>\n            <ion-label class=\"ling\">{{selectedOptions[item.name].translation}}</ion-label>\n            <ion-label class=\"eng\">{{selectedOptions[item.name].base}}</ion-label>\n          </ion-item>\n          </div>\n        </ion-card>\n  \n        <ion-button class=\"build\" (click)=Conjugate()>Build Verb</ion-button> <!--<ion-button (click)=reset()>RESET</ion-button>-->\n        <!-- <div *ngIf=\"show_error\"> -->\n          <div [hidden] = \"!show_error\">\n          <p class=\"error\" id=\"error\">{{error}}</p>\n        </div>\n        <!-- <div *ngIf=\"show_result\"> -->\n          <div [hidden] = \"!show_result\">\n          <p class=\"result\" id=\"result\">{{result}}</p>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n";

/***/ }),

/***/ 8900:
/*!********************************************!*\
  !*** ./src/assets/JSON/category_tree.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"be named":{"present":{"i":["no object"],"s/he":["no object"],"s/he and i (excl.)":["no object"],"them and i (excl.)":["no object"],"those three":["no object"],"those two":["no object"],"you":["no object"],"you and i (incl.)":["no object"],"you three":["no object"],"you two":["no object"],"you two and i (incl.)":["no object"]}},"pray":{"present":{"i":["no object"],"s/he":["no object"],"s/he and i (excl.)":["no object"],"them and i (excl.)":["no object"],"those three":["no object"],"those two":["no object"],"you":["no object"],"you and i (incl.)":["no object"],"you three":["no object"],"you two":["no object"],"you two and i (incl.)":["no object"]}},"remove":{"present":{"i":["they","it"],"s/he":["they","it"],"s/he and i (excl.)":["they","it"],"them and i (excl.)":["it","they"],"those three":["they","it"],"those two":["they","it"],"you":["it","they"],"you and i (incl.)":["they","it"],"you three":["they","it"],"you two":["they","it"],"you two and i (incl.)":["they","it"]}},"see":{"present":{"i":["you three","you","s/he","those three"],"s/he":["s/he","you three","s/he and i (excl.)","you","i","you and i (incl.)","those three"],"s/he and i (excl.)":["you","those three","s/he","you three"],"those three":["i","s/he and i (excl.)","you three","you","those three","s/he","you and i (incl.)"],"you":["s/he and i (excl.)","those three","i","s/he"],"you and i (incl.)":["s/he","those three"],"you three":["i","s/he and i (excl.)","s/he","those three"]}},"understand":{"present":{"i":["they","it"],"s/he":["they","it"],"s/he and i (excl.)":["it","they"],"them and i (excl.)":["it","they"],"those three":["they","it"],"those two":["it","they"],"you":["it","they"],"you and i (incl.)":["it","they"],"you three":["it","they"],"you two":["it","they"],"you two and i (incl.)":["it","they"]}},"write":{"present":{"i":["no object"],"s/he":["no object"],"s/he and i (excl.)":["no object"],"them and i (excl.)":["no object"],"those three":["no object"],"those two":["no object"],"you":["no object"],"you and i (incl.)":["no object"],"you three":["no object"],"you two":["no object"],"you two and i (incl.)":["no object"]}}}');

/***/ }),

/***/ 2917:
/*!******************************************!*\
  !*** ./src/assets/JSON/conjugation.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[["verb","tense","subject","object","conjugation"],{"be named":{"present":{"i":{"no object":["teluisi"]},"s/he":{"no object":["teluisit"]},"s/he and i (excl.)":{"no object":["teluisiek"]},"them and i (excl.)":{"no object":["teluisultiek"]},"those three":{"no object":["teluisultijik"]},"those two":{"no object":["teluisijik"]},"you":{"no object":["teluisin"]},"you and i (incl.)":{"no object":["teluisi\'kw"]},"you three":{"no object":["teluisultioq"]},"you two":{"no object":["teluisioq"]},"you two and i (incl.)":{"no object":["teluisulti\'kw"]}}},"pray":{"present":{"i":{"no object":["alasutmay"]},"s/he":{"no object":["alasutmat"]},"s/he and i (excl.)":{"no object":["alasutmayek"]},"them and i (excl.)":{"no object":["alasutma\'tiyek"]},"those three":{"no object":["alasutma\'tijik"]},"those two":{"no object":["alasutmajik"]},"you":{"no object":["alasutman"]},"you and i (incl.)":{"no object":["alasutmayikw"]},"you three":{"no object":["alasutma\'tiyoq"]},"you two":{"no object":["alasutmayoq"]},"you two and i (incl.)":{"no object":["alasutma\'ti\'kw"]}}},"remove":{"present":{"i":{"it":["mena\'tu"],"they":["mena\'tuanl"]},"s/he":{"it":["mena\'toq"],"they":["mena\'toql"]},"s/he and i (excl.)":{"it":["mena\'tuek"],"they":["mena\'tuekl"]},"them and i (excl.)":{"it":["mena\'tu\'tiyek"],"they":["mena\'tu\'tiyekl"]},"those three":{"it":["mena\'tu\'tijik"],"they":["mena\'tu\'ti\'tijl"]},"those two":{"it":["mena\'toqik"],"they":["mena\'tu\'tijl"]},"you":{"it":["mena\'tu\'n"],"they":["mena\'tu\'nl"]},"you and i (incl.)":{"it":["mena\'tu\'kw"],"they":["mena\'tu\'kwl"]},"you three":{"it":["mena\'tu\'tiyoq"],"they":["mena\'tu\'tiyoql"]},"you two":{"it":["mena\'tuoq"],"they":["mena\'tuoql"]},"you two and i (incl.)":{"it":["mena\'tu\'ti\'kw"],"they":["mena\'tu\'ti\'kwl"]}}},"see":{"present":{"i":{"s/he":["nemi\'k"],"those three":["nemi\'kik"],"you":["nemu\'l"],"you three":["nemu\'loq"]},"s/he":{"i":["nemi\'t"],"s/he":["nemiajl"],"s/he and i (excl.)":["nemi\'namɨt"],"those three":["nemiaji"],"you":["nemi\'sk"],"you and i (incl.)":["nemu\'ik"],"you three":["nemu\'loq"]},"s/he and i (excl.)":{"s/he":["nemi\'kɨt"],"those three":["nemi\'kɨjik"],"you":["nemu\'lek"],"you three":["nemu\'lek"]},"those three":{"i":["nemi\'jik"],"s/he":["nemia\'tijl"],"s/he and i (excl.)":["nemi\'namɨjik"],"those three":["nemia\'tiji"],"you":["nemi\'skik"],"you and i (incl.)":["nemu\'lkwik"],"you three":["nemu\'loq"]},"you":{"i":["nemi\'n"],"s/he":["nemi\'t"],"s/he and i (excl.)":["nemiek"],"those three":["nemi\'jik"]},"you and i (incl.)":{"s/he":["nemi\'kw"],"those three":["nemi\'kwik"]},"you three":{"i":["nemioq"],"s/he":["nemioq"],"s/he and i (excl.)":["nemiek"],"those three":["nemio\'q"]}}},"understand":{"present":{"i":{"it":["nestm"],"they":["nestmanl"]},"s/he":{"it":["nestik"],"they":["nestkl"]},"s/he and i (excl.)":{"it":["nestmek"],"they":["nestmekl"]},"them and i (excl.)":{"it":["nestmu\'tiyek"],"they":["nestmu\'tiyekl"]},"those three":{"it":["nestmu\'ijik"],"they":["nestmu\'ti\'tijl"]},"those two":{"it":["nestmi\'tij"],"they":["nestmi\'tijl"]},"you":{"it":["nestmn"],"they":["nestmnl"]},"you and i (incl.)":{"it":["nestmn\'kw"],"they":["nestmu\'kwl"]},"you three":{"it":["nestmu\'tiyok"],"they":["nestmu\'tiyoql"]},"you two":{"it":["nestmoq"],"they":["nestmoql"]},"you two and i (incl.)":{"it":["nestmu\'ti\'kw"],"they":["nestmu\'ti\'kwl"]}}},"write":{"present":{"i":{"no object":["ewi\'kikey"]},"s/he":{"no object":["ewi\'kiket"]},"s/he and i (excl.)":{"no object":["ewi\'kikeyek"]},"them and i (excl.)":{"no object":["ewi\'kikɨtiyek"]},"those three":{"no object":["ewi\'kikɨtijik"]},"those two":{"no object":["ewi\'kikejik"]},"you":{"no object":["ewi\'kiken"]},"you and i (incl.)":{"no object":["ewi\'kikeyikw"]},"you three":{"no object":["ewi\'kikɨtiyoq"]},"you two":{"no object":["ewi\'kikeyoq"]},"you two and i (incl.)":{"no object":["ewi\'kikɨti\'kw"]}}}}]');

/***/ })

}]);
//# sourceMappingURL=src_app_conjugator_conjugator_module_ts.js.map