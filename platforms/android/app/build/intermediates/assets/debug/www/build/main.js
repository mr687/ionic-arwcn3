webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Values = /** @class */ (function () {
    function Values() {
        this.count = 0;
        this.filter = [];
        this.isLoggedIn = false;
        this.customerName = "";
        this.customerId = null;
        this.listview = false;
        this.cart = [];
        this.filterUpdate = false;
        this.avatar = "assets/image/logo.png";
        this.currency = "USD";
        this.wishlistId = [];
        this.quantity = 2;
        this.setNavigation = false;
        this.applyFilter = false;
        this.selectedFilter = {};
        this.price = { lower: 1, upper: 1000 };
        this.attributeTerms = [];
        this.featuredProducts = false;
        this.onsaleProducts = false;
        this.dimensions = { imageGridViewHeight: 100, imageProductViewHeight: 100, scrollProductHeight: 100, productSliderWidth: 42 };
        this.settings = { "show_featured": "1", "show_onsale": "1", "show_latest": "1", "pull_to_refresh": "1", "onesignal_app_id": "", "google_project_id": "", "google_web_client_id": "", "rate_app_ios_id": "", "rate_app_android_id": "", "rate_app_windows_id": "", "share_app_android_link": "", "share_app_ios_link": "", "support_email": "", "image_height": "100", "product_slider_width": "42", "enable_product_chat": "0", "enable_home_chat": "0", "whatsapp_number": "", "language": "english" };
        this.data = {};
        this.sortType = 0;
        this.logoutUrl = "";
    }
    Values.prototype.updateCart = function (crt) {
        this.cartItem = crt.cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in crt.cart_contents) {
            this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
            this.count += parseInt(crt.cart_contents[item].quantity);
        }
    };
    Values.prototype.updateCartTwo = function (crt) {
        this.cart = [];
        this.count = 0;
        this.cartItem = crt;
        for (var item in crt) {
            this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
            this.count += parseInt(crt[item].quantity);
        }
    };
    Values.prototype.calc = function (width) {
        var devide = this.getDevide(width);
        this.dimensions.imageGridViewHeight = this.settings.image_height / 100 * (width / devide);
        if (width >= 769) {
            this.dimensions.productSliderWidth = this.settings.product_slider_width * 0.7;
            this.dimensions.imageProductViewHeight = (this.settings.image_height / 100 * 0.6) * width;
        }
        else {
            this.dimensions.imageProductViewHeight = this.settings.image_height / 100 * width;
            this.dimensions.productSliderWidth = this.settings.product_slider_width;
        }
        this.dimensions.scrollProductHeight = this.settings.image_height / 100 * (width * this.dimensions.productSliderWidth / 100);
        this.dimensions.imageListViewHeight = (this.settings.image_height / 100 * 11);
    };
    Values.prototype.getDevide = function (width) {
        if (width >= 1025) {
            return 5;
        }
        if (width >= 769) {
            return 4;
        }
        if (width >= 481) {
            return 3;
        }
        else {
            return 2;
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_filter__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sort_sort__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductsPage = /** @class */ (function () {
    function ProductsPage(iab, toastCtrl, modalCtrl, nav, popoverCtrl, mainService, service, params, values, functions) {
        var _this = this;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.mainService = mainService;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.noProducts = false;
        this.filter = {};
        this.shouldShowCancel = true;
        this.sort = 0;
        this.q = "";
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = '1';
        if (params.data.filter)
            this.filter = params.data.filter;
        this.filter.page = 1;
        if (params.data.id)
            this.filter.category = params.data.id;
        this.filter.status = 'publish';
        if (params.data.name)
            this.categoryName = params.data.name;
        this.subCategories = this.mainService.categories.filter(function (item) { return item.parent === parseInt(params.data.id); });
        this.service.load(this.filter)
            .then(function (results) { return _this.handleProducts(results); });
    }
    ProductsPage_1 = ProductsPage;
    ProductsPage.prototype.handleProducts = function (results) {
        this.products = results;
    };
    ProductsPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.mainService.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(ProductsPage_1, this.items);
    };
    ProductsPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    ProductsPage.prototype.external = function (url) {
        console.log(url);
        var options = "location=yes,hidden=no,toolbar=yes";
        var browser = this.iab.create(url, '_blank', options);
        browser.show();
    };
    ProductsPage.prototype.getProducts = function (id) {
        this.nav.push(ProductsPage_1, id);
    };
    ProductsPage.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], item);
    };
    ProductsPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.loadMore(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(); });
        }
    };
    ProductsPage.prototype.updateCart = function () { };
    ProductsPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter = "";
        this.filter = {};
        this.filter.page = 1;
        this.filter.search = $event.srcElement.value;
        this.service.search(this.filter).then(function (results) { return _this.handleSearchResults(results); });
    };
    ProductsPage.prototype.handleSearchResults = function (results) {
        this.products = results;
    };
    ProductsPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    ProductsPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    ProductsPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    ProductsPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'top'
        });
        toast.present();
    };
    ProductsPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsPage.prototype.getFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__filter_filter__["a" /* Filter */], { filter: this.filter });
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.load(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    ProductsPage.prototype.getSort = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__sort_sort__["a" /* Sort */], { filter: this.filter });
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.load(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    ProductsPage.prototype.handleFilterResults = function (results) {
        this.products = results;
    };
    ProductsPage = ProductsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\products\products.html"*/'<ion-header class="products-header">\n\n    <ion-navbar color="header">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu">\n\n            </ion-icon>\n\n        </button>\n\n        <ion-title>\n\n                <h2 [innerHTML]="categoryName" style="font-size: 18px;margin: 0"></h2>\n\n        </ion-title>\n\n        <ion-buttons end> \n\n            <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n\n                <ion-icon color="icon-color" name="md-basket">\n\n                </ion-icon>\n\n                <ion-badge class="badge badge-light"  *ngIf="values.count">{{values.count}}\n\n                </ion-badge>\n\n            </button> \n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="products">\n\n    \n\n    <div class="margin">\n\n        <ion-searchbar placeholder="{{\'search\' | translate}}" [(ngModel)]="q" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"> </ion-searchbar>\n\n    </div>\n\n\n\n        <div *ngIf="subCategories.length" class="scrollmenu2">\n\n          <a *ngFor="let item of subCategories">\n\n            <img *ngIf="item.image?.src" src="{{item.image.src}}" (click)="getCategory(item.id, item.slug, item.name)"/>\n\n            <h5 (click)="getCategory(item.id, item.slug, item.name)"><span [innerHTML]="item.name"></span></h5>\n\n          </a>\n\n        </div>\n\n\n\n    <ion-item no-lines class="item-name"> \n\n        <button ion-button icon-only clear color="icon-color" (click)="getSort()">\n\n            <ion-icon name="md-options"></ion-icon> {{"Sort" | translate}}\n\n        </button> \n\n        <button ion-button icon-only item-end clear color="icon-color" *ngIf="values.listview" (click)="setGridView()">\n\n            <ion-icon name="md-grid">\n\n            </ion-icon>\n\n        </button> \n\n        <button ion-button icon-only item-end clear color="icon-color" *ngIf="!values.listview" (click)="setListView()">\n\n            <ion-icon name="md-list-box">\n\n            </ion-icon>\n\n        </button> \n\n        <button ion-button icon-only item-end clear color="icon-color" (click)="getFilter()">\n\n            <ion-icon name="ios-funnel"></ion-icon>\n\n        </button> \n\n    </ion-item>\n\n\n\n    <div class="spinner center-spinner"><ion-spinner *ngIf="!products" name="crescent"> </ion-spinner></div>\n\n        <div *ngIf="products" class="products-listing">\n\n            <div *ngIf="!products.length" class="no-products">\n\n                <h2>{{"No products found!" | translate}}</h2>\n\n            </div>\n\n\n\n            <div *ngIf="products.length">\n\n                <div *ngIf="values.listview">\n\n                    <div class="item-list" *ngFor="let item of products">\n\n                        <ion-item class="left-padding" no-lines style="padding-right: 0 !important">\n\n                            <ion-thumbnail item-left> \n\n                                <img [style.height.rem]="values.dimensions.imageListViewHeight" tappable *ngIf="item.images.length" src="{{item?.images[0]?.src}}" (click)="getProduct(item)">\n\n                            <img [style.height.rem]="values.dimensions.imageListViewHeight" tappable *ngIf="!item.images.length" src="assets/image/500.png" (click)="getProduct(item)">\n\n                                <!--button class="no-stock-button" ion-button *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                                </button--> \n\n\n\n                                <div *ngIf="item.stock_status == \'instock\'">\n\n                                <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                                </div>\n\n\n\n                            </ion-thumbnail>\n\n                            <div class="product-name-top">\n\n                                <div class="product-label">\n\n                                    <div tappable (click)="getProduct(item)" class="max-lines">\n\n                                        <h2 *ngIf="item.title">{{item.title}} </h2>\n\n                                        <h2 *ngIf="item.name">{{item.name}} </h2>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n\n\n                            <div> \n\n                                <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                </span> \n\n                                <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                </span>\n\n                                <span class="price-delete" *ngIf="item.sale_price">\n\n                                    <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                    </del>\n\n                                </span> \n\n                            </div>\n\n\n\n                            <h3 style="font-size:11px; margin: 3px 0"> \n\n                                <span class="rating review-star">\n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> \n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span> \n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> \n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span> \n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> \n\n                                </span>\n\n                            </h3>\n\n\n\n                            <div class="bottom-right-button" *ngIf="item.type == \'external\'">\n\n                                <button ion-button text-uppercase color="button-color" item-end outline style="margin-right: 20px; border: 0; font-size: 14px" (click)="external(item.external_url)">\n\n                                {{"Buy Now"  | translate}}\n\n                                </button> \n\n                            </div>\n\n\n\n                            <div class="bottom-right-button" *ngIf="item.type != \'external\'"> \n\n                                <button ion-button [disabled]="item.stock_status == \'outofstock\'" text-uppercase color="button-color" item-end outline style="margin-right: 20px; border: 0; font-size: 14px" *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">{{"Add"  | translate}}\n\n                                </button> \n\n                                <button ion-button icon-only item-end clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n\n                                    <ion-icon name="md-remove">\n\n                                    </ion-icon>\n\n                                </button> \n\n                                <button ion-button item-end color="button-color" clear style="border: 0;" *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                                </button> \n\n                                <button ion-button icon-only item-end clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n\n                                    <ion-icon name="md-add">\n\n                                    </ion-icon>\n\n                                </button> \n\n                            </div>\n\n\n\n                            <div width-20 class="bottom-left-button">\n\n                                <ion-icon name="md-heart" class="wishlist-button-fill" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                                <ion-icon name="md-heart-outline" class="wishlist-button" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                            </div>\n\n                        </ion-item>\n\n                    </div>\n\n                </div>\n\n\n\n                <div *ngIf="!values.listview">\n\n                    <div class="grid">\n\n                        <ion-row class="row unlimited-items">\n\n                            <ion-col class="col" *ngFor="let item of products">\n\n                                <ion-card>\n\n                                    <ion-card-content>\n\n                                        <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable *ngIf="item.images.length" src="{{item?.images[0]?.src}}" (click)="getProduct(item)">\n\n                                        <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable *ngIf="!item.images.length" src="assets/image/500.png" (click)="getProduct(item.id)">\n\n                                        <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                                        </button>\n\n\n\n                                        <div *ngIf="item.stock_status == \'instock\'">\n\n                                        <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                                        </div>\n\n\n\n                                        <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                                        <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                                    </ion-card-content>\n\n\n\n                                    <div tappable (click)="getProduct(item)" class="card-name">\n\n                                        <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                                        <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n                                    </div>\n\n\n\n                                    <h3 style="font-size:11px; margin: 3px 0"> \n\n                                        <span class="rating review-star">\n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> \n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span>                        \n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> \n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span>                        \n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> \n\n                                        </span>\n\n                                    </h3>\n\n\n\n                                    <ion-label> \n\n                                        <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                        </span> \n\n                                        <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                        </span>\n\n                                        <span class="price-delete" *ngIf="item.sale_price">\n\n                                            <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                            </del>\n\n                                        </span> \n\n                                    </ion-label>\n\n\n\n                                    <!--div class="add-remove-button" *ngIf="item.type == \'external\'">\n\n                                    <button ion-button text-uppercase color="button-color" item-right clear style="border: 0;" (click)="external(item.external_url)">\n\n                                    {{"Buy Now"  | translate}}\n\n                                    </button> \n\n                                    </div>\n\n\n\n                                    <div class="add-remove-button" *ngIf="item.type != \'external\'"> \n\n                                        <button ion-button [disabled]="item.stock_status == \'outofstock\'" text-uppercase color="button-color" item-right clear style="border: 0;" *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                                          {{"Add"  | translate}}\n\n                                        </button> \n\n                                        <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n\n                                           <ion-icon name="md-remove">\n\n                                           </ion-icon>\n\n                                        </button> \n\n                                        <button ion-button item-right color="button-color" style="border: 0; margin: 0 10px;" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                                        </button> \n\n                                        <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n\n                                           <ion-icon name="md-add">\n\n                                           </ion-icon>\n\n                                        </button> \n\n                                    </div-->\n\n                                </ion-card>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </div>\n\n                </div>\n\n                <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n                    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading More Items\' | translate}}"> </ion-infinite-scroll-content>\n\n                </ion-infinite-scroll>\n\n            </div>\n\n        </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\products\products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__["a" /* Functions */]])
    ], ProductsPage);
    return ProductsPage;
    var ProductsPage_1;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = /** @class */ (function () {
    function ProductService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/' + id + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.product = data;
                resolve(_this.product);
            });
        });
    };
    ProductService.prototype.getReviews = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/' + id + '/reviews/' + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reviews = data;
                resolve(_this.reviews);
            });
        });
    };
    ProductService.prototype.getRelatedProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.related = data;
                resolve(_this.related);
            });
        });
    };
    ProductService.prototype.getUpsellProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.upsell = data;
                resolve(_this.upsell);
            });
        });
    };
    ProductService.prototype.getCrossSellProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.crossSell = data;
                resolve(_this.crossSell);
            });
        });
    };
    ProductService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    ProductService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    ProductService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService.prototype.submitComment = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("rating", form.rating);
        params.append("comment", form.comment);
        if (!this.values.isLoggedIn) {
            params.append("author", form.author);
            params.append("email", form.email);
        }
        params.append("comment_post_ID", form.id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-comments-post.php', params).subscribe(function (data) {
                resolve(true);
            });
        });
    };
    ProductService.prototype.getVariationProducts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/' + id + '/variations' + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderSummary = /** @class */ (function () {
    function OrderSummary(nav, service, params, functions, values) {
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.functions = functions;
        this.values = values;
        this.id = params.data;
        this.values.count = null;
    }
    OrderSummary.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderSummary = results; });
    };
    OrderSummary.prototype.Continue = function () {
        this.values.count = 0;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    OrderSummary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\checkout\order-summary\order-summary.html"*/'<ion-header>\n\n    <ion-navbar color="header" hideBackButton> <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n        <ion-title>{{"Order Summary" | translate}} </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content text-wrap class="order-summary">\n\n    <ion-spinner *ngIf="!orderSummary" name="crescent"> </ion-spinner>\n\n    <div *ngIf="orderSummary" class="margin">\n\n        <ion-card>\n\n            <ion-card-header style="background-color: #f5f5f5">\n\n                <h2>{{"Order Received" | translate}} </h2>\n\n                <h3>{{"Thank you. Your order has been received" | translate}} </h3>\n\n            </ion-card-header>\n\n            <div *ngIf="orderSummary" class="summary">\n\n                <ion-item no-lines>\n\n                    <h2>{{"Order Number" | translate}} : {{orderSummary.number}} </h2>\n\n                    <h2>{{"Order date" | translate}} : {{orderSummary.date_created | date:\'MMM d, y hh:mm a\'}} </h2>\n\n                    <h2>{{"Total" | translate}} : {{1*orderSummary.total | currency:values.currency:true:\'1.2-2\'}} </h2>\n\n                    <h2>{{"Payment Method" | translate}} : {{orderSummary.payment_method_title}} </h2>\n\n                    <div *ngFor="let item of orderSummary.shipping_lines | keys">\n\n                        <h2>{{"Shipping" | translate}} : {{item.value.method_title}} </h2>\n\n                    </div>\n\n                </ion-item>\n\n            </div>\n\n        </ion-card>\n\n        <ion-card>\n\n            <ion-card-header style="background-color: #f5f5f5">\n\n                <ion-label class="side-header">{{"Order Details" | translate}} </ion-label>\n\n            </ion-card-header>\n\n            <div class="order-details">\n\n                <!--ion-item no-lines>\n\n          <ion-label class="side-header">{{"Order Details" | translate}}\n\n          </ion-label>\n\n        </ion-item-->\n\n                <div *ngFor="let item of orderSummary.line_items | keys">\n\n                    <ion-row>\n\n                        <ion-col col-8>\n\n                            <ion-label no-margin>{{item.value.name}} x {{item.value.quantity}} </ion-label>\n\n                        </ion-col>\n\n                        <ion-col col class="text-right">\n\n                            <ion-label no-margin>{{1*item.value.subtotal | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </div>\n\n                <ion-row *ngIf="orderSummary.coupon_lines.length != 0">\n\n                    <ion-col col-8>\n\n                        <ion-label no-margin>{{"coupon" | translate}} </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label no-margin>{{1*orderSummary.discount_total | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-8>\n\n                        <ion-label no-margin>{{"Shipping Total" | translate}} </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label no-margin>{{1*orderSummary.shipping_total | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row *ngIf="!orderSummary.shipping_tax == 0">\n\n                    <ion-col col-8>\n\n                        <ion-label no-margin>{{"Shipping Tax" | translate}} </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label no-margin>{{1*orderSummary.shipping_tax | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-8>\n\n                        <ion-label no-margin>{{"Total Tax" | translate}} </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label no-margin>{{1*orderSummary.total_tax | currency:values.currency:true:\'1.2-2\' }} </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row class="order-total">\n\n                    <ion-col col-8>\n\n                        <ion-label class="side-header"><b>{{"Total" |translate}}</b> </ion-label>\n\n                    </ion-col>\n\n                    <ion-col class="text-right">\n\n                        <ion-label> <b>{{1*orderSummary.total | currency:values.currency:true:\'1.2-2\' }}\n\n              </b> </ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-card>\n\n        <div class="continue-button"> <button ion-button full color="button-color" no-padding no-margin text-uppercase (click)="Continue()">\n\n          {{"Continue" | translate}}\n\n        </button> </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\checkout\order-summary\order-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], OrderSummary);
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Filter = /** @class */ (function () {
    function Filter(nav, params, values, service) {
        var _this = this;
        this.nav = nav;
        this.values = values;
        this.service = service;
        this.attributeTerms = [];
        this.values.filter = params.data.filter;
        this.service.getAttributes().then(function (results) {
            _this.values.attributes = results;
            if (_this.values.attributes.length) {
                _this.values.attributes.forEach(function (item) {
                    if (!item.selected)
                        item.selected = false;
                });
                _this.values.attributes.forEach(function (item) {
                    if (item.selected) {
                        _this.getAttributeTerms(item.id);
                        _this.values.selectedFilter = item;
                    }
                });
            }
        });
        if (!this.values.price.upper)
            this.values.price.upper = this.values.max_price;
    }
    Filter.prototype.chooseTab = function (filterType) {
        this.getAttributeTerms(filterType.id);
        this.values.attributes.forEach(function (item) {
            item.selected = false;
        });
        this.values.attributes.forEach(function (item) {
            if (item.id == filterType.id)
                item.selected = true;
        });
        this.values.selectedFilter = filterType;
    };
    Filter.prototype.getAttributeTerms = function (id) {
        var _this = this;
        this.service.attributeTerms(id).then(function (results) { return _this.attributeTerms[id] = results; });
    };
    Filter.prototype.applyFilter = function () {
        var _this = this;
        var i = 0;
        this.values.attributes.forEach(function (attr) {
            if (_this.values.attributeTerms[attr.id])
                _this.values.attributeTerms[attr.id].forEach(function (term) {
                    if (term.selected && term.selected == true) {
                        _this.values.filter['attributes' + i] = attr.slug;
                        _this.values.filter['attribute_term' + i] = term.id;
                    }
                    else {
                        _this.values.filter['attributes' + i] = undefined;
                        _this.values.filter['attribute_term' + i] = undefined;
                    }
                    i++;
                });
        });
        this.values.applyFilter = true;
        this.values.filter.min_price = this.values.price.lower;
        this.values.filter.max_price = this.values.price.upper;
        this.nav.pop();
    };
    Filter.prototype.dismiss = function () {
        this.values.applyFilter = false;
        this.nav.pop();
    };
    Filter.prototype.clearAll = function () {
        var _this = this;
        this.values.price.lower = 1;
        this.values.price.upper = this.values.max_price;
        this.values.filter.min_price = undefined;
        this.values.filter.max_price = undefined;
        var i = 0;
        this.values.attributes.forEach(function (attr) {
            if (_this.values.attributeTerms[attr.id])
                _this.values.attributeTerms[attr.id].forEach(function (term) {
                    term.selected = false;
                    _this.values.filter['attributes' + i] = undefined;
                    _this.values.filter['attribute_term' + i] = undefined;
                    i++;
                });
        });
        if (this.values.attributes.length) {
            this.values.attributes.forEach(function (item) {
                item.selected = false;
            });
            this.values.attributes[0].selected = true;
            this.values.selectedFilter = this.values.attributes[0];
        }
        this.nav.pop();
    };
    Filter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\filter\filter.html"*/'<ion-header class="filter-header">\n\n    <ion-navbar color="header">\n\n        <ion-buttons left style="padding-left:10px;">\n\n            <button clear ion-button (click)="clearAll()">\n\n            {{"Clear" | translate}}\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>{{"Filter" | translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="dismiss()">\n\n                <ion-icon name="md-close" style="font-size: 20px; margin: 16px;"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-wrap class="filter-page">\n\n    <div class="filter">\n\n        <div class="spinner"><ion-spinner *ngIf="!values.attributes" name="crescent"> </ion-spinner></div>\n\n        <div class="price-filter" *ngIf="values.attributes">\n\n            <ion-item class="price-range">\n\n                <ion-label text-uppercase>{{"Price"| translate}} </ion-label>\n\n                <ion-input required type="text" [(ngModel)]="values.price.lower"> </ion-input>\n\n                <ion-input required type="text" [(ngModel)]="values.price.upper"> </ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-range dualKnobs="true" pin="true" min="1" max="{{values.max_price}}" [(ngModel)]="values.price" color="dark">\n\n                    <ion-label range-left>1</ion-label>\n\n                    <ion-label range-right>{{values.max_price}}</ion-label>\n\n                </ion-range>\n\n            </ion-item>\n\n        </div>\n\n\n\n        <div class="attributes" *ngIf="values.attributes">\n\n            <div class="attributes" *ngIf="values.attributes?.length">\n\n                <ion-grid>\n\n                    <ion-row style="border: 4px solid #f8f8f8;">\n\n                        <ion-col width-40 class="col-left">\n\n                            <div *ngFor="let filterType of values.attributes" class="tab-left-item" [class.active]="filterType.selected">\n\n                                <button style="margin: 0px;" ion-button clear full color="dark" (click)="chooseTab(filterType)">{{filterType.name}}</button>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col width-60 class="col-right">\n\n                            <div class="spinner"><ion-spinner *ngIf="!attributeTerms[values?.selectedFilter?.id]" name="crescent"> </ion-spinner></div>\n\n                                <ion-list no-margin text-wrap>\n\n                                    <ion-item *ngFor="let val of attributeTerms[values?.selectedFilter?.id]">\n\n                                        <ion-label> {{val.name}} </ion-label>\n\n                                        <ion-checkbox [(ngModel)]="val.selected"> </ion-checkbox>\n\n                                    </ion-item>\n\n                                </ion-list>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                <br>\n\n             </div>   \n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="values.attributes">\n\n    <button ion-button full text-uppercase no-margin color="button-color" (click)="applyFilter()"> {{"Apply" | translate}} </button>\n\n</ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */]])
    ], Filter);
    return Filter;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sort = /** @class */ (function () {
    function Sort(nav, params, values) {
        this.nav = nav;
        this.values = values;
        this.values.filter = params.data.filter;
    }
    Sort.prototype.dismiss = function () {
        this.values.applyFilter = false;
        this.nav.pop();
    };
    Sort.prototype.applySort = function () {
        this.values.applyFilter = true;
        if (!this.values.filter.on_sale) {
            this.values.filter.on_sale = undefined;
        }
        if (!this.values.filter.in_stock) {
            this.values.filter.in_stock = undefined;
        }
        if (this.values.sortType == 0) {
            this.values.filter.order = "asc";
            this.values.filter.orderby = "date";
        }
        else if (this.values.sortType == 1) {
            this.values.filter.order = "asc";
            this.values.filter.orderby = "title";
        }
        else if (this.values.sortType == 2) {
            this.values.filter.order = "desc";
            this.values.filter.orderby = "title";
        }
        this.nav.pop();
    };
    Sort = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\sort\sort.html"*/'<ion-header class="filter-header">\n\n    <ion-navbar color="header">\n\n        <ion-title>{{"Sort" | translate}}\n\n        </ion-title>\n\n        <ion-buttons end> \n\n            <button ion-button (click)="dismiss()">\n\n                <ion-icon name="md-close" style="font-size: 20px; margin: 16px;">       \n\n                </ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-wrap class="sort">\n\n    <ion-list radio-group [(ngModel)]="values.sortType">\n\n        <ion-item>\n\n            <ion-label text-wrap>{{"Default" | translate}} </ion-label>\n\n            <ion-radio value="0"> </ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label text-wrap>{{"Name" | translate}} (A - Z) </ion-label>\n\n            <ion-radio value="1"> </ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label text-wrap>{{"Name" | translate}} (Z - A) </ion-label>\n\n            <ion-radio value="2"> </ion-radio>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-item>\n\n        <ion-label>{{"On sale" | translate}}</ion-label>\n\n        <ion-toggle color="button-color" [(ngModel)]="values.filter.on_sale"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>{{"In stock" | translate}}</ion-label>\n\n        <ion-toggle color="button-color" [(ngModel)]="values.filter.in_stock"></ion-toggle>\n\n    </ion-item>\n\n</ion-content>\n\n\n\n<ion-footer> \n\n    <button ion-button full no-margin text-uppercase color="button-color" (click)="applySort()"> {{"Apply" | translate}} \n\n    </button> \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\sort\sort.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */]])
    ], Sort);
    return Sort;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = /** @class */ (function () {
    function Post(service, values, params) {
        var _this = this;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getPage(this.id)
            .then(function (results) { return _this.post = results; });
    }
    Post = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\post\post.html"*/'<ion-header class="settings-header">\n\n    <ion-navbar color="header"> <button ion-button menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n     </button>\n\n        <ion-title *ngIf="post?.post_title">{{post.post_title}} </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="post" padding>\n\n    <div class="spinner"><ion-spinner *ngIf="!post" name="crescent"> </ion-spinner></div>\n\n    <div *ngIf="post">\n\n        <div [innerHTML]="post.post_content"></div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\post\post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], Post);
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgotten_forgotten__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
var AccountLogin = /** @class */ (function () {
    function AccountLogin(nav, service, functions, values, config /*, private googlePlus: GooglePlus, private fb: Facebook*/) {
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.config = config; /*, private googlePlus: GooglePlus, private fb: Facebook*/
        this.disableSubmit = false;
        this.facebookSpinner = false;
        this.googleSpinner = false;
        this.loginData = [];
        this.LogIn = "LogIn";
    }
    AccountLogin.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.LogIn = "Logging In";
            this.service.login(this.loginData).then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.LogIn = "LogIn";
        if (!results.errors) {
            this.functions.showAlert('success', 'You have successfully logged in');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.functions.showAlert('error', 'invalid username/password');
        }
    };
    AccountLogin.prototype.forgotten = function (loginData) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__forgotten_forgotten__["a" /* AccountForgotten */]);
    };
    AccountLogin.prototype.signup = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* AccountRegister */]);
    };
    AccountLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\login\login.html"*/'<ion-header class="login-header">\n\n  <ion-navbar color="header"> \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Login" | translate}} \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="account-login">\n\n  \n\n  <div class="shop-image"> \n\n      <img src="{{values.avatar}}"> \n\n      <!--h2>LOGO</h2-->\n\n  </div>\n\n\n\n  <div class="margin">\n\n    <form #f="ngForm" class="login">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname" placeholder="{{\'Username\' | translate}}"> </ion-input>\n\n          <ion-icon name="md-mail" item-left></ion-icon>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input required type="password" [(ngModel)]="loginData.password" name="password" placeholder="{{\'Password\' | translate}}"> </ion-input>\n\n          <ion-icon name="md-key" item-left></ion-icon>\n\n        </ion-item>\n\n        <h2 tappable (click)="forgotten(loginData)">{{"Forgot Password" | translate}}?</h2>        \n\n      </ion-list> \n\n\n\n      <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="login(loginData)">{{LogIn | translate}}</button>\n\n\n\n      <!--ion-row style="margin-top:16px">\n\n        <ion-col> \n\n          <button ion-button block style="background-color: #3B5998; color: #fff" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="facebookLogin()">\n\n            <ion-icon item-left style="color:#fff; padding-right: 5px;" ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n            Facebook\n\n            <div class="spinner"><ion-spinner *ngIf="facebookSpinner" name="crescent"></ion-spinner></div>\n\n          </button> \n\n        </ion-col>\n\n\n\n        <ion-col> \n\n          <button ion-button block style="background-color: #d34836; color: #fff" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="gmailLogin()">\n\n            <ion-icon style="color:#fff; padding-right: 5px;" ios="logo-google" md="logo-google"></ion-icon>\n\n            Google\n\n           <div class="spinner"><ion-spinner *ngIf="googleSpinner" name="crescent">           \n\n           </ion-spinner></div>\n\n          </button> \n\n        </ion-col>\n\n      </ion-row--> \n\n      <br> \n\n      <br>\n\n      <hr> \n\n      <br>\n\n\n\n      <button ion-button block clear type="submit" class="button button-block button-default or-button" text-uppercase style="color: #999;">{{"Or" | translate}}\n\n      </button>\n\n      <h3 tappable>{{"New User" | translate}}? <span tappable style="color: red" (click)="signup()">{{"Register" | translate}}</span> {{"Here" | translate}}</h3> <br> \n\n    </form> \n\n    <br> \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__providers_service_config__["a" /* Config */] /*, private googlePlus: GooglePlus, private fb: Facebook*/])
    ], AccountLogin);
    return AccountLogin;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountRegister = /** @class */ (function () {
    function AccountRegister(nav, service, platform, functions, oneSignal, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.platform = platform;
        this.functions = functions;
        this.oneSignal = oneSignal;
        this.values = values;
        this.disableSubmit = false;
        this.Register = "Register Account";
        this.registerData = {};
        this.countries = {};
        this.registerData.billing = {};
        this.registerData.shipping = {};
        this.service.getNonce()
            .then(function (results) { return _this.handleResults(results); });
    }
    AccountRegister.prototype.handleResults = function (results) {
        this.countries = results;
    };
    AccountRegister.prototype.getBillingRegion = function (countryId) {
        this.registerData.billing_state = "";
        this.billing_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.validateForm = function () {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false;
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false;
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
        this.registerData.username = this.registerData.email;
        this.registerData.billing.email = this.registerData.email;
        this.registerData.billing.first_name = this.registerData.first_name;
        this.registerData.billing.last_name = this.registerData.last_name;
        this.registerData.shipping.first_name = this.registerData.first_name;
        this.registerData.shipping.last_name = this.registerData.last_name;
        this.registerData.shipping.company = this.registerData.billing.company;
        this.registerData.shipping.address_1 = this.registerData.billing.address_1;
        this.registerData.shipping.address_2 = this.registerData.billing.address_2;
        this.registerData.shipping.city = this.registerData.billing.city;
        this.registerData.shipping.state = this.registerData.billing.state;
        this.registerData.shipping.postcode = this.registerData.billing.postcode;
        this.registerData.shipping.country = this.registerData.billing.country;
        return true;
    };
    AccountRegister.prototype.registerCustomer = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.Register = "Registering";
            console.log(this.registerData);
            this.service.registerCustomer(this.registerData).then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.handleRegister = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.Register = "Register Account";
        if (results.code) {
            this.errors = results;
        }
        else if (!results.code) {
            this.countries.checkout_login;
            this.service.login(this.registerData).then(function (results) {
                _this.loginStatus = results;
            });
            this.functions.showAlert("Success", "Registration successfull..");
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
            if (this.platform.is('cordova')) {
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({
                    email: this.registerData.email,
                    pincode: this.registerData.billing_address.postcode,
                    city: this.registerData.billing_address.city
                });
            }
        }
    };
    AccountRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\register\register.html"*/'<ion-header class="register-header">\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Register" | translate}}\n\n    </ion-title> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="account-register">\n\n  <div>\n\n    <form #f="ngForm">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>{{"First Name" | translate}}\n\n          </ion-label>\n\n          <ion-input type="text" [(ngModel)]="registerData.first_name" name="firstname">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Last Name" | translate}}\n\n          </ion-label>\n\n          <ion-input type="text" [(ngModel)]="registerData.last_name" name="lastname">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Email" | translate}}\n\n          </ion-label>\n\n          <ion-input type="email" [(ngModel)]="registerData.email" name="Email">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Password" | translate}}\n\n          </ion-label>\n\n          <ion-input type="password" [(ngModel)]="registerData.password" name="password">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Phone" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="number" [(ngModel)]="registerData.billing.phone" name="billing_phone">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Street Address" | translate}} 1\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing.address_1" name="billing_1">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Street Address" | translate}} 2\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing.address_2" name="billing_2">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"City" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing.city" name="billing_city">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>{{"Postcode" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="number" [(ngModel)]="registerData.billing.postcode" name="postcode">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="countries.country">     \n\n          <ion-label>  \n\n            {{"Country" | translate}}\n\n          </ion-label>   \n\n          <ion-select [(ngModel)]="registerData.billing.country" (ngModelChange)="getBillingRegion(registerData.billing.country)" name="country">\n\n            <div *ngFor="let field of countries.country.countries | keys">\n\n              <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n              </ion-option>\n\n            </div>\n\n          </ion-select>      \n\n        </ion-item>\n\n        <ion-item *ngIf="billing_states">  \n\n          <ion-label>  \n\n            {{"State" | translate}}\n\n          </ion-label>   \n\n          <ion-select [(ngModel)]="registerData.billing.state" name="state">\n\n            <div *ngFor="let field of billing_states | keys">\n\n              <ion-option value="{{field.key}}">{{field.value}}\n\n              </ion-option>\n\n            </div>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="!billing_states">\n\n          <ion-label floating>{{"State" | translate}}\n\n          </ion-label>\n\n          <ion-input required type="text" [(ngModel)]="registerData.billing.state" name="state">\n\n          </ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n        <div *ngIf="errors" class="margin">\n\n            <h2 style="text-align: center;">{{errors.message}}\n\n            </h2>\n\n        </div>\n\n\n\n      <div class="margin"> \n\n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="registerCustomer()">{{Register | translate}}\n\n        </button>\n\n      </div>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountRegister);
    return AccountRegister;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Address = /** @class */ (function () {
    function Address(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getAddress()
            .then(function (results) { return _this.addresses = results; });
    }
    Address.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses);
    };
    Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\address\address.html"*/'<ion-header class="address-header">\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Address" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-wrap class="account-address">\n\n  <div class="spinner"><ion-spinner *ngIf="!addresses" name="crescent">\n\n  </ion-spinner></div>\n\n  <div *ngIf="addresses" class="address">\n\n    <div *ngIf="addresses.billing" class="address-border">\n\n      <ion-item>\n\n        <h1>{{"Billing Address" | translate}}\n\n        </h1>\n\n        <h2>{{addresses.billing.first_name}} {{addresses.billing.last_name}}\n\n        </h2>\n\n        <h2>{{addresses.billing.phone}}\n\n        </h2>\n\n        <h2>{{addresses.billing.email}}\n\n        </h2>\n\n        <h2>{{addresses.billing.address_1}}\n\n        </h2>\n\n        <h2>{{addresses.billing.address_2}}\n\n        </h2>\n\n        <h2>{{addresses.billing.city}} {{addresses.billing.state}}\n\n        </h2>\n\n        <h2>{{addresses.billing.country}} {{addresses.billing.postcode}}\n\n        </h2>\n\n      </ion-item>\n\n    </div>\n\n    <div *ngIf="addresses.shipping" class="address-border">\n\n      <ion-item>\n\n        <h1>{{"Shipping Address" | translate}}\n\n        </h1>\n\n        <h2>{{addresses.shipping.first_name}} {{addresses.shipping.last_name}}\n\n        </h2>\n\n        <h2>{{addresses.shipping.phone}}\n\n        </h2>\n\n        <h2>{{addresses.shipping.address_1}}\n\n        </h2>\n\n        <h2>{{addresses.shipping.address_2}}\n\n        </h2>\n\n        <h2>{{addresses.shipping.city}} {{addresses.shipping.state}}\n\n        </h2>\n\n        <h2>{{addresses.shipping.country}} {{addresses.shipping.postcode}}\n\n        </h2>\n\n      </ion-item>\n\n    </div>\n\n    <div class="margin">\n\n      <button ion-button block color="button-color" type="submit" class="button button-block button-default" (click)="editAddress()">{{"Edit Address" | translate}}\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Address);
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Service = /** @class */ (function () {
    function Service(reqhttp, http, config, values, loadingCtrl, nativeStorage) {
        this.reqhttp = reqhttp;
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.has_more_items = true;
        this.blocks = [];
        this.mainCategories = [];
        this.filter = {};
        this.filter.status = 'publish';
        this.filter.page = 1;
    }
    Service.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.data = data;
                _this.values.settings = data.settings;
                _this.blocks = data.blocks;
                _this.getCategories(1);
                var _loop_1 = function (item) {
                    if (_this.blocks[item].block_type == 'product_block') {
                        if (_this.blocks[item].filter_by == 'tag')
                            filter = { tag: _this.blocks[item].link_id, status: 'publish' };
                        else
                            filter = { category: _this.blocks[item].link_id, status: 'publish' };
                        _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.blocks[item].products = data;
                        });
                    }
                    if (_this.blocks[item].block_type == 'flash_sale_block') {
                        if (_this.blocks[item].filter_by == 'tag')
                            filter = { tag: _this.blocks[item].link_id, status: 'publish' };
                        else
                            filter = { category: _this.blocks[item].link_id, status: 'publish' };
                        _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.blocks[item].products = data;
                        });
                        _this.blocks[item].interval = setInterval(function () {
                            var countDownDate = new Date(_this.blocks[item].sale_ends).getTime();
                            var now = new Date().getTime();
                            var distance = countDownDate - now;
                            _this.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            _this.blocks[item].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            _this.blocks[item].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            _this.blocks[item].seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            if (distance < 0) {
                                clearInterval(_this.blocks[item].interval);
                                _this.blocks[item].hide = true;
                            }
                        }, 1000);
                    }
                };
                var filter;
                for (var item in _this.blocks) {
                    _loop_1(item);
                }
                _this.values.currency = data.currency;
                _this.login_nonce = data.login_nonce;
                _this.banners = data.banners;
                _this.values.max_price = data.max_price;
                _this.values.price.upper = data.max_price;
                if (data.user && data.user.data != undefined) {
                    _this.values.isLoggedIn = data.user.data.status;
                    _this.values.customerId = data.user.data.ID;
                    _this.values.customerName = data.user.data.display_name;
                    //this.values.avatar = data.user.data.avatar_url;
                    //this.values.logoutUrl = this.encodeUrl(data.user.data.url);
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                        }
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'woo') {
                            //this.values.avatar = data.avatar;
                            _this.login(data);
                        }
                        else if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                            _this.socialLogin(data.username);
                        }
                    }, function (error) { return console.error(error); });
                }
                setTimeout(function () {
                    _this.nativeStorage.setItem('blocks', data).then(function (data) { return console.log('Blocks Saved'); }, function (error) {
                        console.error("Blocks Storing error");
                        console.error(error);
                    });
                }, 10000);
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                    _this.values.cartNonce = _this.cart.cart_nonce;
                });
                if (_this.values.isLoggedIn) {
                    var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append("customer_id", _this.values.customerId.toString());
                    _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                }
                resolve(true);
            });
        });
    };
    Service.prototype.getCategories = function (page) {
        var _this = this;
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', {
            per_page: 100, page: page
        }), this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (page == 1)
                _this.categories = data;
            else {
                _this.categories.push.apply(_this.categories, data);
            }
            if (data.length == 100)
                _this.getCategories(page + 1);
            else {
                _this.mainCategories = _this.categories.filter(function (item) { return item.parent === 0 && item.name !== 'Uncategorized'; });
                _this.nativeStorage.setItem('categories', _this.categories).then(function (data) { return console.log('Saved'); }, function (error) { return console.error(error); });
            }
        });
    };
    Service.prototype.getNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.login = function (loginData) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", loginData.username);
        params.append("password", loginData.password);
        params.append("_wpnonce", this.login_nonce);
        params.append("login", 'Login');
        params.append("redirect", this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (!data.errors) {
                    _this.values.isLoggedIn = true;
                    _this.values.customerName = data.data.display_name;
                    _this.values.customerId = data.data.ID;
                    //this.values.logoutUrl = this.encodeUrl(data.data.url);
                    //this.values.avatar = data.data.avatar_url;
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append("customer_id", _this.values.customerId.toString());
                    _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    _this.nativeStorage.setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password,
                        type: 'woo'
                    }).then(function (data) { return console.log('Login Details Stored'); }, function (error) { return console.error(error); });
                }
                resolve(data);
            }, function (err) {
                resolve(JSON.parse(err._body));
                console.log(err._body);
            });
        });
    };
    Service.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    Service.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', _this.config.options).subscribe(function (data) {
                _this.values.isLoggedIn = false;
                _this.values.customerName = "";
                _this.nativeStorage.setItem('loginData', {}).then(function (data) { return console.log('Login Data cleared'); }, function (error) { return console.error(error); });
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                });
                resolve(_this.cart);
            });
        });
    };
    Service.prototype.passwordreset = function (email, nonce, url) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("user_login", email);
        params.append("wc_reset_password", "true");
        params.append("_wpnonce", nonce);
        params.append("_wp_http_referer", '/my-account/lost-password/');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/my-account/lost-password/', params, _this.config.options).subscribe(function (status) {
                resolve(status);
            });
        });
    };
    Service.prototype.passwordResetNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/customers/' + _this.values.customerId + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.saveAddress = function (address) {
        var _this = this;
        var params = address;
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp.put(_this.config.setUrl('PUT', '/wp-json/wc/v3/customers/' + _this.values.customerId + '?', false), params, {}).then(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    Service.prototype.pushNotification = function (notification) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", notification.device_id);
        params.append("platform", notification.platform);
        params.append("email", notification.email);
        params.append("city", notification.city);
        params.append("state", notification.state);
        params.append("country", notification.country);
        params.append("pincode", notification.pincode);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.pushNotify = function (deviceId, platform) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", deviceId);
        params.append("platform", platform);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders/' + id + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.country = data;
                resolve(_this.country);
            });
        });
    };
    Service.prototype.registerCustomer = function (customer) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", customer.username);
        params.append("password", customer.password);
        params.append("email", customer.billing.email);
        params.append("billing[email]", customer.billing.email);
        params.append("billing[first_name]", customer.billing.first_name);
        params.append("billing[last_name]", customer.billing.last_name);
        params.append("billing[address_1]", customer.billing.address_1);
        params.append("billing[address_2]", customer.billing.address_2);
        params.append("billing[city]", customer.billing.city);
        params.append("billing[state]", customer.billing.state);
        params.append("billing[postcode]", customer.billing.postcode);
        params.append("billing[country]", customer.billing.country);
        params.append("shipping[email]", customer.shipping.email);
        params.append("shipping[first_name]", customer.shipping.first_name);
        params.append("shipping[last_name]", customer.shipping.last_name);
        params.append("shipping[address_1]", customer.shipping.address_1);
        params.append("shipping[address_2]", customer.shipping.address_2);
        params.append("shipping[city]", customer.shipping.city);
        params.append("shipping[state]", customer.shipping.state);
        params.append("shipping[postcode]", customer.shipping.postcode);
        params.append("shipping[country]", customer.shipping.country);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.setUrl('POST', '/wp-json/wc/v1/customers?', false), params, _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.user = data;
                console.log(data);
                resolve(_this.user);
            }, function (err) {
                resolve(JSON.parse(err._body));
            });
        });
    };
    Service.prototype.getOrders = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders?', filter), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.updateOrder = function (data, id) {
        var _this = this;
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp.put(_this.config.setUrl('PUT', '/wp-json/wc/v3/orders/' + id + '?', false), data, {}).then(function (data) {
                _this.status = JSON.parse(data.data);
                resolve(_this.status);
            }, function (err) { return console.log(err); });
        });
    };
    Service.prototype.presentLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    Service.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Service.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getfeaturedProduct = function () {
        var _this = this;
        var filter = { status: 'publish', featured: true };
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter), this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.featuredProduct = data;
        });
    };
    Service.prototype.onSaleProduct = function () {
        var _this = this;
        var filter = { status: 'publish', on_sale: true };
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter), this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.onSale = data;
        });
    };
    Service.prototype.getProducts = function () {
        var _this = this;
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', this.filter), this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.products = data;
        });
    };
    Service.prototype.loadMore = function () {
        var _this = this;
        this.filter.page += 1;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/?', _this.filter), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.handleMore(data);
                resolve(true);
            });
        });
    };
    Service.prototype.handleMore = function (results) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
    };
    Service.prototype.sendToken = function (token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("access_token", token);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-facebook_connect', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                _this.fbResponse = data;
                if (data.status) {
                    _this.values.isLoggedIn = true;
                    _this.values.setNavigation = true;
                    _this.values.customerName = data.last_name;
                    _this.values.customerId = data.user_id;
                    //this.values.avatar = data.avatar;
                    _this.nativeStorage.setItem('loginData', {
                        username: data.user_login,
                        avatar: data.avatar,
                        type: 'social',
                        displayName: data.last_name
                    }).then(function (data) { return console.log('Data Stored'); }, function (error) { return console.error(error); });
                    resolve(data);
                }
            });
        });
    };
    Service.prototype.googleLogin = function (res) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("access_token", res.userId);
        params.append("email", res.email);
        params.append("first_name", res.displayName);
        params.append("last_name", res.displayName);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-google_connect', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                _this.googleResponse = data;
                if (data.status) {
                    _this.values.isLoggedIn = true;
                    _this.values.setNavigation = true;
                    _this.values.customerName = res.displayName;
                    _this.values.customerId = data.user_id;
                    console.log(data);
                    _this.nativeStorage.setItem('loginData', {
                        username: res.email,
                        avatar: res.imageUrl,
                        type: 'social',
                        displayName: res.displayName
                    }).then(function (data) { return console.log('Data Stored'); }, function (error) { return console.error(error); });
                    resolve(data);
                }
                //this.status = data;
            });
        });
    };
    Service.prototype.socialLogin = function (email) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("access_token", 'token');
        params.append("email", email);
        this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-google_connect', params, this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.googleResponse = data;
            if (data.status) {
                _this.values.isLoggedIn = true;
                _this.values.setNavigation = true;
                //this.values.customerName = data.displayName;
                _this.values.customerId = data.user_id;
            }
        });
    };
    Service.prototype.getAttributes = function () {
        var _this = this;
        if (this.values.attributes) {
            return Promise.resolve(this.values.attributes);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/attributes?', {
                per_page: 100
            }), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.attributes = data;
                if (_this.values.attributes[0]) {
                    _this.values.attributes[0].selected = true;
                    _this.values.selectedFilter = _this.values.attributes[0];
                    resolve(_this.values.attributes);
                }
            });
        });
    };
    Service.prototype.attributeTerms = function (id) {
        var _this = this;
        if (this.values.attributeTerms[id]) {
            return Promise.resolve(this.values.attributeTerms[id]);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/attributes/' + id + '/terms?', {
                per_page: 100
            }), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.attributeTerms[id] = data;
                resolve(_this.values.attributeTerms[id]);
            });
        });
    };
    Service.prototype.getPage = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("page_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.subscribeNotification = function (data) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("onesignal_user_id", data.userId);
        params.append("onesignal_push_token", data.pushToken);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_user_notification', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Functions = /** @class */ (function () {
    function Functions(alert, loadingController) {
        this.alert = alert;
        this.loadingController = loadingController;
    }
    Functions.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    Functions.prototype.presentLoading = function () {
        this.loader = this.loadingController.create({
            content: 'Please Wait..'
        });
        this.loader.present();
    };
    Functions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryService = /** @class */ (function () {
    function CategoryService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CategoryService.prototype.load = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', filter), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CategoryService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CategoryService.prototype.search = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService.prototype.getAttributes = function () {
        var _this = this;
        if (this.values.attributes) {
            return Promise.resolve(this.values.attributes);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/attributes?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.attributes = data;
                resolve(_this.values.attributes);
            });
        });
    };
    CategoryService.prototype.attributeTerms = function (id) {
        var _this = this;
        if (this.values.attributeTerms[id]) {
            return Promise.resolve(this.values.attributeTerms[id]);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/attributes/' + id + '/terms?', false), _this.config.optionstwo).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.attributeTerms[id] = data;
                resolve(_this.values.attributeTerms[id]);
            });
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = /** @class */ (function () {
    function CartService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CartService.prototype.loadCart = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteItem = function (item_key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' + item_key, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.getProvinces = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-content/plugins/woongkir/data/province2.json', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CartService.prototype.getCity = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-content/plugins/woongkir/data/city.json', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CartService.prototype.getSubdisctrict = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-content/plugins/woongkir/data/subdistrict.json', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.billing = data;
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                });
                resolve(_this.billing);
            });
        });
    };
    CartService.prototype.addToCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity += 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] += 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity -= 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] -= 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.submitCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.removeCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping_method[0]", method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CartService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_order_summary_order_summary__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkout_terms_condition_terms_condition__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BillingAddressForm = /** @class */ (function () {
    function BillingAddressForm(iab, nav, service, platform, oneSignal, params, functions, values) {
        this.iab = iab;
        this.nav = nav;
        this.service = service;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.functions = functions;
        this.values = values;
        this.OrderReview = {};
        this.showCreateAccont = false;
        this.buttonSubmit = false;
        this.buttonSubmitLogin = false;
        this.buttonSubmitCoupon = false;
        this.loading = false;
        this.chosen_shipping = [];
        this.PlaceOrder = "Place Order";
        this.buttonText1 = "Apply";
        this.LogIn = "LogIn";
        this.loginData = [];
        this.form = params.data.checkout;
        this.subdistrict = params.data.subdistrict;
        this.cityByProv = params.data.city;
        this.provinces = params.data.provinces;
        this.billing = {};
        //this.billing.shipping = true;
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = false;
        this.shipping = {};
        this.shipping.save_in_address_book = true;
        // console.log('daph',this.form);
        // this.getRegion(this.form.billing_country);
        this.getSubdistrict(this.form.billing_city);
        this.getSubdistrict(this.form.shipping_city);
        this.getCity(this.form.billing_state);
        this.getCity(this.form.shipping_state);
    }
    BillingAddressForm.prototype.getRegion = function (countryId) {
        var _this = this;
        // console.log('countryId.form', this.form);
        this.states = this.form.state[countryId];
        // console.log('this.states', this.states);
        this.service.updateOrderReview(this.form, this.OrderReview.shipping)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.getCity = function (stateId) {
        var _this = this;
        // console.log("dapi hai");
        var province = this.provinces[stateId];
        // console.log('stateId', stateId);
        // console.log('provinceId', province);
        var citi = [];
        for (var i = 0; i < this.cityByProv.length; i++) {
            if (this.cityByProv[i].province_id == province.province_id) {
                citi.push(this.cityByProv[i]);
            }
        }
        this.city = citi;
        // console.log('this.cityDaph', this.city);
        this.service.updateOrderReview(this.form, this.OrderReview.shipping)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.getSubdistrict = function (cityId) {
        var _this = this;
        // console.log('stateId', cityId);
        var district = [];
        for (var i = 0; i < this.subdistrict.length; i++) {
            var str = this.subdistrict[i].city;
            if (cityId.includes(str)) {
                district.push(this.subdistrict[i]);
            }
        }
        this.suite = district;
        // console.log('this.suiteDaph', this.suite);
        this.service.updateOrderReview(this.form, this.OrderReview.shipping)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.handleOrderReviews = function (results) {
        console.log('OrderReview', this.OrderReview);
        this.loading = false;
        this.OrderReview = results;
    };
    BillingAddressForm.prototype.checkout = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.PlaceOrder = "Placing Order";
        if (this.platform.is('cordova'))
            this.oneSignal.getIds().then(function (data) {
                _this.form.onesignal_user_id = data.userId;
            });
        if (!this.form.shipping) {
            this.form.shipping_first_name = this.form.billing_first_name;
            this.form.shipping_last_name = this.form.billing_last_name;
            this.form.shipping_company = this.form.billing_company;
            this.form.shipping_address_1 = this.form.billing_address_1;
            this.form.shipping_address_2 = this.form.billing_address_2;
            this.form.shipping_city = this.form.billing_city;
            this.form.shipping_country = this.form.billing_country;
            this.form.shipping_state = this.form.billing_state;
            this.form.shipping_postcode = this.form.billing_postcode;
        }
        if (this.form.payment_method == 'bacs' || this.form.payment_method == 'cheque' || this.form.payment_method == 'cod') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handleBilling(results); });
        }
        else if (this.form.payment_method == 'stripe') {
            this.service.getStripeToken(this.form)
                .then(function (results) { return _this.handleStripeToken(results); });
        }
        else {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayment(results); });
        }
    };
    BillingAddressForm.prototype.handlePayment = function (results) {
        var _this = this;
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(results.redirect, '_blank', options);
            browser_1.show();
            browser_1.on('loadstart').subscribe(function (data) {
                if (data.url.indexOf('order-received') != -1 && data.url.indexOf('return=') == -1) {
                    _this.values.cart = [];
                    _this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__checkout_order_summary_order_summary__["a" /* OrderSummary */], order_id);
                    browser_1.hide();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.buttonSubmit = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.checkoutStripe = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.PlaceOrder = "Placing Order";
        this.service.getStripeToken(this.form)
            .then(function (results) { return _this.handleStripeToken(results); });
    };
    BillingAddressForm.prototype.handleStripeToken = function (results) {
        var _this = this;
        if (results.error) {
            this.buttonSubmit = false;
            this.PlaceOrder = "Place Order";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results)
                .then(function (results) { return _this.handleBilling(results); });
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.handleBilling = function (results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("order-received/");
            var pos2 = str.lastIndexOf("?key=wc_order");
            var pos3 = pos2 - (pos1 + 15);
            var order_id = str.substr(pos1 + 15, pos3);
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__checkout_order_summary_order_summary__["a" /* OrderSummary */], order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.PlaceOrder = "Place Order";
    };
    BillingAddressForm.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.LogIn = "Please Wait";
            this.service.login(this.form)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    BillingAddressForm.prototype.validateForm = function () {
        if (this.form.username == undefined || this.form.username == "") {
            return false;
        }
        if (this.form.password == undefined || this.form.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.handleResults = function (result) {
        this.buttonSubmitLogin = false;
        this.LogIn = "LogIn";
        if (result.user_logged) {
            this.form = result;
            this.states = this.form.state[this.form.billing_country];
            this.values.isLoggedIn = result.user_logged;
            this.values.customerName = result.billing_first_name;
            this.values.customerId = result.user_id;
            this.values.logoutUrl = result.logout_url;
        }
        else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    };
    BillingAddressForm.prototype.createAccount = function () {
        this.showCreateAccont = true;
    };
    BillingAddressForm.prototype.changePayment = function () {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    };
    BillingAddressForm.prototype.terms = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__checkout_terms_condition_terms_condition__["a" /* TermsCondition */], this.form.terms_content);
    };
    BillingAddressForm.prototype.updateOrderReview = function () {
        var _this = this;
        this.loading = true;
        this.service.updateOrderReview(this.form, this.OrderReview.chosen_shipping)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\checkout\billing-address-form\billing-address-form.html"*/'<ion-header class="billing-header">\n\n    <ion-navbar color="header"> \n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu">\n\n          </ion-icon>\n\n        </button>\n\n        <ion-title>{{"Checkout" | translate}} \n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-wrap class="billing-address-form">\n\n      \n\n    <div class="check-box" *ngIf="!values.isLoggedIn">\n\n        <ion-item class="Returningcustomer" no-lines>\n\n            <ion-label>{{"Returning customer? Login here" | translate}}\n\n                <ion-icon ios="ios-log-in" md="md-log-in"> </ion-icon>\n\n            </ion-label>\n\n            <ion-checkbox checked="true" [(ngModel)]="form.islogin" name="subscribe"> \n\n            </ion-checkbox>\n\n        </ion-item>\n\n    </div>\n\n    \n\n    <div *ngIf="form.islogin" class="login-form">\n\n        <form #f="ngForm">\n\n            <ion-list>\n\n                <ion-item>\n\n                     <ion-input required type="email" [(ngModel)]="form.username" name="firstname" placeholder="{{\'Username\' | translate}}"> </ion-input>\n\n                     <ion-icon name="md-person" item-left></ion-icon>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-input required type="password" [(ngModel)]="form.password" name="password" placeholder="{{\'Password\' | translate}}"> </ion-input>\n\n                    <ion-icon name="md-lock" item-left></ion-icon>\n\n                </ion-item>\n\n            </ion-list>\n\n\n\n            <div class="login-button"> \n\n                <button ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="login(loginData)">{{LogIn | translate}}\n\n                </button> \n\n            </div>\n\n        </form>\n\n    </div>\n\n        \n\n    <div *ngIf="form">\n\n        <form #f="ngForm" class="form">\n\n            <ion-list no-margin>\n\n                <ion-item class="side-heading-background" style="margin-bottom:5px;">\n\n                    <ion-label color="side-heading-color">{{"Billing Address" | translate}} </ion-label>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>{{"First Name" | translate}} </ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.billing_first_name" name="firstname"> </ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>{{"Last Name"| translate}} </ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.billing_last_name" name="lastname"> </ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>{{"Phone" | translate}} </ion-label>\n\n                    <ion-input required type="number" [(ngModel)]="form.billing_phone" name="telephone"> </ion-input>\n\n                </ion-item>\n\n                                \n\n                 <ion-item>\n\n                    <ion-label> {{"Country" | translate}} </ion-label>\n\n                    <ion-select [(ngModel)]="form.billing_country" (ngModelChange)="getRegion(form.billing_country)" name="billing_country">\n\n                        <div *ngFor="let field of form.country.countries | keys">\n\n                            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span> </ion-option>\n\n                        </div>\n\n                    </ion-select>\n\n                </ion-item>\n\n\n\n                <ion-item *ngIf="states">\n\n                    <ion-label> {{"State" | translate}} </ion-label>\n\n                    <ion-select [(ngModel)]="form.billing_state" (ngModelChange)="getCity(form.billing_state)" name="billing_state">\n\n                        <div *ngFor="let field of states | keys">\n\n                            <ion-option value="{{field.key}}">{{field.value}} </ion-option>\n\n                        </div>\n\n                    </ion-select>\n\n                </ion-item>\n\n\n\n                <ion-item *ngIf="city?.length">\n\n                    <ion-label>Town / {{"City" | translate}} </ion-label>\n\n                    <ion-select [(ngModel)]="form.billing_city" (ngModelChange)="getSubdistrict(form.billing_city)" name="billing_city">\n\n                        <div *ngFor="let field of city">\n\n                            <ion-option value="{{field.type}} {{field.city_name}}"><span>{{field.type}} {{field.city_name}}</span> </ion-option>\n\n                        </div>\n\n                    </ion-select>\n\n                </ion-item>\n\n\n\n                <!-- <ion-item>\n\n                    <ion-label floating>Town / {{"City" | translate}} </ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.billing_city" name="city"> </ion-input>\n\n                </ion-item> -->\n\n\n\n                <ion-item>\n\n                    <ion-label floating>{{"Street Address" | translate}}</ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.billing_address_1" name="street1"> </ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="!suite.length">\n\n                    <ion-label floating>{{"Apartment" | translate}}, {{"suite" | translate}}, {{"unit" | translate}} {{"etc" | translate}}</ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.billing_address_2" name="billing_address_2"> </ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="suite?.length">\n\n                    <ion-label> {{"Apartment" | translate}}, {{"suite" | translate}}, {{"unit" | translate}} {{"etc" | translate}} </ion-label>\n\n                    <ion-select required [(ngModel)]="form.billing_address_2" (ngModelChange)="form.billing_address_2" name="billing_address_2">\n\n                        <div *ngFor="let field of suite">\n\n                            <ion-option value="{{field.subdistrict_name}}">Kecamatan {{field.subdistrict_name}}</ion-option>\n\n                        </div>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>{{"Email" | translate}} </ion-label>\n\n                    <ion-input required type="email" [(ngModel)]="form.billing_email" name="email"> </ion-input>\n\n                </ion-item>\n\n                \n\n                <ion-item>\n\n                    <ion-label floating>{{"Postcode" | translate}} </ion-label>\n\n                    <ion-input required type="number" [(ngModel)]="form.billing_postcode" name="postcode"> </ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item *ngIf="!states">\n\n                    <ion-label floating> {{"State" | translate}} </ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.billing_state" name="billing_state"> </ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n          \n\n            <div class="check-box" style="margin: 10px 0 0">\n\n                <ion-item *ngIf="!values.isLoggedIn" no-lines class="create-account">\n\n                    <ion-label>{{"Create Account" | translate}} ?</ion-label>\n\n                    <ion-checkbox checked="false" [(ngModel)]="form.register" name="subscribe"> </ion-checkbox>\n\n                </ion-item>\n\n            </div>\n\n\n\n            <div *ngIf="form.register" class="create-account-form login-form">\n\n                <form #f="ngForm">\n\n                    <ion-list>\n\n                        <ion-label> {{"Create an account by entering the information below. If you are a returning customer please login at the top of the page" | translate}}. </ion-label>\n\n                        <ion-item>\n\n                          <ion-input required type="text" [(ngModel)]="form.username" name="username" placeholder="{{\'Username\' | translate}}"> </ion-input>\n\n                          <ion-icon name="md-person" item-left></ion-icon>\n\n                        </ion-item>\n\n\n\n                        <ion-item>\n\n                          <ion-input required type="password" [(ngModel)]="form.password" name="password" placeholder="{{\'Password\' | translate}}"> </ion-input>\n\n                          <ion-icon name="md-lock" item-left></ion-icon>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </form>\n\n            </div>\n\n          \n\n\n\n            <div class="check-box">\n\n                <ion-item no-lines style="border: none">\n\n                    <ion-label>{{"Ship to a different address" | translate}}? </ion-label>\n\n                    <ion-checkbox [(ngModel)]="form.shipping" name="shipping" checked="false"> </ion-checkbox>\n\n                 </ion-item>\n\n            </div>\n\n\n\n            <div *ngIf="form.shipping" class="same-for-shipping-form">\n\n                <ion-list class="shipping-address-list">\n\n                    <ion-item class="side-heading-background">\n\n                        <ion-label color="side-heading-color">{{"Shipping Address" | translate}} </ion-label>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>{{"First Name" | translate}} </ion-label>\n\n                        <ion-input required type="text" [(ngModel)]="form.shipping_first_name" name="first_name"> </ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>{{"Last Name"| translate}} </ion-label>\n\n                        <ion-input required type="text" [(ngModel)]="form.shipping_last_name" name="last_name"> </ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>{{"Street Address" | translate}}</ion-label>\n\n                        <ion-input required type="text" [(ngModel)]="form.shipping_address_1" name="address_1"> </ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>{{"Apartment" | translate}}, {{"suite" | translate}}, {{"unit" | translate}} {{"etc" | translate}}</ion-label>\n\n                        <ion-input required type="text" [(ngModel)]="form.shipping_address_2" name="address_2"> </ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>{{"City" | translate}} </ion-label>\n\n                        <ion-input required type="text" [(ngModel)]="form.shipping_city" name="shipping_city"> </ion-input>\n\n                    </ion-item>\n\n                     <ion-item>\n\n                        <ion-label floating>{{"Postcode" | translate}} </ion-label>\n\n                        <ion-input required type="text" [(ngModel)]="form.shipping_postcode" name="shipping_postcode"> </ion-input>\n\n                    </ion-item>\n\n                    \n\n                    <ion-item>\n\n                        <ion-label> {{"Country" | translate}} </ion-label>\n\n                        <ion-select [(ngModel)]="form.shipping_country" (ngModelChange)="getRegion(form.shipping_country)" name="shipping_country">\n\n                            <div *ngFor="let field of form.country.countries | keys">\n\n                                <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span> </ion-option>\n\n                            </div>\n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n                    <ion-item *ngIf="states">\n\n                        <ion-label> {{"State" | translate}} </ion-label>\n\n                        <ion-select [(ngModel)]="form.shipping_state" name="form.shipping_state">\n\n                            <div *ngFor="let field of states | keys">\n\n                                <ion-option value="{{field.key}}">{{field.value}} </ion-option>\n\n                            </div>\n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n                    <ion-item *ngIf="!states">\n\n                        <ion-label floating>{{form.checkout_fields?.shipping?.shipping_state?.label}} </ion-label>\n\n                        <ion-input required type="text" [(ngModel)]="form.shipping_state" name="form.shipping_state"> </ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n\n\n            <div class="comment">\n\n                <ion-label>{{"Order notes" | translate}}</ion-label>\n\n                <textarea rows="4" required type="text" [(ngModel)]="form.order_comments" name="order_comments" placeholder="{{\'Notes about your order,e.g special notes for delivery\' | translate}}"></textarea>\n\n            </div>\n\n        </form>\n\n    </div>\n\n\n\n    <div *ngIf="OrderReview?.shipping" class="shipping">\n\n      <div no-margin text-wrap radio-group [(ngModel)]="OrderReview.chosen_shipping" (ngModelChange)="updateOrderReview()">\n\n          <ion-item class="side-heading-background payment-method-header" no-lines>\n\n            <ion-label color="side-heading-color">{{"Select a shipping method" | translate}}\n\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item *ngFor="let method of OrderReview.shipping | keys" style="padding-left:20px">\n\n            <ion-label><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost  | currency:values.currency:true:\'1.2-2\'}}</span></ion-label>           \n\n            <ion-radio value="{{method.value.id}}">\n\n            </ion-radio>\n\n          </ion-item>\n\n      </div>\n\n    </div>\n\n\n\n    <!--div *ngIf="OrderReview?.shipping" class="shipping">\n\n        <div *ngFor="let package of OrderReview.shipping">\n\n          <div no-margin text-wrap radio-group [(ngModel)]="package.chosen_method" (ngModelChange)="updateOrderReview()">\n\n              <ion-item class="side-heading-background payment-method-header" no-lines>\n\n                <ion-label color="side-heading-color">{{package.package_name}}\n\n                </ion-label>\n\n              </ion-item>\n\n              <ion-item *ngFor="let method of package.shipping | keys" style="padding-left:20px">\n\n                <ion-label><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost  | currency:values.currency:true:\'1.2-2\'}}</span></ion-label>           \n\n                <ion-radio value="{{method.value.id}}">\n\n                </ion-radio>\n\n              </ion-item>\n\n          </div>\n\n        </div>\n\n    </div-->\n\n      \n\n    <ion-list *ngIf="OrderReview?.cart" class="order-review">\n\n        <ion-item class="side-heading-background order-review-header" no-lines>\n\n            <ion-label color="side-heading-color">{{"Your Orders" | translate}} </ion-label>\n\n        </ion-item>\n\n\n\n        <div *ngFor="let item of OrderReview.cart.cart_contents | keys">\n\n            <ion-row>\n\n                <ion-col class="col75">\n\n                    <ion-label [innerHTML]="item.value.name"> - ({{item.value.quantity}}) </ion-label>\n\n                </ion-col>\n\n                <ion-col text-end class="col25">\n\n                    <ion-label>{{1*item.value.line_subtotal | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n\n\n        <div *ngIf="OrderReview.totals.discount_total && OrderReview.totals.discount_total != 0">\n\n            <ion-row>\n\n                <ion-col class="col75">\n\n                    <ion-label>{{"Coupon" | translate}} </ion-label>\n\n                </ion-col>\n\n                <ion-col class="col25" text-end>\n\n                    <ion-label> - {{1*OrderReview.totals.discount_total | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n\n\n        <ion-row>\n\n            <ion-col class="col75">\n\n                <ion-label>{{"SubTotal" | translate}} </ion-label>\n\n            </ion-col>\n\n            <ion-col class="col25" text-end>\n\n                <ion-label>{{1*OrderReview.totals.subtotal | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="OrderReview.totals.cart_contents_total != 0">\n\n            <ion-col class="col75">\n\n                <ion-label>{{"Subtotal_ex_tax" | translate}} </ion-label>\n\n            </ion-col>\n\n            <ion-col class="col25" text-end>\n\n                <ion-label>{{1*OrderReview.totals.cart_contents_total | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="OrderReview.totals.total_tax != 0">\n\n            <ion-col class="col75">\n\n                <ion-label>{{"Tax Total" | translate}} </ion-label>\n\n            </ion-col>\n\n            <ion-col class="col25" text-end>\n\n                <ion-label>{{1*OrderReview.totals.total_tax | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="OrderReview.totals.shipping_total != 0">\n\n            <ion-col width-75>\n\n              <ion-label>{{"Shipping" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-end>\n\n              <ion-label>{{1*OrderReview.totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="OrderReview.totals.fee_total != 0">\n\n            <ion-col width-75>\n\n              <ion-label>{{"Fee" | translate}}\n\n              </ion-label>\n\n            </ion-col>\n\n            <ion-col width-25 text-end>\n\n              <ion-label>{{1*OrderReview.totals.fee_total | currency:values.currency:true:\'1.2-2\'}}\n\n              </ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col class="col75">\n\n                <ion-label style="font-size: 16px;"> <b>{{"Total" | translate}}</b> </ion-label>\n\n            </ion-col>\n\n            <ion-col class="col25" text-end>\n\n                <ion-label style="font-size: 16px;"> <b>{{1*OrderReview.totals.total | currency:values.currency:symbol:\'1.2-2\'}}</b> </ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n\n\n    <ion-item class="side-heading-background payment-method-header" no-lines>\n\n        <ion-label color="side-heading-color">{{"Select Payment Method" | translate}} </ion-label>\n\n    </ion-item>\n\n    <div *ngIf="form.payment">\n\n        <ion-list no-margin text-wrap radio-group [(ngModel)]="form.payment_method" (ngModelChange)="changePayment()">\n\n            <ion-item *ngFor="let method of form.payment | keys">\n\n                <ion-label class="payment-method-title">{{method.value.title}} </ion-label>\n\n                <ion-radio value="{{method.value.id}}"> </ion-radio>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <div *ngIf="form.payment_method != \'stripe\'" class="side-heading-background">\n\n            <ion-label class="payment-instructions">{{form.payment_instructions}} </ion-label>\n\n\n\n            <ion-row class="check-box-bottom" style="margin-top:0" *ngIf="form.show_terms">\n\n              <ion-col no-lines class="col1">\n\n                  <ion-checkbox checked="true" [(ngModel)]="form.terms" name="terms"> </ion-checkbox>\n\n              </ion-col>\n\n              <ion-col class="col2">\n\n                  <ion-label>{{"I Agree" | translate}} <a  (click)="terms()">{{"Terms & Conditions" | translate}}</a> </ion-label>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <div class="button-margin"> \n\n            <button ion-button color="button-color" text-uppercase [disabled]="buttonSubmit" block secondary type="submit" class="button button-block button-default" (click)="checkout()">{{PlaceOrder | translate}}\n\n               </button>\n\n            </div>\n\n        </div>\n\n   \n\n\n\n    <div *ngIf="form.payment_method ==\'stripe\'" class="side-heading-background stripe-payment">\n\n        <ion-label [innerHTML]="form.payment.stripe.description"> </ion-label>\n\n        <form #f="ngForm">\n\n            <ion-list no-margin>\n\n                <ion-item class="side-heading-background">\n\n                    <ion-label color="side-heading-color">Stripe Card Details </ion-label>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>{{"Card Number" | translate}} </ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.stripe_number" name="stripe_number"> </ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>{{"Expiry Month" | translate}} (MM) </ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.stripe_exp_month" name="stripe_exp_year"> </ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>{{"Expiry Year" |translate}} (YYYY) </ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.stripe_exp_year" name="stripe_exp_year"> </ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>{{"Card Code" | translate}} </ion-label>\n\n                    <ion-input required type="text" [(ngModel)]="form.stripe_code" name="stripe_code"> </ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n        </form>\n\n        <ion-row class="check-box-bottom" style="margin-top:0" *ngIf="form.show_terms">\n\n          <ion-col no-lines class="col1">\n\n              <ion-checkbox checked="true" [(ngModel)]="form.terms" name="terms"> </ion-checkbox>\n\n          </ion-col>\n\n          <ion-col class="col2">\n\n              <ion-label>{{"I Agree" | translate}} <a  (click)="terms()">{{"Terms & Conditions" | translate}}</a> </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</div>\n\n        <div class="button-margin"> \n\n            <button ion-button color="button-color" text-uppercase *ngIf="form.payment_method ==\'stripe\'" [disabled]="buttonSubmit" (click)="checkout()" block secondary type="submit" class="button button-block button-default">{{PlaceOrder | translate}}\n\n            </button> \n\n        </div>\n\n <br> <br></ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\checkout\billing-address-form\billing-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */]])
    ], BillingAddressForm);
    return BillingAddressForm;
}());

//# sourceMappingURL=billing-address-form.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutService = /** @class */ (function () {
    function CheckoutService(http, config) {
        this.http = http;
        this.config = config;
    }
    CheckoutService.prototype.updateOrderReview = function (form, shipping) {
        var _this = this;
        console.log("UpdateOrderReview", form);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("security", form.nonce.update_order_review_nonce);
        params.append("payment_method", form.payment_method);
        params.append("address", form.billing_address_1);
        params.append("address_2", form.billing_address_2);
        params.append("city", form.billing_city);
        params.append("postcode", form.billing_postcode);
        params.append("country", form.billing_country);
        params.append("state", form.billing_state);
        params.append("s_address", form.billing_address_1);
        params.append("s_address_2", form.billing_address_2);
        params.append("s_city", form.billing_city);
        params.append("s_postcode", form.billing_postcode);
        params.append("s_country", form.billing_country);
        params.append("s_state", form.billing_state);
        params.append("shipping_method[0]", shipping);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkout = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("order_comments", form.order_comments);
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        if (form.shipping) {
            params.append("ship_to_different_address", "1");
        }
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveBillingAddress = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.nonce.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("createaccount", form.billing_address_1);
        params.append("account_password", form.billing_address_2);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", "544bcd0d1d");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveShippingAddress = function (shipping) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping[firstname]", shipping.firstname);
        params.append("shipping[lastname]", shipping.lastname);
        params.append("shipping[company]", shipping.company);
        params.append("shipping[street][0]", shipping.street1);
        params.append("shipping[street][1]", shipping.street2);
        params.append("shipping[city]", shipping.city);
        params.append("shipping[postcode]", shipping.postcode);
        params.append("shipping[country_id]", shipping.country_id);
        params.append("shipping[state_id]", shipping.state_id);
        if (shipping.entity_id) {
            params.append("shipping_address_id", shipping.entity_id);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getShippingPayment = function () {
        var _this = this;
        if (this.shippingMethods && this.paymentMethods) {
            return Promise.resolve(this.shippingMethods);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingMethods = data[0];
                _this.paymentMethods = data[1];
                resolve(_this.shippingMethods);
            });
        });
    };
    CheckoutService.prototype.saveMethods = function (shippingMethod, payment) {
        var _this = this;
        var shipping = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        shipping.append("shipping_method", shippingMethod);
        for (var param in payment) {
            params.set("payment[" + param + "]", payment[param]);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', params, _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingStatus = data[0];
                _this.paymentStatus = data[1];
                resolve(_this.shippingStatus);
            });
        });
    };
    CheckoutService.prototype.getTime = function (date) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_slots_on_date");
        params.append("date", date);
        console.log(params);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getDate = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_upcoming_bookable_dates");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.login = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", form.username);
        params.append("password", form.password);
        params.append("_wpnonce", form.checkout_login);
        params.append("login", "Login");
        params.append("_wp_http_referer", "/checkout/");
        params.append("redirect", this.config.url + "/wp-admin/admin-ajax.php?action=mstoreapp-userdata");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout/', params, _this.config.options)
                .subscribe(function (data) {
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.status = data;
                    resolve(_this.status);
                });
            });
        });
    };
    CheckoutService.prototype.submitCoupon = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", form.coupon_code);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getStripeToken = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("key", form.payment.stripe.publishable_key);
        params.append("payment_user_agent", 'stripe.js/6ea8d55');
        params.append("card[number]", form.stripe_number);
        params.append("card[cvc]", form.stripe_code);
        params.append("card[exp_month]", form.stripe_exp_month);
        params.append("card[exp_year]", form.stripe_exp_year);
        params.append("card[name]", form.billing_first_name + form.billing_last_name);
        params.append("card[address_line1]", form.billing_address_1);
        params.append("card[address_line2]", form.billing_address_2);
        params.append("card[address_state]", form.billing_state);
        params.append("card[address_city]", form.billing_city);
        params.append("card[address_zip]", form.billing_postcode);
        params.append("card[address_country]", form.billing_country);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/tokens', params, _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(err.json()); });
        });
    };
    CheckoutService.prototype.stripePlaceOrder = function (form, token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("order_comments", form.order_comments);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("wc-stripe-payment-token", 'new');
        params.append("stripe_token", token.id);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getOrderSummary = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders/' + id + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orderSummary = data;
                resolve(_this.orderSummary);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
var Config = /** @class */ (function () {
    function Config() {
        this.url = 'http://cirung.com'; //'URL_PLACEHOLDER';
        this.consumerKey = 'ck_abe48508d96457b30561a80c04bf0597fa1957a6'; //'CONSUMER_KEY_PLACEHOLDER';
        this.consumerSecret = 'cs_9fcacf138c89e66dd1abd2e9404b71973e45bc39'; //'CONSUMER_SECRET_PLACEHOLDER';
        this.options = {};
        this.optionstwo = {};
        this.options.withCredentials = true;
        this.options.headers = headers;
        this.optionstwo.withCredentials = false;
        this.optionstwo.headers = headers;
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    Config.prototype.setOauthNonce = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    Config.prototype.setUrl = function (method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
        }
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsCondition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsCondition = /** @class */ (function () {
    function TermsCondition(nav, params) {
        this.nav = nav;
        this.terms = params.data;
    }
    TermsCondition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\checkout\terms-condition\terms-condition.html"*/'<ion-header>\n\n   <ion-navbar color="header">\n\n        <ion-title>{{"Terms & Conditions" | translate}}\n\n        </ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="terms-condition">\n\n   \n\n    <div class="terms">\n\n   		<p [innerHTML]="terms"></p>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\checkout\terms-condition\terms-condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TermsCondition);
    return TermsCondition;
}());

//# sourceMappingURL=terms-condition.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewPage = /** @class */ (function () {
    function ReviewPage(nav, service, params, functions, values, toastCtrl) {
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.toastCtrl = toastCtrl;
        this.form = {};
        this.buttonSubmitLogin = false;
        this.showAddReview = false;
        this.count5 = 0;
        this.count4 = 0;
        this.count3 = 0;
        this.count2 = 0;
        this.count1 = 0;
        this.count5Percentage = '0' + '%';
        this.count4Percentage = '0' + '%';
        this.count3Percentage = '0' + '%';
        this.count2Percentage = '0' + '%';
        this.count1Percentage = '0' + '%';
        this.id = params.data.id;
        this.name = params.data.name;
        this.count = params.data.count;
        this.rating = params.data.rating;
        this.form.rating = 5;
        this.handleReview(params.data.reviews);
    }
    ReviewPage.prototype.handleReview = function (reviews) {
        var _this = this;
        this.reviews = reviews;
        console.log(this.reviews);
        this.reviews.forEach(function (review) {
            review.avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(review.email);
            if (review.rating == 5) {
                _this.count5 = _this.count5 + 1;
            }
            if (review.rating == 4) {
                _this.count4 = _this.count4 + 1;
            }
            if (review.rating == 3) {
                _this.count3 = _this.count3 + 1;
            }
            if (review.rating == 2) {
                _this.count2 = _this.count2 + 1;
            }
            if (review.rating == 1) {
                _this.count1 = _this.count1 + 1;
            }
        });
        // this.count5 = ((this.count5 / this.count)*100);
        this.count5Percentage = ((this.count5 / this.count) * 100) + '%';
        // this.count4 = ((this.count4 / this.count)*100);
        this.count4Percentage = ((this.count4 / this.count) * 100) + '%';
        // this.count3 = ((this.count3 / this.count)*100);
        this.count3Percentage = ((this.count3 / this.count) * 100) + '%';
        //  this.count2 = ((this.count2 / this.count)*100) + '%';
        this.count2Percentage = this.count2 + '%';
        // this.count1 = ((this.count1 / this.count)*100) + '%';
        this.count1Percentage = this.count1 + '%';
    };
    ReviewPage.prototype.dismiss = function () {
        this.nav.pop();
    };
    ReviewPage.prototype.yourRating = function (rating) {
        this.form.rating = rating;
    };
    ReviewPage.prototype.submitComment = function () {
        var _this = this;
        this.form.id = this.id;
        if (this.validate()) {
            this.buttonSubmitLogin = true;
            this.service.submitComment(this.form).then(function (results) {
                _this.status = results;
                _this.buttonSubmitLogin = false;
                _this.functions.showAlert("Success", "Thank you for your review! Your review is awaiting approval");
            });
        }
    };
    ReviewPage.prototype.validate = function () {
        if (!this.values.isLoggedIn) {
            if (this.form.author == undefined || this.form.author == "") {
                this.functions.showAlert("ERROR", "Please Enter Name");
                return false;
            }
            if (this.form.email == undefined || this.form.email == "") {
                this.functions.showAlert("ERROR", "Please Enter Email");
                return false;
            }
        }
        if (this.form.comment == undefined || this.form.comment == "") {
            this.functions.showAlert("ERROR", "Please Enter Comment");
            return false;
        }
        else
            return true;
    };
    ReviewPage.prototype.showSubmitReview = function () {
        if (this.showAddReview)
            this.showAddReview = false;
        else
            this.showAddReview = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ReviewPage.prototype, "content", void 0);
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <ion-title>{{"Rating & Feedback" | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">\n\n        <ion-icon name="md-close" style="color: #111; font-size: 20px; margin: 16px;"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar> \n\n</ion-header>\n\n\n\n<ion-content class="review-page">\n\n  <div class="spinner"><ion-spinner *ngIf="!reviews" name="ios-small"></ion-spinner></div>\n\n  \n\n  <div *ngIf="reviews">\n\n    <div class="review-info">\n\n      <ion-row>\n\n        <ion-col style="border-right: 1px solid #f1f1f1;max-width:36%">\n\n          <h2 *ngIf="rating">{{rating  | number : \'1.1-1\'}}<span style="font-size: 15px; color: #999">/5</span></h2>\n\n          <h2 *ngIf="!rating">0<span style="font-size: 15px; color: #999">/5</span></h2>\n\n          <h3 style="font-size:15px">\n\n            <span class="rating">\n\n              <span class="star-icon" [ngClass]="{full: rating >= 1, half: rating == 0.5}">&#x2605;</span>\n\n              <span class="star-icon" [ngClass]="{full: rating >= 2, half: rating == 1.5}">&#x2605;</span>\n\n              <span class="star-icon" [ngClass]="{full: rating >= 3, half: rating == 2.5}">&#x2605;</span>\n\n              <span class="star-icon" [ngClass]="{full: rating >= 4, half: rating == 3.5}">&#x2605;</span>\n\n              <span class="star-icon" [ngClass]="{full: rating >= 5, half: rating == 4.5}">&#x2605;</span>\n\n            </span>\n\n          </h3>\n\n          <h3 style="margin-top: 0px;">\n\n            <span style="font-size: 14px;">{{count}} {{"Ratings" | translate}}</span>\n\n          </h3>\n\n        </ion-col>\n\n\n\n        <ion-col class="review-star-group">\n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n                <span class="rating review-star">\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count5Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count5 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n          \n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n                 <span class="rating review-star">\n\n                   <span class="star-icon full">&#x2605;</span>\n\n                   <span class="star-icon full">&#x2605;</span>\n\n                   <span class="star-icon full">&#x2605;</span>\n\n                   <span class="star-icon full">&#x2605;</span>\n\n                   <span class="star-icon">&#x2605;</span>\n\n                 </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count4Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count4 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n                <span class="rating review-star">\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                 </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count3Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count3 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n               <span class="rating review-star">\n\n                 <span class="star-icon full">&#x2605;</span>\n\n                 <span class="star-icon full">&#x2605;</span>\n\n                 <span class="star-icon">&#x2605;</span>\n\n                 <span class="star-icon">&#x2605;</span>\n\n                 <span class="star-icon">&#x2605;</span>\n\n               </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count2Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count2 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n          <ion-row>\n\n            <ion-col style="max-width:35%">\n\n              <h3 style="margin-top:6px;">\n\n                <span class="rating review-star">\n\n                  <span class="star-icon full">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                  <span class="star-icon">&#x2605;</span>\n\n                </span>\n\n              </h3>\n\n            </ion-col>\n\n            <ion-col style="max-width:45%">\n\n              <div class="progress-bar" item-right>\n\n                <span [style.width]="count1Percentage"></span>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col style="max-width:20%">\n\n              <h4 item-right>\n\n                <span>{{count1 | number : \'1.0-0\'}}</span>\n\n              </h4>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <ion-card>\n\n      <div class="devider"></div>\n\n      <ion-card-header tappable>\n\n        {{"Add a review" | translate}}\n\n        <!--ion-icon *ngIf="!showAddReview" style="float: right" name="ios-arrow-down" item-right></ion-icon-->\n\n        <!--ion-icon *ngIf="showAddReview" style="float: right" name="ios-arrow-up" item-right></ion-icon-->\n\n      </ion-card-header>\n\n\n\n      <ion-card-content class="new-review">\n\n          <ion-label style="margin: 10px 0 6px 26px; font-size:13px">{{form.name}}\n\n            <span style="margin-right: 10px" text-uppercase>{{"Your Rating" | translate}}</span>\n\n            <span class="rating">\n\n              <span tappable (click)="yourRating(1)" class="star-icon" [ngClass]="{full: form.rating >= 1, half: form.rating == 0.5}">&#x2605;</span>\n\n              <span tappable (click)="yourRating(2)" class="star-icon" [ngClass]="{full: form.rating >= 2, half: form.rating == 1.5}">&#x2605;</span>\n\n              <span tappable (click)="yourRating(3)" class="star-icon" [ngClass]="{full: form.rating >= 3, half: form.rating == 2.5}">&#x2605;</span>\n\n              <span tappable (click)="yourRating(4)" class="star-icon" [ngClass]="{full: form.rating >= 4, half: form.rating == 3.5}">&#x2605;</span>\n\n              <span tappable (click)="yourRating(5)" class="star-icon" [ngClass]="{full: form.rating >= 5, half: form.rating == 4.5}">&#x2605;</span>\n\n            </span>\n\n          </ion-label>\n\n\n\n          <div class="comment-form">\n\n            <form #f="ngForm">\n\n              <ion-list>\n\n                <ion-item *ngIf="!values.isLoggedIn">\n\n                  <ion-input required type="text" [(ngModel)]="form.author" name="name" placeholder="{{\'Name\' | translate}}">\n\n                  </ion-input>\n\n                </ion-item>\n\n                <ion-item *ngIf="!values.isLoggedIn">\n\n                  <ion-input required type="email" [(ngModel)]="form.email" name="email" placeholder="{{\'Email\' | translate}}">\n\n                  </ion-input>\n\n                </ion-item>\n\n                <ion-item class="comment-area">\n\n                  <textarea rows="2" style="width: 100%; border: none;" required type="text" [(ngModel)]="form.comment" name="comment" placeholder="{{\'Comment\' | translate}}">\n\n                  </textarea>\n\n                </ion-item>\n\n              </ion-list> \n\n              <div class="login-button">\n\n                <button style="margin: 16px 16px 0 16px;width: calc(100% - 32px);" ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="submitComment()">{{"Submit" | translate}}\n\n                </button> \n\n              </div>\n\n            </form>\n\n          </div>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n    <ion-card *ngIf="reviews.length">\n\n      <div class="devider"></div>\n\n      <ion-card-header>\n\n        {{"Feedbacks" | translate}}\n\n      </ion-card-header>\n\n\n\n      <ion-card-content>\n\n        <div  *ngFor="let item of reviews" class="reviews">\n\n          <ion-item no-lines>\n\n            <ion-avatar item-start style="margin:8px">\n\n              <img src="https://www.gravatar.com/avatar/{{item.avatar}}">\n\n            </ion-avatar>\n\n            <h3 style="margin-bottom:6px;font-size:15px">{{item.name}}\n\n              <span class="rating review-star">\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span>\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span>\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span>\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span>\n\n                <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span>\n\n              </span>\n\n            </h3>\n\n      \n\n            <h3 style="color:#9e9898;margin-bottom:4px;font-size: 13px">{{item.date_created | date:\'MMM d, y hh:mm a\'}}\n\n            </h3>\n\n          </ion-item>\n\n          <p text-wrap>{{item.review}}</p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_filter__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort_sort__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SearchPage = /** @class */ (function () {
    function SearchPage(iab, toastCtrl, modalCtrl, nav, service, values, params, functions) {
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.shouldShowCancel = true;
        this.loading = false;
        this.showSearch = true;
        this.filter = {};
        this.filter.status = 'publish';
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.searchInput = "";
        this.filter.page = 1;
    }
    SearchPage.prototype.ionViewWillLeave = function () {
        this.showSearch = false;
    };
    SearchPage.prototype.ionViewDidLeave = function () {
        this.showSearch = true;
    };
    SearchPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.loading = true;
        this.filter.page = 1;
        this.filter.search = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch(this.filter).then(function (results) {
            _this.loading = false;
            _this.products = results;
        });
    };
    SearchPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    SearchPage.prototype.external = function (url) {
        var options = "location=yes,hidden=no,toolbar=yes";
        var browser = this.iab.create(url, '_blank', options);
        browser.show();
    };
    SearchPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getSearch(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    SearchPage.prototype.updateCart = function (a) { };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    SearchPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    SearchPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'top'
        });
        toast.present();
    };
    SearchPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    SearchPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    SearchPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    SearchPage.prototype.getFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__filter_filter__["a" /* Filter */], { filter: this.filter });
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.getSearch(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    SearchPage.prototype.getSort = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__sort_sort__["a" /* Sort */], { filter: this.filter });
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.getSearch(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    SearchPage.prototype.handleFilterResults = function (results) {
        this.products = results;
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\search\search.html"*/'<ion-header>\n\n    <ion-navbar color="header"> \n\n        <button ion-button menuToggle>\n\n           <ion-icon name="menu">\n\n           </ion-icon>\n\n        </button>\n\n        <ion-searchbar *ngIf="showSearch" placeholder="{{\'search\' | translate}}" [(ngModel)]="searchInput" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"> </ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="search-page">\n\n    <div class="spinner center-spinner"><ion-spinner *ngIf="loading" name="crescent"> </ion-spinner></div>\n\n\n\n    <div *ngIf="products" class="products-listing">\n\n        <div *ngIf="!products.length" class="no-products">\n\n            <h2>{{"No products found!" | translate}}</h2>\n\n        </div>\n\n\n\n        <div *ngIf="products.length">\n\n            <ion-item no-lines class="item-name"> \n\n                <button ion-button icon-only clear color="icon-color" (click)="getSort()">\n\n                    <ion-icon name="md-options"></ion-icon> {{"Sort" | translate}}\n\n                </button> \n\n                <button ion-button icon-only item-right clear color="icon-color" *ngIf="values.listview" (click)="setGridView()">\n\n                    <ion-icon name="md-grid">\n\n                    </ion-icon>\n\n                </button> \n\n                <button ion-button icon-only item-right clear color="icon-color" *ngIf="!values.listview" (click)="setListView()">\n\n                    <ion-icon name="md-list-box">\n\n                    </ion-icon>\n\n                </button> \n\n                <button ion-button icon-only item-right clear color="icon-color" (click)="getFilter()">\n\n                    <ion-icon name="ios-funnel"></ion-icon>\n\n                </button>\n\n            </ion-item>\n\n\n\n             <div *ngIf="values.listview">\n\n                    <div class="item-list" *ngFor="let item of products">\n\n                        <ion-item class="left-padding" no-lines style="padding-right: 0 !important">\n\n                            <ion-thumbnail item-left> \n\n                                <img [style.height.rem]="values.dimensions.imageListViewHeight" tappable *ngIf="item.images.length" src="{{item?.images[0]?.src}}" (click)="getProduct(item)">\n\n                            <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable *ngIf="!item.images.length" src="assets/image/500.png" (click)="getProduct(item)">\n\n                                <!--button class="no-stock-button" ion-button *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                                </button--> \n\n\n\n                                <div *ngIf="item.stock_status == \'instock\'">\n\n                                <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                                </div>\n\n\n\n                            </ion-thumbnail>\n\n                            <div class="product-name-top">\n\n                                <div class="product-label">\n\n                                    <div tappable (click)="getProduct(item)" class="max-lines">\n\n                                        <h2 *ngIf="item.title">{{item.title}} </h2>\n\n                                        <h2 *ngIf="item.name">{{item.name}} </h2>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n\n\n                            <div> \n\n                                <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                </span> \n\n                                <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                </span>\n\n                                <span class="price-delete" *ngIf="item.sale_price">\n\n                                    <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                    </del>\n\n                                </span> \n\n                            </div>\n\n\n\n                            <h3 style="font-size:11px; margin: 3px 0"> \n\n                                <span class="rating review-star">\n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> \n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span> \n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> \n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span> \n\n                                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> \n\n                                </span>\n\n                            </h3>\n\n\n\n                            <div class="bottom-right-button" *ngIf="item.type == \'external\'">\n\n                                <button ion-button text-uppercase color="button-color" item-right outline style="margin-right: 20px; border: 0; font-size: 14px" (click)="external(item.external_url)">\n\n                                {{"Buy Now"  | translate}}\n\n                                </button> \n\n                            </div>\n\n\n\n                            <div class="bottom-right-button" *ngIf="item.type != \'external\'"> \n\n                                <button ion-button [disabled]="item.stock_status == \'outofstock\'" text-uppercase color="button-color" item-right outline style="margin-right: 20px; border: 0; font-size: 14px" *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">{{"Add"  | translate}}\n\n                                </button> \n\n                                <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n\n                                    <ion-icon name="md-remove">\n\n                                    </ion-icon>\n\n                                </button> \n\n                                <button ion-button item-right color="button-color" clear style="border: 0;" *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                                </button> \n\n                                <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n\n                                    <ion-icon name="md-add">\n\n                                    </ion-icon>\n\n                                </button> \n\n                            </div>\n\n\n\n                            <div width-20 class="bottom-left-button">\n\n                                <ion-icon name="md-heart" class="wishlist-button-fill" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                                <ion-icon name="md-heart-outline" class="wishlist-button" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                            </div>\n\n                        </ion-item>\n\n                    </div>\n\n                </div>\n\n\n\n                <div *ngIf="!values.listview">\n\n                    <div class="grid">\n\n                        <ion-row class="row unlimited-items">\n\n                            <ion-col class="col" *ngFor="let item of products">\n\n                                <ion-card>\n\n                                    <ion-card-content>\n\n                                        <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable *ngIf="item.images.length" src="{{item?.images[0]?.src}}" (click)="getProduct(item)">\n\n                            <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable *ngIf="!item.images.length" src="assets/image/500.png" (click)="getProduct(item.id)">\n\n                                        <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                                        </button>\n\n\n\n                                        <div *ngIf="item.stock_status == \'instock\'">\n\n                                        <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                                        </div>\n\n\n\n                                        <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                                        <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                                    </ion-card-content>\n\n\n\n                                    <div tappable (click)="getProduct(item)" class="card-name">\n\n                                        <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                                        <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n                                    </div>\n\n\n\n                                    <h3 style="font-size:11px; margin: 3px 0"> \n\n                                        <span class="rating review-star">\n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span> \n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span>                        \n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span> \n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span>                        \n\n                                            <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span> \n\n                                        </span>\n\n                                    </h3>\n\n\n\n                                    <ion-label> \n\n                                        <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                        </span> \n\n                                        <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                        </span>\n\n                                        <span class="price-delete" *ngIf="item.sale_price">\n\n                                            <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                            </del>\n\n                                        </span> \n\n                                    </ion-label>\n\n\n\n                                    <!--div class="add-remove-button" *ngIf="item.type == \'external\'">\n\n                                    <button ion-button text-uppercase color="button-color" item-right clear style="border: 0;" (click)="external(item.external_url)">\n\n                                    {{"Buy Now"  | translate}}\n\n                                    </button> \n\n                                    </div>\n\n\n\n                                    <div class="add-remove-button" *ngIf="item.type != \'external\'"> \n\n                                        <button ion-button [disabled]="item.stock_status == \'outofstock\'" text-uppercase color="button-color" item-right clear style="border: 0;" *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n\n                                          {{"Add"  | translate}}\n\n                                        </button> \n\n                                        <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n\n                                           <ion-icon name="md-remove">\n\n                                           </ion-icon>\n\n                                        </button> \n\n                                        <button ion-button item-right color="button-color" style="border: 0; margin: 0 10px;" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n\n                                        </button> \n\n                                        <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n\n                                           <ion-icon name="md-add">\n\n                                           </ion-icon>\n\n                                        </button> \n\n                                    </div-->\n\n                                </ion-card>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </div>\n\n                </div>\n\n        </div>\n\n\n\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n            <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading More Items\' | translate}}"> </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n        \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = /** @class */ (function () {
    function SearchService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    SearchService.prototype.getSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', filter), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    SearchService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.updateToCart = function (id) {
        var _this = this;
        console.log(this.values.cartNonce);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotten; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountForgotten = /** @class */ (function () {
    function AccountForgotten(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.Reset = "Reset";
        this.loadForgotten = null;
        this.forgottenData = [];
        this.service.passwordResetNonce()
            .then(function (results) { return _this.handleNonce(results); });
    }
    AccountForgotten.prototype.forgotten = function (email) {
        var _this = this;
        if (this.validateForm()) {
            this.Reset = "Resetting";
            this.disableSubmit = true;
            this.service.passwordreset(email, this.nonce, this.url)
                .then(function (results) { return _this.handleResult(results, email); });
        }
    };
    AccountForgotten.prototype.validateForm = function () {
        if (this.forgottenData.email == undefined || this.forgottenData.email == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountForgotten.prototype.handleNonce = function (results) {
        this.nonce = results.nonce;
        this.url = results.url;
    };
    AccountForgotten.prototype.handleResult = function (results, email) {
        this.Reset = "Reset";
        this.disableSubmit = false;
        this.functions.showAlert("SUCCESS", "An email with password reset link has been sent to your mail address " + email);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* AccountLogin */]);
    };
    AccountForgotten = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\forgotten\forgotten.html"*/'<ion-header class="forgot-header">\n\n  <ion-navbar color="header">\n\n    <ion-title>{{"Forgot Password" | translate}} \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="forgotten">\n\n  <div class="margin">\n\n    <form #f="ngForm">\n\n      <ion-item>\n\n        <ion-input required type="email" [(ngModel)]="forgottenData.email" name="email" placeholder="{{\'Enter Email Address\' | translate}}">\n\n        </ion-input>\n\n      </ion-item>\n\n      <h2>{{"Type in your registered email id in the field and we will send you steps to reset your password" | translate}}\n\n      </h2>\n\n      <button ion-button block color="button-color" class="button button-block button-default" [disabled]="disableSubmit" (click)="forgotten(forgottenData.email)">{{Reset | translate}}\n\n      </button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\forgotten\forgotten.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountForgotten);
    return AccountForgotten;
}());

//# sourceMappingURL=forgotten.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_address__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditAddressForm = /** @class */ (function () {
    function EditAddressForm(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping_true = true;
        this.service.getCountry()
            .then(function (results) { return _this.handleContries(results); });
    }
    EditAddressForm.prototype.handleContries = function (results) {
        this.country = results;
        this.billing_states = this.country.state[this.editAddress.billing.country];
        this.shipping_states = this.country.state[this.editAddress.shipping.country];
    };
    EditAddressForm.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress.shipping_true) {
            this.editAddress.shipping.first_name = this.editAddress.billing.first_name;
            this.editAddress.shipping.last_name = this.editAddress.billing.last_name;
            this.editAddress.shipping.company = this.editAddress.billing.company;
            this.editAddress.shipping.address_1 = this.editAddress.billing.address_1;
            this.editAddress.shipping.address_2 = this.editAddress.billing.address_2;
            this.editAddress.shipping.city = this.editAddress.billing.city;
            this.editAddress.shipping.country = this.editAddress.billing.country;
            this.editAddress.shipping.state = this.editAddress.billing.state;
            this.editAddress.shipping.postcode = this.editAddress.billing.postcode;
        }
        this.service.saveAddress(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditAddressForm.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__address_address__["a" /* Address */]);
    };
    EditAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\edit-address-form\edit-address-form.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu">\n\n      </ion-icon>\n\n    </button>\n\n    <ion-title>{{"Edit Address" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="edit-address-form">\n\n\n\n    <ion-list style="margin-bottom: 20px">\n\n      <ion-item class="side-heading-background">\n\n        <h2 class="heading-label">{{"Billing Address" | translate}}\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"First Name" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.first_name" name="first_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Last Name"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.last_name" name="last_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Phone" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.phone" name="phone">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Email" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="email" [(ngModel)]="editAddress.billing.email" name="email">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 1\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.address_1" name="address_1">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 2\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.address_2" name="address_2">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"City" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.city" name="city">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="country">\n\n        <ion-label>  \n\n          {{"Country" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.billing.country" (ngModelChange)="getBillingRegion(editAddress.billing.country)" name="country">\n\n          <div *ngFor="let field of country.country.countries | keys">\n\n            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="billing_states">\n\n        <ion-label>  \n\n          {{"State" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.billing.state" name="state">\n\n          <div *ngFor="let field of billing_states | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>      \n\n      </ion-item>\n\n      <ion-item *ngIf="!billing_states">\n\n        <ion-label floating>{{"State" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.state" name="state">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item class="post-code">\n\n        <ion-label floating>{{"Postcode" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.postcode" name="postcode">\n\n        </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  <ion-item class="side-heading-background">\n\n    <ion-label class="heading-label">{{"Same For Shipping" | translate}}\n\n    </ion-label>\n\n    <ion-toggle checked="true" [(ngModel)]="editAddress.shipping_true" name="subscribe">\n\n    </ion-toggle>\n\n  </ion-item>\n\n  <br>\n\n  <div *ngIf="!editAddress.shipping_true">\n\n    <ion-list>\n\n      <ion-item class="post-code">\n\n        <ion-label floating>{{"First Name" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.first_name" name="firstname">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Last Name"| translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.last_name" name="last_name">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Company" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.company" name="company">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 1\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.address_1" name="address_1">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Street Address" | translate}} 2\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.address_2" name="address_2">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"City" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.city" name="city">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="country">\n\n        <ion-label>  \n\n          {{"Country" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.shipping.country" (ngModelChange)="getShippingRegion(editAddress.shipping.country)" name="country">\n\n          <div *ngFor="let field of country.country.countries | keys">\n\n            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="shipping_states">\n\n        <ion-label>  \n\n          {{"State" | translate}}\n\n        </ion-label>   \n\n        <ion-select [(ngModel)]="editAddress.shipping.state" name="state">\n\n          <div *ngFor="let field of shipping_states | keys">\n\n            <ion-option value="{{field.key}}">{{field.value}}\n\n            </ion-option>\n\n          </div>\n\n        </ion-select>      \n\n      </ion-item>\n\n      <ion-item *ngIf="!shipping_states">\n\n        <ion-label floating>{{"State" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.state" name="state">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"Postcode" | translate}}\n\n        </ion-label>\n\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.postcode" name="postcode">\n\n        </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  \n\n  <div class="margin">\n\n    <button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\edit-address-form\edit-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], EditAddressForm);
    return EditAddressForm;
}());

//# sourceMappingURL=edit-address-form.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Orders = /** @class */ (function () {
    function Orders(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter.customer = this.values.customerId.toString();
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    Orders.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Orders.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.orders.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Orders.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    Orders.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "status": "cancelled"
        }, id).then(function (results) { return _this.handleCancelOrder(results); });
    };
    Orders.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrders(this.filter).then(function (results) { return _this.orders = results; });
    };
    Orders.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "status": "pending"
        }, id).then(function (results) { return _this.handleReOrder(results); });
    };
    Orders.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter).then(function (results) { return _this.orders = results; });
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\orders\orders.html"*/'<ion-header>\n\n    <ion-navbar color="header"> \n\n        <button ion-button menuToggle>\n\n           <ion-icon name="menu">\n\n           </ion-icon>\n\n        </button>\n\n        <ion-title>{{"Last Orders" | translate}} \n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-wrap class="account-order">\n\n    <div class="spinner"><ion-spinner *ngIf="!orders" name="crescent"> </ion-spinner></div>\n\n\n\n    <div *ngIf="orders">\n\n        <div class="no-orders" *ngIf="orders.length == 0">\n\n            <h4 text-center no-lines>\n\n                <ion-icon name="logo-buffer"></ion-icon> \n\n                <button ion-button full clear>{{"There are no orders." | translate}}</button> \n\n            </h4>            \n\n        </div>\n\n\n\n        <div *ngIf="orders.length">\n\n            <div *ngFor="let item of orders" class="order-box">\n\n                <ion-item>\n\n                    <h2> <b>{{"Order Number" | translate}} : </b> {{item.number}} </h2>\n\n                    <h2> <b>{{"Order date" | translate}} : </b> {{item.date_created | date:\'medium\'}} </h2>\n\n                    <h2> <b>{{"Status" | translate}} : </b> {{item.status}} </h2>                   \n\n                    <h2> <b>{{"Total" | translate}} : </b> {{1*item.total }} </h2>\n\n\n\n                    <ion-row class="row-buttons">\n\n                        <ion-col no-padding width-50> \n\n                            <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.id)">\n\n                                <ion-icon name="ios-eye">\n\n                                </ion-icon>\n\n                                {{"View Details" | translate}} \n\n                            </button> \n\n                        </ion-col>\n\n\n\n                        <ion-col no-padding width-50> \n\n                            <button *ngIf="item.status == \'pending\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="cancelOrder(item.id)">    \n\n                                <ion-icon ios="ios-close" md="md-close">\n\n                                </ion-icon>     \n\n                               {{"Cancel" | translate}} \n\n                            </button> \n\n\n\n                            <button *ngIf="item.status == \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="reOrder(item.id)">\n\n                                <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n\n                                </ion-icon>         \n\n                            {{"Reorder" | translate}} \n\n                            </button> \n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-item>\n\n            </div>\n\n            \n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n\n                <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading more items..\' | translate}}"> </ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetails = /** @class */ (function () {
    function OrderDetails(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\order-details\order-details.html"*/'<ion-header>\n\n    <ion-navbar color="header"> \n\n        <button ion-button menuToggle>\n\n           <ion-icon name="menu">\n\n           </ion-icon>\n\n        </button>\n\n        <ion-title>{{"Order Info" | translate}} \n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="order-details">\n\n\n\n    <div class="spinner"><ion-spinner *ngIf="!orderDetails" name="crescent"> </ion-spinner></div>\n\n\n\n    <div *ngIf="orderDetails">\n\n        <ion-item-group>\n\n            <ion-item class="top-details">\n\n                <ion-row>\n\n                    <ion-col class="dull">{{"Order Number" | translate }} </ion-col>\n\n                    <ion-col text-right>{{orderDetails.number}} </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="dull">{{"Date" | translate}} </ion-col>\n\n                    <ion-col text-right>{{orderDetails.date_created | date:\'medium\'}} </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="dull">{{"Payment Method" | translate}} </ion-col>\n\n                    <ion-col text-right>{{orderDetails.payment_method_title}} </ion-col>\n\n                </ion-row>\n\n            </ion-item>\n\n\n\n            <ion-item-divider>{{"Product Details" | translate}}\n\n            </ion-item-divider>\n\n            <ion-item *ngFor="let item of orderDetails.line_items">\n\n                <h2><span class="dull">{{"Product Name" | translate}} :</span> {{item.name}} </h2>\n\n                <h2><span class="dull">{{"Price" | translate}} :</span> {{item.price | currency:values.currency:symbol:\'1.2-2\'}} </h2>\n\n                <h2><span class="dull">{{"Quantity" | translate}} :</span> {{item.quantity}} </h2>\n\n                <h2><span class="dull">{{"SubTotal" | translate}} :</span> {{1*item.subtotal | currency:values.currency:symbol:\'1.2-2\'}} </h2>\n\n            </ion-item>\n\n\n\n            <ion-item-divider>{{"Billing Address" | translate}} </ion-item-divider>\n\n            <ion-item> {{orderDetails.billing.first_name}} {{orderDetails.billing.last_name}}, <br> {{orderDetails.billing.email}} <br> {{orderDetails.billing.phone}} <br> {{orderDetails.billing.address_1}}, <br> {{orderDetails.billing.address_2}}, <br> {{orderDetails.billing.city}}, {{orderDetails.billing.state}} <br> {{orderDetails.billing.postcode}} \n\n            </ion-item>\n\n\n\n            <ion-item-divider>{{"Shipping Address" | translate}} \n\n            </ion-item-divider>\n\n            <ion-item> {{orderDetails.shipping.first_name}} {{orderDetails.shipping.last_name}}, <br> {{orderDetails.shipping.company}} <br> {{orderDetails.shipping.address_1}}, <br> {{orderDetails.shipping.address_2}}, <br> {{orderDetails.shipping.city}}, {{orderDetails.shipping.state}} <br> {{orderDetails.shipping.country}} <br> {{orderDetails.shipping.postcode}} \n\n            </ion-item>\n\n\n\n            <ion-item-divider>{{"Total" | translate}} \n\n            </ion-item-divider>\n\n            <ion-item>\n\n                <ion-row>\n\n                    <ion-col class="dull">{{"SubTotal" | translate}} </ion-col>\n\n                    <ion-col text-right>{{(1*orderDetails.total - 1*orderDetails.shipping_total - 1*orderDetails.total_tax) | currency:values.currency:symbol:\'1.2-2\'}} </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="dull"> {{"Shipping Total" | translate}} </ion-col>\n\n                    <ion-col text-right>{{1*orderDetails.shipping_total | currency:values.currency:symbol:\'1.2-2\'}} </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="dull">{{"Tax Total" | translate}} </ion-col>\n\n                    <ion-col text-right>{{1*orderDetails.total_tax | currency:values.currency:symbol:\'1.2-2\'}} </ion-col>\n\n                </ion-row>\n\n                <ion-row text-uppercase>\n\n                    <ion-col class="dull">{{"Grand Total" | translate}} </ion-col>\n\n                    <ion-col text-right>{{1*orderDetails.total | currency:values.currency:symbol:\'1.2-2\'}} </ion-col>\n\n                </ion-row>\n\n            </ion-item>\n\n        </ion-item-group>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], OrderDetails);
    return OrderDetails;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WishlistPage = /** @class */ (function () {
    function WishlistPage(nav, values, params, functions, service) {
        var _this = this;
        this.nav = nav;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.service = service;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
    }
    WishlistPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    WishlistPage.prototype.updateWish = function (results, id) {
        var _this = this;
        if (results.status == "success") {
            this.service.loadWishlist().then(function (results) { return _this.wishlist = results; });
            this.values.wishlistId.splice(id, 1);
        }
    };
    WishlistPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    WishlistPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], id);
        }
        else {
            this.service.addToCart(id).then(function (results) { return _this.updateCart(results, id); });
        }
    };
    WishlistPage.prototype.updateCart = function (results, id) {
        var _this = this;
        if (results.error) {
            this.functions.showAlert("ERROR", "error");
        }
        else {
            this.service.deleteItem(id).then(function (results) { return _this.updateWishlist(results); });
        }
    };
    WishlistPage.prototype.updateWishlist = function (results) {
        var _this = this;
        this.service.loadWishlist().then(function (results) { return _this.wishlist = results; });
        this.functions.showAlert("SUCCESS", "Item has been added to cart");
    };
    WishlistPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], id);
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\wishlist\wishlist.html"*/'<ion-header class="wishlist-header">\n\n    <ion-navbar color="header"> \n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu">\n\n            </ion-icon>\n\n        </button>\n\n        <ion-title>{{"Wishlist"| translate}} \n\n        </ion-title>\n\n        <ion-buttons end> \n\n            <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n\n               <ion-icon color="icon-color" name="md-basket">\n\n               </ion-icon>\n\n               <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n\n               </ion-badge>\n\n            </button> \n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="wishlistPage">\n\n    <div class="spinner"><ion-spinner *ngIf="!wishlist" name="crescent"> </ion-spinner></div>\n\n    <div *ngIf="wishlist">\n\n        <div class="empty" *ngIf="!wishlist.length"> <img src="assets/image/wishlist.png">\n\n            <h4 text-center no-lines>{{"Your Wishlist Is Empty" | translate}}</h4>\n\n        </div>\n\n        <div *ngIf="wishlist.length">\n\n            <div *ngFor="let item of wishlist | keys" class="wish-list">\n\n                <ion-item no-lines>\n\n                    <ion-thumbnail item-left (click)="getProduct(item.value.id)"> \n\n                        <img src="{{item.value.image_thumb}}"> \n\n                        <button class="no-stock-button" ion-button *ngIf="item.value.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                        </button> \n\n                    </ion-thumbnail>\n\n\n\n                    <h2 wrap-text>{{item.value.name}} </h2>\n\n                    <h3 wrap-text> {{"Price" | translate}}: {{item.value.price | currency:values.currency:symbol:\'1.2-2\'}} </h3>\n\n                    <h3 style="font-size:11px; margin: 3px 0"> \n\n                        <span class="rating review-star">\n\n                           <span class="star-icon" [ngClass]="{full: item.value.average_rating >= 1, half: item.value.average_rating == 0.5}">&#x2605;</span> \n\n                           <span class="star-icon" [ngClass]="{full: item.value.average_rating >= 2, half: item.value.average_rating == 1.5}">&#x2605;</span> \n\n                           <span class="star-icon" [ngClass]="{full: item.value.average_rating >= 3, half: item.value.average_rating == 2.5}">&#x2605;</span> \n\n                           <span class="star-icon" [ngClass]="{full: item.value.average_rating >= 4, half: item.value.average_rating == 3.5}">&#x2605;</span> \n\n                           <span class="star-icon" [ngClass]="{full: item.value.average_rating >= 5, half: item.value.average_rating == 4.5}">&#x2605;</span> \n\n                       </span> \n\n                       <span style="font-size: 10px;">({{item.value.review_count}})</span> \n\n                    </h3>\n\n\n\n                    <ion-row class="add-remove-button">\n\n                        <ion-col royal width-50> \n\n                            <button ion-button full color="red" clear text-uppercase no-padding no-margin (click)="removeFromWishlist(item.value.id)" style="margin-left: -25px;">\n\n                                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n                                 {{"Remove" | translate}}\n\n                            </button> \n\n                        </ion-col>\n\n\n\n                        <ion-col royal width-50> \n\n                            <button ion-button full [disabled]="item.value.stock_status == \'outofstock\'" color="button-color" no-padding no-margin clear text-uppercase (click)="addToCart(item.value.id, item.value.type)">\n\n                                <ion-icon ios="ios-cart" md="md-basket"></ion-icon>\n\n                                {{"Add To Cart" | translate}}\n\n                            </button> \n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-item>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\account\wishlist\wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__["a" /* WishlistService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistService = /** @class */ (function () {
    function WishlistService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    WishlistService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.addToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    WishlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */]])
    ], WishlistService);
    return WishlistService;
}());

//# sourceMappingURL=wishlist-service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_survey_survey__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_survey_model__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_survey_api_wrapper__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyPage = /** @class */ (function () {
    function SurveyPage(navCtrl, navParams, surveyProvider, loadingCtrl, alertCtrl, apiWrapper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.surveyProvider = surveyProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.apiWrapper = apiWrapper;
        this.noSurveys = false;
        this.currentYear = new Date().getFullYear();
        this.survey = "";
        this.getSurveys();
    }
    SurveyPage.prototype.handleProductResults = function (results) {
        console.log(results);
    };
    SurveyPage.prototype.getSurveys = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].forkJoin(this.surveyProvider.getActiveSurveys())
            .subscribe(function (data) {
            console.log(data);
            _this.surveys = __WEBPACK_IMPORTED_MODULE_3__models_survey_model__["a" /* SurveyModel */].fromJSONArray(data[0]);
            _this.survey = _this.surveys[0];
            loading.dismiss();
        }, function (error) {
            console.log(error);
            if ((error.message == "Failed to get surveys.") || (error.message == "Http failure response for (unknown url): 0 Unknown Error"))
                _this.noSurveys = true;
            loading.dismiss();
        });
    };
    SurveyPage.prototype.getActiveSurveys = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        loading.present();
        this.surveyProvider.getActiveSurveys()
            .subscribe(function (data) {
            _this.surveys = __WEBPACK_IMPORTED_MODULE_3__models_survey_model__["a" /* SurveyModel */].fromJSONArray(data);
            loading.dismiss();
        }, function (error) {
            console.log(error);
            if ((error.message == "Failed to get surveys.") || (error.message == "Http failure response for (unknown url): 0 Unknown Error"))
                _this.noSurveys = true;
            loading.dismiss();
        });
    };
    SurveyPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* Home */]);
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-survey',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\survey\survey.html"*/'<!--\n\n  Generated template for the SurveyDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="header">\n\n    <button id="ha" ion-button icon-only (click)="goHome()" style="background:transparent;float:left;box-shadow: 0px 0px;">\n\n      <ion-icon color="dark" ios="ios-arrow-back" md="md-arrow-back">\n\n      </ion-icon>\n\n    </button> \n\n       \n\n      <ion-title style="text-align: center;margin-top:15px;">Quiz</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <survey [survey]="survey"></survey>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\survey\survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_survey_survey__["a" /* SurveyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_survey_api_wrapper__["a" /* ApiWrapper */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// rxjs.

/*
 Generated class for the SurveyProvider provider.
 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var SurveyProvider = /** @class */ (function () {
    function SurveyProvider(http) {
        this.http = http;
        this.ownerId = encodeURI("ownerId");
        this.accessKey = "386463c27ddc49d9b987ca7dd5242632";
        //console.log('Hello SurveyProvider Provider');
    }
    SurveyProvider.prototype.testProgressRequest = function () {
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpRequest */]('GET', 'https://jsonplaceholder.typicode.com/photos', {
            reportProgress: true,
        });
        this.http.request(req).subscribe(function (event) {
            // Via this API, you get access to the raw event stream.
            // Look for upload progress events.
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpEventType */].UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                var percentDone = Math.round(100 * event.loaded / event.total);
                console.log("File is " + percentDone + "% uploaded.");
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
            }
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpEventType */].DownloadProgress) {
                var kbLoaded = Math.round(event.loaded / 1024);
                console.log("Download in progress! " + kbLoaded + "Kb loaded");
            }
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpEventType */].Response) {
                console.log('Data received', event.body);
            }
        });
    };
    // Returns the list of active surveys.
    SurveyProvider.prototype.getActiveSurveys = function () {
        return this.http.get('https://dxsurvey.com/api/MySurveys/getActive?ownerId=' + this.ownerId + '&accessKey=' + this.accessKey).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to get surveys.'))));
    };
    // Returns the list of archive surveys.
    SurveyProvider.prototype.getArchiveSurveys = function () {
        return this.http.get('https://dxsurvey.com/api/MySurveys/getArchive?ownerId=' + this.ownerId + '&accessKey=' + this.accessKey).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to get surveys.'))));
    };
    // Returns survey results.
    SurveyProvider.prototype.getSurveyResults = function (idSurvey) {
        return this.http.get('https://dxsurvey.com/api/MySurveys/getSurveyResults/' + idSurvey + '?accessKey=' + this.accessKey).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to get survey results.'))));
    };
    // Delete a survey by it's id. You will not be able to restore this survey. The survey results become inaccessible.
    SurveyProvider.prototype.deleteSurvey = function (idSurvey) {
        return this.http.get('https://dxsurvey.com/api/MySurveys/delete/' + idSurvey + '?accessKey=' + this.accessKey).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to delete survey.'))));
    };
    // Change the survey name.
    SurveyProvider.prototype.changeSurveyName = function (idSurvey, newName) {
        return this.http.get('https://dxsurvey.com/api/MySurveys/changeName/' + idSurvey + '?accessKey=' + this.accessKey + '&name=' + encodeURI(newName)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to change survey name.'))));
    };
    // Restore an archive survey by it's id.
    SurveyProvider.prototype.restoreSurvey = function (idSurvey) {
        return this.http.get('https://dxsurvey.com/api/MySurveys/restore/' + idSurvey + '?accessKey=' + this.accessKey).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to restore survey.'))));
    };
    // Archive the survey by it's id. All survey results will be still accessible. You have to delete a survey to remove the access to it's results.
    SurveyProvider.prototype.archiveSurvey = function (idSurvey) {
        return this.http.get('https://dxsurvey.com/api/MySurveys/archive/' + idSurvey + '?accessKey=' + this.accessKey).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to archive survey.'))));
    };
    // Create a new survey.
    SurveyProvider.prototype.createSurvey = function (name) {
        return this.http.get('https://dxsurvey.com/api/MySurveys/create?ownerId=' + this.ownerId + '&accessKey=' + this.accessKey + '&name=' + encodeURI(name)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to create survey.'))));
    };
    // Delete the survey result. Use it to delete spam or test results.
    SurveyProvider.prototype.deleteSurveyResult = function (postId, instanceId) {
        return this.http.get('https://dxsurvey.com/api/MySurveys/deleteResult?accessKey=' + this.accessKey + '&postId=' + postId + '&instanceId=' + instanceId).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(10000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to create survey.'))));
    };
    // Enable or disable the ability to view survey results by non autorized user via direct link.
    SurveyProvider.prototype.makeSurveyResultsPublic = function (idSurvey, makeResultPublic) {
        return this.http.get('https://dxsurvey.com/api/MySurveys/makeResultPublic/' + idSurvey + '?accessKey=' + this.accessKey + '&makeResultPublic=' + makeResultPublic).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(new Error('Failed to make survey results public.'))));
    };
    SurveyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SurveyProvider);
    return SurveyProvider;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// rxjs.


var ApiWrapper = /** @class */ (function () {
    // https://medium.com/@alonronin/magic-methods-in-javascript-meet-proxy-65e6305f4d3e
    function ApiWrapper(http) {
        this.http = http;
        var target = {};
        var handler = {
            get: function (target, name) {
                return Object.assign({}, [
                    'get',
                    'delete',
                    'head'
                ].reduce(function (o, method) {
                    return Object.assign({}, o, (_a = {},
                        _a[method] = function (endpoint, params) {
                            if (endpoint === void 0) { endpoint = ''; }
                            if (params === void 0) { params = {}; }
                            if (typeof endpoint === 'object') {
                                params = endpoint;
                                endpoint = '';
                            }
                            var arrayParams = [];
                            for (var param in params) {
                                if ((param == 'ownerId') && (params[param] == true))
                                    params[param] = ApiWrapper_1.ownerId;
                                if ((param == 'accessKey') && (params[param] == true))
                                    params[param] = ApiWrapper_1.accessKey;
                                arrayParams.push(param + '=' + encodeURI(params[param]));
                            }
                            var strParams = arrayParams.join('&');
                            return http[method](ApiWrapper_1.baseURL + endpoint + '?' + strParams).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new Error('Failed to get data.'))));
                        },
                        _a));
                    var _a;
                }, {}), [
                    'post',
                    'put',
                    'patch'
                ].reduce(function (o, method) {
                    return Object.assign({}, o, (_a = {},
                        _a[method] = function (endpoint, body, params) {
                            if (endpoint === void 0) { endpoint = ''; }
                            if (body === void 0) { body = {}; }
                            if (params === void 0) { params = {}; }
                            if (typeof endpoint === 'object') {
                                params = body;
                                body = endpoint;
                                endpoint = '';
                            }
                            var arrayParams = [];
                            for (var param in params) {
                                if ((param == 'ownerId') && (params[param] == true))
                                    params[param] = ApiWrapper_1.ownerId;
                                if ((param == 'accessKey') && (params[param] == true))
                                    params[param] = ApiWrapper_1.accessKey;
                                arrayParams.push(param + '=' + encodeURI(params[param]));
                            }
                            var strParams = arrayParams.join('&');
                            return http[method](ApiWrapper_1.baseURL + endpoint + '?' + strParams).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["timeoutWith"])(5000, __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new Error('Failed to get data.'))));
                        },
                        _a));
                    var _a;
                }, {}));
            }
        };
        /*
        const handler = {
            get(target, name) {
                return {
                  get(endpoint, params) {
                    let arrayParams = [];
                    for (let param in params) {
                        if ((param == 'ownerId') && (params[param] == true)) params[param] = ApiWrapper.ownerId;
                        if ((param == 'accessKey') && (params[param] == true)) params[param] = ApiWrapper.accessKey;
                        arrayParams.push(param + '=' + encodeURI(params[param]));
                    }
                    let strParams = arrayParams.join('&');
                    return http.get(ApiWrapper.baseURL + endpoint + '?' + strParams).pipe(
                        timeoutWith(5000, Observable.throw(new Error('Failed to get data.')))
                    );
                  },
                  
                  post(body) {
                    return http.post(name, body)
                  }
                }
              }
        };
        */
        this.api = new Proxy(target, handler);
    }
    ApiWrapper_1 = ApiWrapper;
    ApiWrapper.baseURL = 'https://dxsurvey.com/api/MySurveys/';
    ApiWrapper.ownerId = encodeURI("ownerId");
    ApiWrapper.accessKey = "386463c27ddc49d9b987ca7dd5242632";
    ApiWrapper = ApiWrapper_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ApiWrapper);
    return ApiWrapper;
    var ApiWrapper_1;
}());

//# sourceMappingURL=api-wrapper.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_order_details_order_details__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_orders_orders__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_register_register__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_wishlist_wishlist__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkout_billing_address_form_billing_address_form__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkout_order_summary_order_summary__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_terms_condition_terms_condition__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_products_products__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reviews_reviews__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_search_search__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sort_sort__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_post_post__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_service_cart_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_service_wishlist_service__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_service_category_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_service_checkout_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_service_config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_service_product_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_service_search_service__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ngx_translate_core__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ngx_translate_http_loader__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_onesignal__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_photo_viewer__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_social_sharing__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pipes_pipe_module__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_app_rate__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_email_composer__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_screen_orientation__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_survey_survey__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_components_module__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_survey_survey__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_survey_api_wrapper__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__interceptors_timing_interceptor__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























/*------------------------ Providers ----------------------------------*/



























//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';

// import { SurveyPageModule } from '../pages/survey/survey.module';




function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_41__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                // SurveyComponent,
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_50__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_22__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reviews_reviews__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sort_sort__["a" /* Sort */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_51__components_components_module__["a" /* ComponentsModule */],
                // SurveyPageModule,
                __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_46__pipes_pipe_module__["a" /* KeysPipeModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_40__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_40__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_38__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_22__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reviews_reviews__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sort_sort__["a" /* Sort */],
                __WEBPACK_IMPORTED_MODULE_50__pages_survey_survey__["a" /* SurveyPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__providers_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_29__providers_service_wishlist_service__["a" /* WishlistService */],
                __WEBPACK_IMPORTED_MODULE_30__providers_service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_service_checkout_service__["a" /* CheckoutService */],
                __WEBPACK_IMPORTED_MODULE_32__providers_service_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_33__providers_service_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_34__providers_service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_35__providers_service_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_36__providers_service_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_37__providers_service_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_email_composer__["a" /* EmailComposer */],
                //Facebook,
                //GooglePlus,
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_38__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_54__interceptors_timing_interceptor__["a" /* TimingInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_52__providers_survey_survey__["a" /* SurveyProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_survey_api_wrapper__["a" /* ApiWrapper */],
                __WEBPACK_IMPORTED_MODULE_52__providers_survey_survey__["a" /* SurveyProvider */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_config__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_login_login__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_products_products__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_post_post__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_address_address__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_account_orders_orders__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_account_wishlist_wishlist__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_survey_survey__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var MyApp = /** @class */ (function () {
    function MyApp(statusBar, splashScreen, alertCtrl, config, oneSignal, platform, service, values, translateService, emailComposer, appRate, socialSharing, nativeStorage, screenOrientation, menuCtrl) {
        var _this = this;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.emailComposer = emailComposer;
        this.appRate = appRate;
        this.socialSharing = socialSharing;
        this.nativeStorage = nativeStorage;
        this.screenOrientation = screenOrientation;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */];
        this.buttonLanguagesSettings = false;
        this.showCategories = false;
        platform.ready().then(function () {
            statusBar.styleDefault();
            statusBar.backgroundColorByHexString('#f4f5f8');
            _this.registerBackButton();
            _this.nativeStorage.getItem('blocks').then(function (data) {
                if (data) {
                    _this.splashScreen.hide();
                    _this.service.blocks = data.blocks;
                    _this.values.settings = data.settings;
                    _this.values.calc(platform.width());
                    if (_this.values.settings.app_dir == 'right')
                        _this.platform.setDir('rtl', true);
                    else
                        _this.platform.setDir('ltr', true);
                    _this.translateService.setDefaultLang(_this.values.settings.language);
                }
            }, function (error) { return console.error(error); });
            _this.nativeStorage.getItem('categories').then(function (data) {
                if (data) {
                    _this.service.categories = data;
                    _this.service.mainCategories = [];
                    for (var i = 0; i < _this.service.categories.length; i++) {
                        if (_this.service.categories[i].parent == '0') {
                            _this.service.mainCategories.push(_this.service.categories[i]);
                        }
                    }
                }
            }, function (error) { return console.error(error); });
            _this.service.load().then(function (results) { return _this.handleService(results); });
            _this.screenOrientation.onChange().subscribe(function () {
                _this.values.calc(platform.height());
            });
        });
    }
    MyApp.prototype.handleService = function (results) {
        var _this = this;
        if (this.values.settings.app_dir == 'right')
            this.platform.setDir('rtl', true);
        else
            this.platform.setDir('ltr', true);
        this.translateService.setDefaultLang(this.values.settings.language);
        this.splashScreen.hide();
        this.values.calc(this.platform.width());
        if (this.platform.is('cordova')) {
            this.oneSignal.startInit(this.values.settings.onesignal_app_id, this.values.settings.google_project_id);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(function (result) {
                console.log(result);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (result) {
                if (result.notification.payload.additionalData.category) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_products_products__["a" /* ProductsPage */], { id: result.notification.payload.additionalData.category });
                }
                else if (result.notification.payload.additionalData.product) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_product_product__["a" /* ProductPage */], { id: result.notification.payload.additionalData.product });
                }
                else if (result.notification.payload.additionalData.post) {
                    _this.post({ di: result.notification.payload.additionalData.post });
                }
                else if (result.notification.payload.additionalData.order) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */], { id: result.notification.payload.additionalData.order });
                }
            });
            this.oneSignal.endInit();
        }
        if (this.values.settings.show_latest == '1')
            this.service.getProducts();
        if (this.values.settings.show_featured == '1')
            this.service.getfeaturedProduct();
        if (this.values.settings.show_onsale == '1')
            this.service.onSaleProduct();
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.getCategory = function (id, slug, name) {
        this.items = [];
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_products_products__["a" /* ProductsPage */], this.items);
    };
    MyApp.prototype.getCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
        this.values.wishlistId = [];
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */]);
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__["a" /* AccountRegister */]);
    };
    MyApp.prototype.address = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_account_address_address__["a" /* Address */]);
    };
    MyApp.prototype.order = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_account_orders_orders__["a" /* Orders */]);
    };
    MyApp.prototype.cart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.wishlist = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_account_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.shop = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */]);
    };
    MyApp.prototype.quiz = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_survey_survey__["a" /* SurveyPage */]);
    };
    MyApp.prototype.dropDown = function () {
        this.showCategories = true;
    };
    MyApp.prototype.dropup = function () {
        this.showCategories = false;
    };
    MyApp.prototype.rateApp = function () {
        if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
                ios: this.values.settings.rate_app_ios_id,
                android: this.values.settings.rate_app_android_id,
                windows: 'ms-windows-store://review/?ProductId=' + this.values.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(true);
        }
    };
    MyApp.prototype.shareApp = function () {
        if (this.platform.is('cordova')) {
            var url = '';
            if (this.platform.is('android'))
                url = this.values.settings.share_app_android_link;
            else
                url = this.values.settings.share_app_ios_link;
            var options = {
                message: '',
                subject: '',
                files: ['', ''],
                url: url,
                chooserTitle: ''
            };
            this.socialSharing.shareWithOptions(options);
        }
    };
    MyApp.prototype.contact = function () {
        var email = {
            to: this.values.settings.support_email,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    MyApp.prototype.post = function (id) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_post_post__["a" /* Post */], id);
    };
    MyApp.prototype.registerBackButton = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            if (_this.menuCtrl.isOpen()) {
                _this.menuCtrl.close();
                return;
            }
            else if (_this.nav.canGoBack()) {
                _this.nav.pop();
            }
            else {
                _this.showAlert();
            }
        });
    };
    MyApp.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: "Exit?",
            message: "Are you sure you want to exit?",
            buttons: [{
                    text: "Cancel",
                    role: "cancel",
                    handler: function () {
                        _this.alert = null;
                    }
                }, {
                    text: "Exit",
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }]
        });
        this.alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\app\app.html"*/'<div *ngIf="values.settings?.app_dir">\n\n<ion-menu [content]="content" side="{{values.settings.app_dir}}">\n\n  <div class="menu-toolbar">\n\n    <ion-toolbar color="header">\n\n      <div class="profile-image">\n\n        <img src="{{values.avatar}}">\n\n      </div> \n\n    </ion-toolbar>\n\n  </div>\n\n  <ion-content class="sidemenugrad">\n\n    <ion-list no-margin>\n\n      <div class="list-item-divider">\n\n        <ion-item-divider tappable menuClose (click)="shop()">\n\n          <ion-icon item-left style="background-color: #ef3d63;" ios="ios-home" md="md-home">\n\n          </ion-icon>\n\n          <strong>{{"Shop" | translate}}\n\n          </strong>\n\n        </ion-item-divider>\n\n      </div>       \n\n      <div *ngIf="service.categories" class="category-name">\n\n        <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)" [hidden]="item.name == \'Uncategorized\'">\n\n          <ion-icon item-right *ngIf="values?.settings?.app_dir == \'left\'" class="ion-ios-arrow-forward item-icon"></ion-icon>\n\n          <ion-icon item-right *ngIf="values?.settings?.app_dir == \'right\'" class="ion-ios-arrow-back item-icon"></ion-icon>\n\n          <span [innerHTML]="item.name"></span>     \n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list class="menu-items">\n\n      <ion-item tappable menuClose (click)="quiz()">\n\n        {{"Quiz" | translate}}\n\n        <ion-icon style="background-color: #6e0053" name="ios-mail" item-left></ion-icon>\n\n      </ion-item>\n\n      <ion-item-divider>\n\n        <ion-icon style="background-color: #ffc21a;" ios="ios-contact" md="md-contact" item-left>\n\n        </ion-icon>\n\n        <strong>{{"Account" | translate}}\n\n        </strong>\n\n      </ion-item-divider>\n\n      <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n\n        <ion-icon style="background-color: #f25362" name="md-log-in" item-left>\n\n        </ion-icon>{{"LogIn" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="register()" *ngIf="!values.isLoggedIn">\n\n        <ion-icon style="background-color: #00a9e2" item-left ios="ios-create" md="md-create">\n\n        </ion-icon>{{"Register" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="address()" *ngIf="values.isLoggedIn">\n\n        <ion-icon style="background-color: #3aa756" item-left ios="md-locate" md="md-locate">\n\n        </ion-icon>{{"Address" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="order()" *ngIf="values.isLoggedIn">\n\n        <ion-icon style="background-color: #4688f1" item-left ios="md-reorder" md="md-reorder">\n\n        </ion-icon>{{"Order" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="wishlist()" *ngIf="values.isLoggedIn">\n\n        <ion-icon style="background-color: #e8453c" ios="ios-heart" md="md-heart" item-left>\n\n        </ion-icon>{{"Wishlist" | translate}}\n\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="cart()">\n\n        <ion-icon style="background-color: #8BC34A" name="ios-basket-outline" item-left>\n\n        </ion-icon>\n\n        {{"Checkout" | translate}}\n\n      </ion-item>\n\n            <ion-item tappable menuClose (click)="contact()">\n\n               {{"Contact Us" | translate}}\n\n               <ion-icon style="background-color: #6e0053" name="ios-mail" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item tappable menuClose *ngIf="values.data?.pages?.about && values.data?.pages?.about != \'0\'" (click)="post(values.data?.pages?.about)">\n\n               {{"About us" | translate}}\n\n               <ion-icon style="background-color: #26C6DA" name="ios-information-circle" item-left></ion-icon>\n\n            </ion-item>\n\n            <ion-item tappable menuClose *ngIf="values.data?.pages?.terms && values.data?.pages?.terms != \'0\'" (click)="post(values.data?.pages?.terms)">\n\n               <ion-icon style="background-color: #8BC34A" name="ios-paper" item-left></ion-icon>\n\n               {{"Terms & Conditions" | translate}}\n\n            </ion-item>\n\n            <ion-item tappable menuClose no-line (click)="shareApp()">\n\n               <ion-icon style="background-color: #FF5722" name="md-share" item-left></ion-icon>\n\n               {{"Share App" | translate}}\n\n            </ion-item>\n\n            <ion-item tappable menuClose no-line (click)="rateApp()">\n\n               <ion-icon style="background-color: #43A047" name="md-thumbs-up" item-left></ion-icon>\n\n               {{"Rate App" | translate}}\n\n            </ion-item>\n\n      <ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n\n        <ion-icon style="background-color: #FDD835" item-left name="md-log-out">\n\n        </ion-icon>{{"Logout" | translate}}\n\n      </ion-item>\n\n    </ion-list>\n\n    <br>\n\n    <br>\n\n    <br>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n\n</ion-nav>\n\n</div>\n\n<!--ion-menu [content]="content" type="overlay">\n\n    <div class="menu-toolbar">\n\n        <ion-toolbar color="header">\n\n            <div class="profile-image">\n\n             <img src="{{values.avatar}}"> \n\n             </div>\n\n            </ion-toolbar>\n\n    </div>\n\n    <ion-content class="sidemenugrad">\n\n        <ion-item-divider tappable menuClose (click)="shop()">\n\n            <ion-icon item-left ios="ios-home" md="md-home"></ion-icon> {{"Home" | translate}} </ion-item-divider>\n\n        <ion-list no-margin>\n\n            <div class="list-item-divider">\n\n                <ion-item-divider tappable *ngIf="!showCategories" (click)="dropDown()">\n\n                    <ion-icon item-left name="logo-buffer" style="margin-top: 12px"></ion-icon> {{"Categories" | translate}}\n\n                    <ion-icon name="md-arrow-dropdown" class="drop-icon" (click)="dropDown()"></ion-icon>\n\n                </ion-item-divider>\n\n                <ion-item-divider tappable *ngIf="showCategories" (click)="dropup()">\n\n                    <ion-icon item-left name="logo-buffer" style="margin-top: 12px"></ion-icon> {{"Categories" | translate}}\n\n                    <ion-icon name="md-arrow-dropup" class="drop-icon" (click)="dropup()"></ion-icon>\n\n                </ion-item-divider>\n\n            </div>\n\n            <div *ngIf="showCategories">\n\n                <div *ngIf="service.categories" class="category-name">\n\n                    <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n\n                        <ion-icon item-right hideWhen="ios" class="ion-ios-arrow-forward item-icon"> </ion-icon>\n\n                        <span [innerHTML]="item.name" style="margin-left: 4px;"></span> </ion-item>\n\n                </div>\n\n            </div>\n\n        </ion-list> <br>\n\n        <ion-list>\n\n            <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n\n                <ion-icon name="md-log-in" item-left></ion-icon>{{"LogIn" | translate}} </ion-item>\n\n            <ion-item tappable menuClose (click)="register()" *ngIf="!values.isLoggedIn">\n\n                <ion-icon item-left ios="ios-create" md="md-create"> </ion-icon>{{"Register" | translate}} </ion-item>\n\n            <ion-item tappable menuClose (click)="address()" *ngIf="values.isLoggedIn">\n\n                <ion-icon item-left ios="md-locate" md="md-locate"> </ion-icon>{{"Address" | translate}} </ion-item>\n\n            <ion-item tappable menuClose (click)="order()" *ngIf="values.isLoggedIn">\n\n                <ion-icon item-left ios="md-reorder" md="md-reorder"> </ion-icon>{{"Orders" | translate}} </ion-item>\n\n            <ion-item tappable menuClose (click)="wishlist()" *ngIf="values.isLoggedIn">\n\n                <ion-icon name="md-heart" item-left></ion-icon>{{"Wishlist" | translate}} </ion-item>\n\n            <ion-item tappable menuClose (click)="cart()">\n\n                <ion-icon color="icon-color" name="md-basket" item-left></ion-icon> {{"Checkout" | translate}} </ion-item>\n\n            <ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n\n                <ion-icon item-left name="md-log-out"> </ion-icon>{{"Logout" | translate}} </ion-item>\n\n        </ion-list>\n\n\n\n        </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"> </ion-nav-->'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_6__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_post__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Home = /** @class */ (function () {
    function Home(toastCtrl, nav, service, values, functions) {
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.loading = true;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
    }
    Home.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    Home.prototype.handleService = function (results) {
        // 
    };
    Home.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.name = name;
        this.items.slug = slug;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
    };
    Home.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    Home.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    Home.prototype.getProduct = function (item) {
        // window.open('http://cirung.com/wp-content/uploads/2019/04/1-2.jpg','_system','location=yes');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__product_product__["a" /* ProductPage */], item);
    };
    Home.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    Home.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    Home.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    Home.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    Home.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    Home.prototype.viewAllFeatured = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], { filter: { featured: true } });
    };
    Home.prototype.viewAllOffers = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], { filter: { on_sale: true } });
    };
    Home.prototype.goto = function (data) {
        var _this = this;
        console.log(data);
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_9__post_post__["a" /* Post */], data.url);
        }
    };
    Home.prototype.doInfinite = function (infiniteScroll) {
        this.service.loadMore().then(function (results) { infiniteScroll.complete(); });
    };
    Home.prototype.hideLoading = function () {
        this.loading = false;
    };
    Home.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\home\home.html"*/'<ion-header class="home-header">\n\n    <ion-navbar color="header"> \n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu">\n\n            </ion-icon>\n\n        </button>\n\n        <ion-title><img src="{{values.avatar}}"> \n\n        </ion-title>\n\n        <ion-buttons end> \n\n            <button ion-button icon-only (click)="getSearch()">\n\n                <ion-icon color="icon-color" ios="ios-search" md="md-search">\n\n                </ion-icon>\n\n            </button> \n\n            <button ion-button icon-only class="has-icon icon-only has-badge" (click)="getCart()">\n\n                <ion-icon color="icon-color" name="md-basket">\n\n                </ion-icon>\n\n                <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n\n                </ion-badge>\n\n            </button> \n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="home">\n\n\n\n    <ion-refresher *ngIf="values.settings.pull_to_refresh == \'1\'" (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <ion-fab bottom right *ngIf="values.settings.enable_home_chat == \'1\'">\n\n        <a href="https://wa.me/{{values.settings.whatsapp_number}}"><button ion-fab color="secondary" mini><ion-icon name="chatbubbles"></ion-icon></button></a>\n\n    </ion-fab>\n\n\n\n\n\n    <div class="spinner center-spinner"><ion-spinner *ngIf="loading" name="crescent"> </ion-spinner></div>\n\n\n\n    <div *ngFor="let children of service?.blocks" hideWhen="loading" class="blocks">\n\n\n\n        <div *ngIf="children.block_type == \'banner_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" class="banner_block">\n\n\n\n        <div class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>    \n\n            <!-- Banner Slider -->\n\n            <div *ngIf="children.children?.length && children.style == \'slider\'">\n\n                <ion-slides pager="true" loop="true" autoplay="5800">\n\n                        <ion-slide *ngFor="let image of children.children"> \n\n                            <img src="{{image.image}}" (click)="goto(image)" (load)="hideLoading()" [style.border-radius]="children.border_radius">\n\n                        </ion-slide>\n\n                </ion-slides>\n\n            </div>\n\n\n\n            <!-- Banner Scroll -->\n\n            <div *ngIf="children.children?.length && children.style == \'scroll\'" [style.padding]="children.padding" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}" class="floating-header banner-scroll">\n\n                <img class="banner" tappable *ngFor="let image of children.children" (load)="hideLoading()" src="{{image.image}}" (click)="goto(image)" [style.border-radius]="children.border_radius" [style.width.%]="children.child_width"> \n\n            </div>\n\n\n\n            <!-- Banner Grid -->\n\n            <div *ngIf="children.children?.length && children.style == \'grid\'" class="banner-grid" [style.padding]="children.padding">\n\n                <ion-row class="row unlimited-items">\n\n                    <ion-col *ngFor="let image of children.children" (load)="hideLoading()" [style.width.%]="children.child_width">\n\n                        <img src="{{image.image}}" (click)="goto(image)" [style.border-radius]="children.border_radius" class="{{children.card_style}}"> \n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>  \n\n\n\n        </div>\n\n\n\n        \n\n        \n\n        <div *ngIf="children.block_type == \'product_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="product-block">\n\n        <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n        <!-- Products Scroll -->\n\n        <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n\n            <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n                <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n\n                    <ion-card>\n\n                        <ion-card-content (click)="getProduct(item)"> <img  [style.border-radius]="children.border_radius" src="{{item.images[0].src}}" /> </ion-card-content>\n\n                        <h5 *ngIf="item.title">{{item.title}} </h5>\n\n                        <h5 *ngIf="item.name">{{item.name}} </h5>\n\n                        <ion-label>\n\n                            <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                            </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                            </span> <span *ngIf="item.sale_price">\n\n                            <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                            </del>\n\n                            </span>\n\n                        </ion-label>\n\n                    </ion-card>\n\n                </a>\n\n            </div>\n\n        </div>\n\n        <!-- Products  Grid-->\n\n        <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n\n            <ion-row class="row unlimited-items">\n\n                <ion-col class="col" *ngFor="let item of children.products" [style.padding]="children.padding">\n\n                    <ion-card>\n\n                        <ion-card-content> \n\n                            <img tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n\n                            <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                            </button>\n\n                            <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                            <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n\n\n                            <div *ngIf="item.stock_status == \'instock\'">\n\n                            <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                            </div>\n\n\n\n                        </ion-card-content>\n\n\n\n                        <div tappable (click)="getProduct(item)" class="card-name">\n\n                            <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                            <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n                        </div>\n\n\n\n                        <ion-label> \n\n                            <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                            </span> \n\n                            <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                            </span>\n\n                            <span class="price-delete" *ngIf="item.sale_price">\n\n                                <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                </del>\n\n                            </span>  \n\n                        </ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n        </div>\n\n\n\n\n\n        <!--flash sale-->\n\n\n\n        <div *ngIf="children.block_type == \'flash_sale_block\' && !children.hide" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="product-block flash_sale">\n\n\n\n        <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">\n\n            <ion-item no-lines class="flash-item-name">\n\n                <h2 [style.color]="children.title_color"><ion-icon name="md-flash" style="margin-right: 6px;font-size: 18px;"></ion-icon>{{children.title}}</h2>  \n\n                <!--h4 [style.color]="children.title_color" style="filter: brightness(100%);">Ends in</h4-->\n\n                <div style="text-align: center;">\n\n                    <h3 class=\'day\'><span>{{children.days}}</span></h3> : <h3 class=\'day\'><span>{{children.hours}}</span></h3> : <h3 class=\'day\'><span>{{children.minutes}}</span></h3> : <h3 class=\'day\'><span>{{children.seconds}}</span></h3>                                \n\n                </div>    \n\n            </ion-item>\n\n\n\n\n\n        </div>\n\n\n\n        <!-- Products Scroll -->\n\n        <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n\n            <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n                <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n\n                    <ion-card>\n\n                        <ion-card-content (click)="getProduct(item)"> <img  [style.border-radius]="children.border_radius" src="{{item.images[0].src}}" /> </ion-card-content>\n\n                        <h5 *ngIf="item.title">{{item.title}} </h5>\n\n                        <h5 *ngIf="item.name">{{item.name}} </h5>\n\n                        <ion-label>\n\n                            <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                            </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                            </span> <span *ngIf="item.sale_price">\n\n                            <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\' }}\n\n                            </del>\n\n                            </span>\n\n                        </ion-label>\n\n                    </ion-card>\n\n                </a>\n\n            </div>\n\n        </div>\n\n        <!-- Products  Grid-->\n\n        <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n\n            <ion-row class="row unlimited-items">\n\n                <ion-col class="col" *ngFor="let item of children.products" [style.padding]="children.padding">\n\n                    <ion-card>\n\n                        <ion-card-content> \n\n                            <img tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n\n                            <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                            </button>\n\n                            <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                            <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n\n\n                            <div *ngIf="item.stock_status == \'instock\'">\n\n                            <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                            </div>\n\n\n\n                        </ion-card-content>\n\n\n\n                        <div tappable (click)="getProduct(item)" class="card-name">\n\n                            <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                            <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n                        </div>\n\n\n\n                        <ion-label> \n\n                            <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                            </span> \n\n                            <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                            </span>\n\n                            <span class="price-delete" *ngIf="item.sale_price">\n\n                                <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                </del>\n\n                            </span>  \n\n                        </ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n        </div>\n\n\n\n        \n\n        <div *ngIf="children.block_type == \'category_block\' && this.service.categories" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="category">\n\n        <div *ngIf="service?.categories" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n\n            <!-- Category Scroll -->\n\n            <div *ngIf="service?.categories && children.style == \'scroll\'" class="category-slider-scroll">\n\n                <div class="scrollmenu2" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n\n                    <a *ngFor="let item of getSubCategories(children.link_id)" class="{{item.slug}}" [style.width.%]="children.child_width">\n\n                      <img *ngIf="item.image?.src" (load)="hideLoading()" [style.border-radius]="children.border_radius" src="{{item.image.src}}" (click)="getCategory(item.id, item.slug, item.name, item.image)"/>\n\n                      <h5 *ngIf="item.image?.src" (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name" [style.color]="children.title_color"></h5>\n\n                      <div *ngIf="!item.image?.src" class="no-image">\n\n                        <h5 (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name" [style.color]="children.title_color"></h5>\n\n                      </div>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n            \n\n            <!-- Category Grid -->\n\n            <div *ngIf="service?.categories && children.style == \'grid\'" class="category-slider-grid">\n\n                <ion-row class="row unlimited-items">\n\n                    <ion-col class="col {{item.slug}}" *ngFor="let item of getSubCategories(children.link_id)" [style.width.%]="children.child_width">\n\n                        <div (click)="getCategory(item.id, item.slug, item.name, item.image)">\n\n                            <ion-card>\n\n                                <ion-card-content> \n\n                                    <img *ngIf="item.image?.src" (load)="hideLoading()" [style.border-radius]="children.border_radius" src="{{item.image.src}}"/> \n\n                                </ion-card-content>\n\n                                <div text-center>\n\n                                    <ion-label text-uppercase [innerHTML]="item.name" [style.color]="children.title_color"></ion-label>\n\n                                </div>\n\n                            </ion-card>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n\n\n    </div>\n\n\n\n    <div *ngIf="service.featuredProduct?.length" class="Featured-products">\n\n        <div class="block-title" *ngIf="service.featuredProduct" no-lines class="featured-item-name"> {{"Produk Unggulan" | translate}} <span class="view-all" item-right (click)="viewAllFeatured()">{{"Lihat semua" | translate}}</span> </div>\n\n        <div class="scroll-featured-products">\n\n            <a *ngFor="let item of service.featuredProduct">\n\n                <ion-card>\n\n                    <ion-card-content (click)="getProduct(item)"> <img src="{{item.images[0].src}}" (load)="hideLoading()" /> </ion-card-content>\n\n                    <h5 *ngIf="item.title">{{item.title}} </h5>\n\n                    <h5 *ngIf="item.name">{{item.name}} </h5>\n\n                    <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span *ngIf="item.sale_price">\n\n            <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </del>\n\n            </span> </ion-label>\n\n                </ion-card>\n\n            </a>\n\n        </div>\n\n    </div>\n\n\n\n    <div *ngIf="service.onSale?.length" class="Featured-products">\n\n        <div class="block-title" *ngIf="service.onSale" no-lines class="featured-item-name"> {{"Best Offers" | translate}} <span class="view-all" item-right (click)="viewAllOffers()">{{"View All" | translate}}</span> </div>\n\n        <div class="scroll-featured-products">\n\n            <a *ngFor="let item of service.onSale">\n\n                <ion-card>\n\n                    <ion-card-content (click)="getProduct(item)"> <img src="{{item.images[0].src}}" (load)="hideLoading()" /> </ion-card-content>\n\n                    <h5 *ngIf="item.title">{{item.title}} </h5>\n\n                    <h5 *ngIf="item.name">{{item.name}} </h5>\n\n                    <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span *ngIf="item.sale_price">\n\n            <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </del>\n\n            </span> </ion-label>\n\n                </ion-card>\n\n            </a>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="spinner"><ion-spinner *ngIf="!service.products && service?.banners" name="crescent"> </ion-spinner></div>\n\n\n\n    <div *ngIf="service.products" class="products-listing">\n\n        <!--ion-item no-lines class="item-name">\n\n            <ion-label>{{"Latest Products" | translate}} </ion-label>\n\n        </ion-item-->\n\n        <div class="grid">\n\n            <ion-row class="row unlimited-items">\n\n                <ion-col class="col" *ngFor="let item of service.products">\n\n                    <ion-card>\n\n                        <ion-card-content>\n\n                            <img [style.height.px]="values.dimensions.imageGridViewHeight" tappable src="{{item?.images[0]?.src}}" (load)="hideLoading()" (click)="getProduct(item)"> \n\n                            <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n\n                            </button>\n\n                            <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n\n                            <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n\n\n                            <div *ngIf="item.stock_status == \'instock\'">\n\n                            <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n\n                            </div>\n\n\n\n                        </ion-card-content>\n\n\n\n                        <div tappable (click)="getProduct(item)" class="card-name">\n\n                            <ion-label *ngIf="item.title">{{item.title}} </ion-label>\n\n                            <ion-label *ngIf="item.name">{{item.name}} </ion-label>\n\n                        </div>\n\n\n\n                        <ion-label> \n\n                            <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                            </span> \n\n                            <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                            </span>\n\n                            <span class="price-delete" *ngIf="item.sale_price">\n\n                                <del>{{1*item.regular_price | currency:values.currency:symbol:\'1.2-2\'}}\n\n                                </del>\n\n                            </span>  \n\n                        </ion-label>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n        \n\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="service.has_more_items">\n\n            <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Memuat Item Lainnya\' | translate}}"> </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviews_reviews__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductPage = /** @class */ (function () {
    function ProductPage(iab, photoViewer, modalCtrl, nav, service, params, functions, values, toastCtrl, socialSharing, loadingCtrl) {
        var _this = this;
        this.iab = iab;
        this.photoViewer = photoViewer;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.options = {};
        this.disableSubmit = false;
        this.wishlistIcon = false;
        this.moreDescription = false;
        this.disableBuyNow = false;
        this.filter = {};
        this.usedVariationAttributes = [];
        this.relPro = [];
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.ishref = false;
        this.hrefSlug = "";
        if (params.data.id) {
            this.product = params.data;
            this.usedVariationAttributes = this.product.attributes.filter(function (attribute) { return attribute.variation == true; });
            this.id = params.data.id;
            this.options.product_id = this.id;
            if ((this.product.type == 'variable') && this.product.variations.length)
                this.getVariationProducts();
            this.getRelatedProducts();
            this.getUpsellProducts();
            this.getCrossSellProducts();
            this.getReviews();
            this.setProductHref(this.product.short_description);
        }
        else {
            this.id = params.data;
            this.options.product_id = this.id;
            this.service.getProduct(this.id)
                .then(function (results) { return _this.handleProductResults(results); });
        }
        this.quantity = 1;
        this.AddToCart = "Add To Cart";
    }
    ProductPage_1 = ProductPage;
    ProductPage.prototype.setProductHref = function (string) {
        var arr = string.split('href="');
        var title = string.split('<strong>');
        if (title[1]) {
            title = title[1].split('</strong>');
            if (title[0]) {
                this.linkBySlugTitle = title[0];
            }
            else {
                this.linkBySlugTitle = "Mau coba?";
            }
        }
        if (arr[1]) {
            var arrProduct = arr[1].split('"');
            var linkProduct = arrProduct[0];
            var checkExists = linkProduct.split('/shop/');
            if (linkProduct && checkExists) {
                this.ishref = true;
                var lenArr = linkProduct.split('/');
                if (lenArr[lenArr.length - 1] == "") {
                    this.hrefSlug = lenArr[lenArr.length - 2];
                }
                else {
                    this.hrefSlug = lenArr[lenArr.length - 1];
                }
            }
        }
    };
    ProductPage.prototype.handleProductResults = function (results) {
        this.product = results;
        this.usedVariationAttributes = this.product.attributes.filter(function (attribute) { return attribute.variation == true; });
        if ((this.product.type == 'variable') && this.product.variations.length)
            this.getVariationProducts();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
        this.getReviews();
    };
    ProductPage.prototype.external = function (url) {
        var browser = this.iab.create(url, '_blank');
        browser.show();
    };
    ProductPage.prototype.getVariationProducts = function () {
        var _this = this;
        this.service.getVariationProducts(this.product.id).then(function (results) { return _this.variations = results; });
    };
    ProductPage.prototype.getProduct = function (item) {
        this.nav.push(ProductPage_1, item);
    };
    ProductPage.prototype.addToCart = function (id) {
        var _this = this;
        if (this.setVariations()) {
            this.service.addToCart(this.options).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductPage.prototype.buyNow = function (id) {
        var _this = this;
        if (this.setVariations()) {
            this.service.addToCart(this.options).then(function (results) { return _this.updateBuynowResults(results); });
        }
    };
    ProductPage.prototype.setVariations = function () {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.selected) {
                _this.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
        });
        for (var i = 0; i < this.product.attributes.length; i++) {
            if (this.product.attributes[i].variation && this.product.attributes[i].selected == undefined) {
                this.functions.showAlert('Options', 'Please Select Product ' + this.product.attributes[i].name + ' Option');
                return false;
            }
        }
        return true;
    };
    ProductPage.prototype.updateBuynowResults = function (a) {
        this.disableBuyNow = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.updateCart = function (a) {
        // console.log(a);
        this.disableSubmit = false;
        this.values.count += parseInt(this.quantity);
        this.AddToCart = "Add To Cart";
        this.presentToast();
    };
    ProductPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.service.getReviews(this.id).then(function (results) { return _this.handleReview(results); });
    };
    ProductPage.prototype.handleReview = function (result) {
        this.reviews = result;
        for (var item in this.reviews) {
            this.reviews[item].avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(this.reviews[item].email);
        }
    };
    ProductPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then(function (results) { return _this.update(results); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    ProductPage.prototype.update = function (a) {
        if (a.success == "Success") {
            this.values.wishlistId[this.product.id] = true;
            this.presentToastAddToWishlist();
        }
        else {
            this.functions.showAlert("error", "error");
        }
    };
    ProductPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductPage.prototype.showMore = function () {
        this.moreDescription = true;
    };
    ProductPage.prototype.showLess = function () {
        this.moreDescription = false;
    };
    ProductPage.prototype.getRelatedProduct = function (item) {
        this.nav.push(ProductPage_1, item);
    };
    ProductPage.prototype.updateRelateSlug = function () {
        var relatedSlug = this.hrefSlug;
        var results = this.relPro;
        if (this.ishref) {
            for (var i = 0; i < results.length; i++) {
                if (results[i].slug == relatedSlug) {
                    this.linkBySlug = results[i];
                    break;
                }
            }
        }
    };
    ProductPage.prototype.updateRelated = function (results) {
        this.related = results;
        for (var i = 0; i < results.length; i++) {
            this.relPro.push(results[i]);
        }
        this.updateRelateSlug();
    };
    ProductPage.prototype.updateUpsell = function (results) {
        this.upsell = results;
        for (var i = 0; i < results.length; i++) {
            this.relPro.push(results[i]);
        }
        this.updateRelateSlug();
    };
    ProductPage.prototype.updateCross = function (results) {
        this.crossSell = results;
        for (var i = 0; i < results.length; i++) {
            this.relPro.push(results[i]);
        }
        this.updateRelateSlug();
    };
    ProductPage.prototype.getRelatedProducts = function () {
        var _this = this;
        if (this.product.related_ids != 0) {
            for (var item in this.product.related_ids)
                this.filter['include[' + item + ']'] = this.product.related_ids[item];
            this.service.getRelatedProducts(this.filter)
                .then(function (results) { return _this.updateRelated(results); });
        }
    };
    ProductPage.prototype.getUpsellProducts = function () {
        var _this = this;
        if (this.product.upsell_ids != 0) {
            for (var item in this.product.upsell_ids)
                this.filter['include[' + item + ']'] = this.product.upsell_ids[item];
            this.service.getUpsellProducts(this.filter)
                .then(function (results) { return _this.updateUpsell(results); });
        }
    };
    ProductPage.prototype.getCrossSellProducts = function () {
        var _this = this;
        if (this.product.cross_sell_ids != 0) {
            for (var item in this.product.cross_sell_ids)
                this.filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
            this.service.getCrossSellProducts(this.filter)
                .then(function (results) { return _this.updateCross(results); });
        }
    };
    ProductPage.prototype.showMoreReviews = function (productName, count, rating) {
        this.items = [];
        this.items.reviews = {};
        this.items.id = this.id;
        this.items.count = count;
        this.items.rating = rating;
        this.items.name = productName;
        this.items.reviews = this.reviews;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__reviews_reviews__["a" /* ReviewPage */], this.items);
        modal.present();
    };
    ProductPage.prototype.viewPhotos = function (image) {
        this.photoViewer.show(image);
    };
    ProductPage.prototype.viewPhoto = function (index) {
        this.slides.slideTo(index + 1, 500);
    };
    ProductPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    ProductPage.prototype.presentToastAddToWishlist = function () {
        var toast = this.toastCtrl.create({
            message: 'Item added to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    ProductPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Item added to cart',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    ProductPage.prototype.share = function (product, network, fab) {
        var options = {
            message: 'Hey check this product',
            subject: product.title,
            files: ['', ''],
            url: product.permalink,
            chooserTitle: 'Pick an app'
        };
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
        this.socialSharing.shareWithOptions(options);
    };
    ProductPage.prototype.chooseVariation = function (att, value) {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.name == att.name) {
                item.selected = value;
            }
        });
        this.variations.forEach(function (variation) {
            var test = new Array(_this.usedVariationAttributes.length);
            test.fill(false);
            _this.usedVariationAttributes.forEach(function (attribute) {
                if (variation.attributes.length == 0) {
                    _this.options.variation_id = variation.id;
                    _this.product.in_stock = variation.in_stock;
                    _this.product.price = variation.price;
                    _this.product.sale_price = variation.sale_price;
                    _this.product.regular_price = variation.regular_price;
                }
                else {
                    variation.attributes.forEach(function (item, index) {
                        if (item.name == attribute.name && item.option == attribute.selected) {
                            test[index] = true;
                        }
                    });
                    if (test.every(function (v) { return v == true; })) {
                        _this.options.variation_id = variation.id;
                        _this.product.in_stock = variation.in_stock;
                        _this.product.price = variation.price;
                        _this.product.sale_price = variation.sale_price;
                        _this.product.regular_price = variation.regular_price;
                        test.fill(false);
                    }
                    ;
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ProductPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], ProductPage.prototype, "slides", void 0);
    ProductPage = ProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\product\product.html"*/'<ion-header class="product-header">\n\n    <ion-navbar color="header">\n\n        <ion-title *ngIf="product?.name">\n\n            <h2 [innerHTML]="product.name" style="font-size: 18px;margin: 0"></h2>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n\n\n        <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="share(product)">\n\n        <ion-icon name="ios-share-outline">\n\n        </ion-icon>\n\n        </button> \n\n\n\n        <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n\n        <ion-icon color="icon-color" name="md-basket">\n\n        </ion-icon>\n\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n\n        </ion-badge>\n\n      </button> </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="product-page" #pageContent>\n\n    <div class="spinner center-spinner"><ion-spinner *ngIf="!product" name="crescent"> </ion-spinner></div>\n\n\n\n    <ion-fab bottom right *ngIf="values.settings.enable_product_chat == \'1\'">\n\n        <a href="https://wa.me/{{values.settings.whatsapp_number}}"><button ion-fab color="secondary" mini><ion-icon name="chatbubbles"></ion-icon></button></a>\n\n    </ion-fab>\n\n\n\n    <div class="product-details">\n\n\n\n        <div class="header-image">\n\n        <div *ngIf="product && product?.images?.length">\n\n            <ion-slides pager="true" loop="true" autoplay="5800">\n\n                <ion-slide *ngFor="let item of product.images"> <img [style.height.px]="values.dimensions.imageProductViewHeight" src="{{item.src}}" (click)="viewPhotos(item.src)"> </ion-slide>\n\n            </ion-slides>\n\n\n\n        <!--div class="scrollmenu2">\n\n          <a *ngFor="let item of product.images; let i = index">\n\n            <img src="{{item.src}}" (click)="viewPhoto(i)"/>\n\n          </a>\n\n        </div-->\n\n\n\n        </div>\n\n\n\n        <div *ngIf="product && !product?.images?.length" class="header-image">\n\n            <ion-slides pager="true" loop="true" autoplay="5800">\n\n                <ion-slide> <img src="assets/image/500.png"> </ion-slide>\n\n            </ion-slides>\n\n        </div>\n\n    </div>\n\n<div class="main-content">\n\n    <div *ngIf="product">\n\n         <!--button ion-button clear *ngIf="product.stock_status == \'outofstock\'" item-left class="stock" color="danger">{{"No Stock" | translate}}\n\n      </button-->\n\n\n\n\n\n        <div class="body-index">\n\n            \n\n            <ion-item class="price-label" no-lines style="padding-right: 0 !important">\n\n                <span class="regular_price" *ngIf="!product.sale_price">{{product.price | currency:values.currency:true:\'1.2-2\'}} </span>\n\n                <span class="regular_price" *ngIf="product.sale_price">{{product.sale_price | currency:values.currency:true:\'1.2-2\'}} </span>\n\n                <span class="regular_price" *ngIf="product.sale_price"><del>{{product.regular_price | currency:values.currency:true:\'1.2-2\'}}</del> <span class="offer">{{(product.regular_price - product.sale_price) /product.regular_price*100 | number : \'1.0-0\'}}% OFF</span> </span>\n\n            \n\n\n\n\n\n        <div class="button-in-stock"><button ion-button clear *ngIf="values.wishlistId[product.id]" item-right class="wishlist1" color="danger">\n\n      <ion-icon name="md-heart"  (click)="removeFromWishlist(product.id)"></ion-icon>\n\n      </button> <button ion-button clear *ngIf="!values.wishlistId[product.id]" item-right class="wishlist2" color="danger">\n\n      <ion-icon name="md-heart-outline"  (click)="addToWishlist(product.id)"></ion-icon>\n\n      </button> </div>\n\n\n\n      </ion-item>\n\n\n\n            <ion-label class="product-name" [innerHTML]="product.name" text-wrap></ion-label>\n\n\n\n            <!--variation product starts-->\n\n            <div class="variation-block" *ngIf="variations">\n\n                <div *ngFor="let attribute of usedVariationAttributes" class="variation-product">                 \n\n                    <div *ngIf="attribute.options.length" class="option-box">\n\n                        <button class="option-button" ion-button outline color="light" *ngFor="let option of attribute.options" (click)="chooseVariation(attribute, option)" [ngClass]="{\'selected-option\': attribute.selected == option}">{{option}}</button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n            <!--div *ngIf="product?.attributes?.length" class="variation-product">\n\n                <ion-item *ngFor="let attribute of product?.attributes">\n\n                    <ion-label> {{attribute.name}} </ion-label>\n\n                    <ion-select [(ngModel)]="attribute.selected" (ngModelChange)="chooseVariation()">\n\n                        <div *ngFor="let option of attribute.options">\n\n                            <ion-option value="{{option}}">{{option}}</ion-option>\n\n                        </div>\n\n                    </ion-select>\n\n                </ion-item>\n\n            </div-->\n\n\n\n            <!--variation product starts-->\n\n            <!--div *ngIf="variations?.length" class="variation-product">\n\n                <ion-item>\n\n                    <ion-label> {{"Select Option" | translate}} </ion-label>\n\n                    <ion-select [(ngModel)]="options[0]" (ngModelChange)="chnageProduct()">\n\n                        <div *ngFor="let option of variations">\n\n                            <div *ngIf="option.attributes.length == 1">\n\n                                <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option}}">{{option.attributes[0].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}} </ion-option>\n\n                            </div>\n\n                            <div *ngIf="option.attributes.length == 2">\n\n                                <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}} </ion-option>\n\n                            </div>\n\n                            <div *ngIf="option.attributes.length == 3">\n\n                                <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option + \':variation[attribute_pa_\'+ option.attributes[2].name +\']:\' + option.attributes[2].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.attributes[2].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}} </ion-option>\n\n                            </div>\n\n                        </div>\n\n                    </ion-select>\n\n                </ion-item>\n\n            </div-->\n\n\n\n            <!--ion-grid class="rating-and-total-sales-grid">\n\n                <ion-row>\n\n                    <ion-col width-50 (click)="showMoreReviews(product.name, product.rating_count, product.average_rating)">\n\n                        <h2 class="ratings"> <span item-center *ngIf=\'product.average_rating\' class="rating">\n\n        <span class="star-icon" [ngClass]="{full: product.average_rating >= 1, half: product.average_rating == 0.5}">&#x2605;\n\n        </span> <span class="star-icon" [ngClass]="{full: product.average_rating >= 2, half: product.average_rating == 1.5}">&#x2605;\n\n        </span> <span class="star-icon" [ngClass]="{full: product.average_rating >= 3, half: product.average_rating == 2.5}">&#x2605;\n\n        </span> <span class="star-icon" [ngClass]="{full: product.average_rating >= 4, half: product.average_rating == 3.5}">&#x2605;\n\n        </span> <span class="star-icon" [ngClass]="{full: product.average_rating >= 5, half: product.average_rating == 4.5}">&#x2605;\n\n        </span> <span>({{product.rating_count}})</span> </span>\n\n                        </h2>\n\n                        <h3>{{product.average_rating | number : \'1.2-2\'}}</h3>\n\n                    </ion-col>\n\n                    <ion-col width-50>\n\n                        <h2>{{product.total_sales}}</h2>\n\n                        <h3>{{"Orders" | translate}}</h3>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid-->\n\n\n\n            <!--ion-grid class="add-to-cart">\n\n                <ion-row>\n\n                    <ion-col width-50 class="col1">\n\n                        <ion-item>\n\n                        <ion-label>{{"Quantity" | translate}}</ion-label>\n\n                        <ion-input required type="number" [(ngModel)]="quantity" min="1" name="quantity"></ion-input>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button full text-uppercase color="button-color" *ngIf="product.type != \'external\'" [disabled]="disableSubmit || product.stock_status == \'outofstock\'" (click)="addToCart(product.id)" style="margin: 0;width: 100%; min-height: 50px;">\n\n                        {{AddToCart | translate}}\n\n                        </button>\n\n\n\n                        <button ion-button full text-uppercase color="button-color" *ngIf="product.type == \'external\'" (click)="external(product.external_url)" style="margin: 0;width: 100%; min-height: 50px;">\n\n                        {{"Buy Now" | translate}}\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid-->\n\n\n\n\n\n            <!--div class="quantity">\n\n            <ion-item>\n\n            <ion-label>{{"Quantity" | translate}}</ion-label>\n\n            <ion-input required type="number" [(ngModel)]="quantity" min="1" name="quantity"></ion-input>\n\n            </ion-item>\n\n            </div-->\n\n\n\n                <ion-grid class="add-to-cart" *ngIf="product.type == \'external\'">\n\n                    <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="external(product?.external_url)" style="margin: 0;width: 100%; min-height: 50px; color: white; box-shadow: none;">\n\n                    {{"Buy now" | translate}}\n\n                    </button>\n\n                </ion-grid>\n\n\n\n                <ion-grid class="add-to-cart" *ngIf="product.type != \'external\'">\n\n                    <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="buyNow(product.id)" style="margin: 0.4rem 0.2rem;width: 100%; min-height: 50px;background-color: #0cd1e8; color: white; box-shadow: none;">\n\n                    {{"Buy now" | translate}}\n\n                    </button>\n\n                    <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="addToCart(product.id)" style="margin: 0.4rem 0.2rem;width: 100%; min-height: 50px;box-shadow: none;">\n\n                    {{AddToCart | translate}}\n\n                    </button>\n\n                </ion-grid>\n\n\n\n            <div *ngIf="ishref" class="description">\n\n                <div class="devider"></div>\n\n                <ion-item no-lines class="item-background"> {{"Description" | translate}} </ion-item>\n\n                <ion-item text-wrap no-lines>\n\n                    <div class="scroll-related-products">\n\n                        <div *ngIf="!linkBySlug?.short_description">\n\n                            <p>Loading...</p>\n\n                        </div>\n\n                        <a [style.width.%]="values.dimensions.productSliderWidth" *ngIf="linkBySlug?.short_description">\n\n                            <ion-card>\n\n                                <ion-card-content (click)="getProduct(linkBySlug)">\n\n                                    <img [style.height.px]="values.dimensions.scrollProductHeight" src="{{linkBySlug?.images[0]?.src}}" /> \n\n                                </ion-card-content>\n\n                                <h5>{{linkBySlug?.name}}</h5>\n\n                                <ion-label> \n\n                                    <span class="price-regular" *ngIf="!linkBySlug?.sale_price">{{1*linkBySlug?.price | currency:values.currency:true:\'1.2-2\'}}</span>\n\n                                    <span class="price-regular" *ngIf="linkBySlug?.sale_price">{{1*linkBySlug?.sale_price | currency:values.currency:true:\'1.2-2\'}}</span>\n\n                                    <span *ngIf="linkBySlug?.sale_price">\n\n                                        <del class="price-delete">{{1*linkBySlug?.regular_price | currency:values.currency:true:\'1.2-2\'}}</del>\n\n                                    </span>\n\n                                </ion-label>\n\n                            </ion-card>\n\n                            <strong>{{linkBySlugTitle}}</strong>\n\n                        </a>\n\n                    </div>\n\n                </ion-item>\n\n            </div>\n\n\n\n            <div *ngIf="!ishref" class="description">\n\n                <div class="devider"></div>\n\n                <ion-item no-lines class="item-background"> {{"Description" | translate}} </ion-item>\n\n                <ion-item text-wrap no-lines>\n\n                    <div [innerHTML]="product?.short_description" > \n\n                    </div>\n\n                </ion-item>\n\n            </div>\n\n            <div *ngIf="product?.description" class="description">\n\n                <ion-item text-wrap no-lines>\n\n                    <div [innerHTML]="product.description"> </div>\n\n                </ion-item>\n\n            </div>\n\n            <!--ion-item no-lines class="show-more" *ngIf="!moreDescription && product.short_description">\n\n                <h2 (click)="showMore()"><span class="span1">{{"Read more" | translate}}</span><span class="span2"><ion-icon name="ios-more"></ion-icon></span></h2>\n\n            </ion-item>\n\n            <ion-item no-lines class="show-more" *ngIf="moreDescription">\n\n                <h2 (click)="showLess()"><span class="span1">{{"Read less" | translate}}</span></h2>\n\n            </ion-item-->\n\n            \n\n            <div *ngIf="related?.length" class="related-products">\n\n                <div class="devider"></div>\n\n                <ion-item *ngIf="related" class="related-item-name"> {{"Related Products" | translate}} </ion-item>\n\n                <div class="scroll-related-products">\n\n                    <a [style.width.%]="values.dimensions.productSliderWidth" *ngFor="let item of related">\n\n                        <ion-card>\n\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.scrollProductHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n\n                            <h5>{{item.name}}</h5>\n\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span *ngIf="item.sale_price">\n\n            <del class="price-delete">{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </del>\n\n            </span> </ion-label>\n\n                        </ion-card>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="upsell?.length" class="related-products">\n\n                <div class="devider"></div>\n\n                <ion-item *ngIf="upsell" class="related-item-name"> {{"You may also like" | translate}} </ion-item>\n\n                <div class="scroll-related-products">\n\n                    <a [style.width.%]="values.dimensions.productSliderWidth" *ngFor="let item of upsell">\n\n                        <ion-card>\n\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.scrollProductHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n\n                            <h5>{{item.name}}</h5>\n\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </span> <span *ngIf="item.sale_price">\n\n            <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n            </del>\n\n            </span> </ion-label>\n\n                        </ion-card>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="crossSell?.length" class="related-products">\n\n                <div class="devider"></div>\n\n                <ion-item *ngIf="crossSell" class="related-item-name"> {{"Recommended Products" | translate}} </ion-item>\n\n                <div class="scroll-related-products">\n\n                    <a [style.width.%]="values.dimensions.productSliderWidth" *ngFor="let item of crossSell">\n\n                        <ion-card>\n\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.scrollProductHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n\n                            <h5>{{item.name}}</h5>\n\n                            <ion-label> <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n\n              </span> <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n\n              </span> <span *ngIf="item.sale_price">\n\n              <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n\n              </del>\n\n              </span> </ion-label>\n\n                        </ion-card>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n            <div *ngIf="reviews?.length" style="margin-top: 5px;">\n\n                <div class="devider"></div>\n\n                <ion-item *ngIf="reviews" class="item-background"> {{"Reviews" | translate}} </ion-item>\n\n                <div *ngFor="let item of reviews | slice:0:2; let i=index" class="reviews">\n\n                    <ion-item no-lines>\n\n                        <ion-avatar item-start style="margin:8px"> <img src="https://www.gravatar.com/avatar/{{item.avatar}}"> </ion-avatar>\n\n                        <h3 style="margin-bottom:6px;font-size:15px">{{item.name}} <span class="rating review-star">\n\n             <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span> </span>\n\n                        </h3>\n\n                        <h3 style="color:#9e9898;margin-bottom:4px">{{item.date_created | date:\'MMM d, y hh:mm a\'}}</h3>\n\n                    </ion-item>\n\n                    <p text-wrap>{{item.review}}</p>\n\n                </div>\n\n                <ion-item no-lines class="show-more">\n\n                    <h2 (click)="showMoreReviews(product.name, product.rating_count, product.average_rating)"><span class="span1">{{"Show more" | translate}}</span><span class="span2"><ion-icon name="ios-more"></ion-icon></span></h2>\n\n                </ion-item>\n\n            </div>\n\n        </div>\n\n        </div>\n\n        </div>\n\n    </div> </ion-content>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\product\product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProductPage);
    return ProductPage;
    var ProductPage_1;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_billing_address_form_billing_address_form__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CartPage = /** @class */ (function () {
    function CartPage(nav, service, values, params, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.addProduct = true;
        this.disableSubmit = false;
        this.buttonCoupon = false;
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
        this.service.loadCart()
            .then(function (results) { return _this.handleCartInit(results); });
    }
    CartPage.prototype.handleCartInit = function (results) {
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    };
    CartPage.prototype.handleCart = function (results) {
        this.cart = results;
    };
    CartPage.prototype.delete = function (key) {
        var _this = this;
        this.service.deleteItem(key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableSubmit = true;
        this.Checkout = "Please Wait";
        this.service.checkout()
            .then(function (results) { return _this.handleAnother(results); });
    };
    CartPage.prototype.handleAnother = function (co) {
        var _this = this;
        this.service.getProvinces().then(function (results) { return _this.handleProvince(results, co); });
    };
    CartPage.prototype.handleProvince = function (prov, co) {
        var _this = this;
        this.service.getCity().then(function (results) { return _this.handleCity(results, co, prov); });
    };
    CartPage.prototype.handleCity = function (ci, co, prov) {
        var _this = this;
        this.service.getSubdisctrict().then(function (results) { return _this.handleBilling(results, ci, co, prov); });
    };
    CartPage.prototype.handleBilling = function (sub, ci, co, prov) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */], {
            subdistrict: sub,
            city: ci,
            checkout: co,
            provinces: prov
        });
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        this.service.deleteFromCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.addToCart = function (id, key) {
        var _this = this;
        this.service.addToCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.updateCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.submitCoupon = function () {
        var _this = this;
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon)
                .then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.cart.coupon = "";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.removeCoupon = function () {
        var _this = this;
        this.service.removeCoupon(this.cart.applied_coupons)
            .then(function (results) { return _this.handleRemoveCoupon(results); });
    };
    CartPage.prototype.handleRemoveCoupon = function (results) {
        var _this = this;
        this.functions.showAlert(results.status, results.message);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleResults = function (a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    };
    CartPage.prototype.updateShipping = function (method) {
        var _this = this;
        this.chosen_shipping = method;
        this.service.updateShipping(method)
            .then(function (results) { return _this.handleShipping(results); });
    };
    CartPage.prototype.handleShipping = function (results) {
        this.cart = results;
    };
    CartPage.prototype.gohome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    CartPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], id);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\cart\cart.html"*/'<ion-header class="cart-header">\n\n    <ion-navbar color="header"> \n\n        <button ion-button menuToggle>\n\n           <ion-icon name="menu">\n\n           </ion-icon>\n\n        </button>\n\n        <ion-title>{{"Cart"| translate}} \n\n        </ion-title>\n\n        <ion-buttons end> \n\n            <button ion-button icon-only light class="has-icon icon-only has-badge">\n\n            <ion-icon color="icon-color" name="md-basket">\n\n            </ion-icon>\n\n            <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n\n            </ion-badge>\n\n            </button> \n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cart">\n\n    <div class="spinner"><ion-spinner *ngIf="!cart" name="crescent"> </ion-spinner></div>\n\n\n\n    <div *ngIf="cart">\n\n        <div class="empty" *ngIf="cart.cart_contents.length == 0"> \n\n            <ion-icon color="icon-color" name="md-basket"></ion-icon>\n\n            <h4 color="side-heading-color" text-center no-lines>{{"Your Cart Is Empty" | translate}}!</h4>\n\n            <h5 text-center no-lines>{{"Add some products available in our menu to checkout" | translate}}</h5> \n\n            <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Continue Shopping" | translate}}</button> \n\n        </div>\n\n\n\n        <div *ngIf="cart?.cart_contents">\n\n            <div class="cart-items">\n\n                <div class="cart-list" *ngFor="let item of cart.cart_contents | keys">\n\n                    <ion-item no-lines>\n\n                        <ion-thumbnail item-left (click)="getProduct(item.value.product_id)"> \n\n                            <img src="{{item.value.thumb}}"> \n\n                        </ion-thumbnail>\n\n                        <h2 wrap-text class="item-name">{{item.value.name}} </h2>\n\n                        <div *ngIf="item.value?.variation">\n\n                        <h3 wrap-text *ngFor="let variation of item.value.variation | keys">{{variation.value}}</h3>\n\n                        </div>\n\n                        <h3 wrap-text> {{"Price" | translate}}: {{item.value.price | currency:values.currency:symbol:\'1.2-2\'}} </h3>\n\n                        <h3 wrap-text> {{"Total" | translate}}: {{1*item.value.line_subtotal | currency:values.currency:symbol:\'1.2-2\'}} </h3>\n\n                        <a (click)="delete( item.key )">\n\n                            <ion-icon name="md-trash" style="font-size: 18px;color: #607D8B;"> </ion-icon>\n\n                        </a>\n\n\n\n                        <div class="add-remove-button"> \n\n                            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="deleteFromCart(item.value.product_id, item.key)">\n\n                                <ion-icon name="md-remove"></ion-icon>\n\n                            </button> \n\n                            <button ion-button item-right color="button-color" clear style="border: 0; margin: 0 5px;">{{item.value.quantity}}\n\n                            </button> \n\n                            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="addToCart(item.value.product_id, item.key)">\n\n                                <ion-icon name="md-add">\n\n                                </ion-icon>\n\n                            </button> \n\n                        </div>\n\n                    </ion-item>\n\n                </div>\n\n            </div>\n\n\n\n            <div *ngIf="cart.cart_contents.length != 0">\n\n                <!--ion-list *ngIf="shipping.length" no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateShipping(chosen_shipping)" class="shipping-methods">\n\n                    <ion-item-divider>\n\n                        <h2>{{"Select a shipping method" | translate}} </h2>\n\n                    </ion-item-divider>\n\n                    <ion-item *ngFor="let method of shipping | keys">\n\n                        <ion-label>{{method.value.method_title}} \n\n                            <span *ngIf="method.value.cost">{{ 1*method.value.cost | currency:values.currency:symbol:\'1.2-2\'}}\n\n                            </span> \n\n                        </ion-label>\n\n                        <ion-radio value="{{method.value.id + \':\' + method.value.instance_id}}"> </ion-radio>\n\n                    </ion-item>\n\n                </ion-list-->\n\n\n\n                <form #f="ngForm" class="coupon">\n\n                    <ion-item>\n\n                        <ion-label>{{"Coupon Code" | translate}}</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="cart.coupon" name="coupon"> </ion-input>\n\n                        <h2 item-right> \n\n                            <button ion-button color="button-color" block type="submit" text-uppercase [disabled]=\'disableSubmitCoupon\' (click)="submitCoupon()"> {{Apply | translate}}\n\n                            </button> \n\n                        </h2>\n\n                    </ion-item>\n\n                </form>\n\n\n\n                <ion-list class="totals" *ngIf="cart.cart_totals">\n\n                    <ion-row>\n\n                        <ion-col width-75>\n\n                            <ion-label>{{"SubTotal" | translate}} </ion-label>\n\n                        </ion-col>\n\n                        <ion-col width-25 text-end>\n\n                            <ion-label>{{1*cart.cart_totals.subtotal | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="cart.cart_totals.cart_contents_total != 0">\n\n                        <ion-col width-75>\n\n                            <ion-label>{{"Subtotal_ex_tax" | translate}} </ion-label>\n\n                        </ion-col>\n\n                        <ion-col width-25 text-end>\n\n                            <ion-label>{{1*cart.cart_totals.cart_contents_total | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="cart.cart_totals.total_tax != 0">\n\n                        <ion-col width-75>\n\n                            <ion-label>{{"Tax Total" | translate}} </ion-label>\n\n                        </ion-col>\n\n                        <ion-col width-25 text-end>\n\n                            <ion-label>{{1*cart.cart_totals.total_tax | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="cart.cart_totals.discount_total && cart.cart_totals.discount_total != 0">\n\n                        <ion-col width-75 class="remove-coupon">\n\n                            <ion-label>{{"Coupons" | translate}} - {{cart.applied_coupons}} <a (click)="removeCoupon()"> (Remove)</a> </ion-label>\n\n                        </ion-col>\n\n                        <ion-col width-25 text-end>\n\n                            <ion-label>- {{1*cart.cart_totals.discount_total | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row *ngIf="cart.cart_totals.shipping_total != 0">\n\n                        <ion-col width-75>\n\n                            <ion-label>{{"Shipping" | translate}} </ion-label>\n\n                        </ion-col>\n\n                        <ion-col width-25 text-end>\n\n                            <ion-label>{{1*cart.cart_totals.shipping_total | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col width-75>\n\n                            <ion-label> <b> {{"Grand Total" | translate}}</b> </ion-label>\n\n                        </ion-col>\n\n                        <ion-col width-25 text-end>\n\n                            <ion-label>{{1*cart.cart_totals.total | currency:values.currency:symbol:\'1.2-2\'}} </ion-label>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-list>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<div *ngIf="cart">\n\n    <ion-footer *ngIf="cart.cart_contents.length != 0"> \n\n        <button ion-button full color="button-color" no-padding no-margin text-uppercase [disabled]=\'disableSubmit\' (click)="checkout()"> {{Checkout | translate}}\n\n        </button> \n\n    </ion-footer>\n\n</div>'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyModel; });
var defaultImages = [
    "https://flexsurveys.com/wp-content/uploads/FlexSurveysEmployeeEngagementSurvey-Trans.png",
    "https://static.e-encuesta.com/wp-content/uploads/satisfaccion-cliente-v6.png",
    "http://www.redcresearch.ie/wp-content/uploads/2015/12/14.png",
    "http://www.redcresearch.ie/wp-content/uploads/2015/12/30.png"
];
var SurveyModel = /** @class */ (function () {
    // Copy constructor.
    function SurveyModel(obj) {
        this.AllowAccessResult = obj['AllowAccessResult'];
        this.CreatedAt = obj['CreatedAt'];
        this.CreatorId = obj['CreatorId'];
        this.Id = obj['Id'];
        this.IsArchived = obj['IsArchived'];
        this.IsPublished = obj['IsPublished'];
        this.Name = obj['Name'];
        this.PostId = obj['PostId'];
        this.PublishId = obj['PublishId'];
        this.ResultId = obj['ResultId'];
        this.StoreIPAddress = obj['StoreIPAddress'];
        this.UseCookies = obj['UseCookies'];
        this.UserId = obj['UserId'];
        this.Image = obj['Image'] || defaultImages[Math.floor(Math.random() * defaultImages.length)];
    }
    // New static method.
    SurveyModel.fromJSONArray = function (array) {
        return array.map(function (obj) { return new SurveyModel(obj); });
    };
    return SurveyModel;
}());

//# sourceMappingURL=survey.model.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeysPipeModule = /** @class */ (function () {
    function KeysPipeModule() {
    }
    KeysPipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipe__["a" /* KeysPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipe__["a" /* KeysPipe */]]
        })
    ], KeysPipeModule);
    return KeysPipeModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey_survey__ = __webpack_require__(723);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__survey_survey__["a" /* SurveyComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__survey_survey__["a" /* SurveyComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_angular__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as ko from 'knockout'; window['knockout'] = ko;
/**
 * Generated class for the SurveyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
    }
    Object.defineProperty(SurveyComponent.prototype, "survey", {
        set: function (survey) {
            __WEBPACK_IMPORTED_MODULE_1_survey_angular__["Survey"].cssType = "bootstrap";
            __WEBPACK_IMPORTED_MODULE_1_survey_angular__["defaultBootstrapCss"].navigationButton = "btn btn-green";
            this._survey = survey;
            var surveyModel = new __WEBPACK_IMPORTED_MODULE_1_survey_angular__["ReactSurveyModel"]({ surveyId: this._survey.Id });
            // Change language.
            surveyModel.locale = "en";
            // Progress Bar.
            surveyModel.showProgressBar = 'bottom';
            surveyModel.onComplete.add(this.sendDataToServer.bind(this));
            __WEBPACK_IMPORTED_MODULE_1_survey_angular__["SurveyNG"].render('surveyElement', { model: surveyModel });
        },
        enumerable: true,
        configurable: true
    });
    SurveyComponent.prototype.ionViewDidLoad = function () {
    };
    SurveyComponent.prototype.sendDataToServer = function (survey) {
        //console.log("sendDataToServer");
        //console.log("postId", this._survey.PostId);
        survey.sendResult(this._survey.PostId);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SurveyComponent.prototype, "survey", null);
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'survey',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\components\survey\survey.html"*/'<!-- Generated template for the SurveyComponent component -->\n\n\n\n<div id="surveyElement"></div>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\ionic-arwcn3\src\components\survey\survey.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SurveyComponent);
    return SurveyComponent;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimingInterceptor = /** @class */ (function () {
    function TimingInterceptor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    TimingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var started = Date.now();
        return next
            .handle(req)
            .do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                var elapsed = Date.now() - started;
                console.log("---> Request for " + req.urlWithParams + " took " + elapsed + " ms.");
                console.log('---> Status:', event.status);
                //console.log('---> Filter:', req.params.get('filter'));
            }
        }, function (err) {
            _this.handleError(err);
        });
    };
    TimingInterceptor.prototype.handleError = function (err) {
        // Do messaging and error handling here.
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.log("Backend returned code " + err.status + ", body was:", err.error);
        }
        //this.presentAlert(err.message);
    };
    TimingInterceptor.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    TimingInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], TimingInterceptor);
    return TimingInterceptor;
}());

//# sourceMappingURL=timing-interceptor.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map