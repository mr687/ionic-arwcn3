import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SearchService } from '../../providers/service/search-service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { ModalController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { ProductPage } from '../product/product';
import { Filter } from '../filter/filter';
import { Sort } from '../sort/sort';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
    templateUrl: 'search.html'
})
export class SearchPage {
    search: any;
    slug: any;
    has_more_items: boolean = true;
    options: any;
    status: any;
    products: any;
    searchInput: any;
    moreProducts: any;
    quantity: any;
    filter: any;
    shouldShowCancel: boolean = true;
    loading : boolean = false;
    showSearch: boolean = true;
    constructor(public iab: InAppBrowser, public toastCtrl: ToastController, public modalCtrl: ModalController, public nav: NavController, public service: SearchService, public values: Values, params: NavParams, public functions: Functions) {
        this.filter = {};
        this.filter.status = 'publish';
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.searchInput = "";
        this.filter.page = 1;
    }
    ionViewWillLeave(){
        this.showSearch = false;
    }
    ionViewDidLeave(){
        this.showSearch = true;
    }
    getCart() {
        this.nav.push(CartPage);
    }
    onInput($event) {
        this.loading = true;
        this.filter.page = 1;
        this.filter.search = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch(this.filter).then((results) => {
            this.loading = false;
            this.products = results;
        });
    }
    onCancel($event) {
        console.log('cancelled');
    }
    external(url){
     var options = "location=yes,hidden=no,toolbar=yes";
            let browser = this.iab.create(url, '_blank', options);
            browser.show();
    }
    getProduct(id) {
        this.nav.push(ProductPage, id);
    }
    doInfinite(infiniteScroll) {
        this.filter.page += 1;
        this.service.getSearch(this.filter).then((results) => this.handleMore(results, infiniteScroll));
    }
    handleMore(results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            };
        }
        if (results == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    }
    deleteFromCart(id) {
        this.service.deleteFromCart(id).then((results) => this.status = results);
    }
     updateToCart(id) {
        this.service.updateToCart(id).then((results) => this.status = results);
    }
    
    addToCart(id, type) {
        if (type == 'variable') {
            this.nav.push(ProductPage, id);
        } else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then((results) => this.updateCart(results));
        }
    }

    updateCart(a) {}
    setListView() {
        this.values.listview = true;
    }

    setGridView() {
        this.values.listview = false;
    }

    addToWishlist(id) {
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then((results) => this.update(results, id));
        } else {
            this.presentToastLoginAlert();
        }
    }

    presentToastLoginAlert() {
        let toast = this.toastCtrl.create({
          message: 'You must login to add item to wishlist',
          duration: 1000,
           position: 'top'
        });
        toast.present();
    }

    update(results, id) {
        if (results.success == "Success") {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        } else {}
    }

    removeFromWishlist(id) {
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then((results) => this.updateWish(results, id));
    }

    updateWish(results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    }
    getFilter() {
        let modal = this.modalCtrl.create(Filter, {filter: this.filter});
        modal.onDidDismiss(data => {
            if (this.values.applyFilter) {
                this.filter = this.values.filter;
                this.has_more_items = true;
                this.filter.page = 1;
                this.filter.opts = undefined;
                this.filter.component = undefined;
                this.service.getSearch(this.filter).then((results) => this.handleFilterResults(results));
            }
        });
        modal.present();
    }
    getSort() {
        let modal = this.modalCtrl.create(Sort, {filter: this.filter});
        modal.onDidDismiss(data => {
            if (this.values.applyFilter) {
                this.filter = this.values.filter;
                this.has_more_items = true;
                this.filter.page = 1;
                this.filter.opts = undefined;
                this.filter.component = undefined;
                this.service.getSearch(this.filter).then((results) => this.handleFilterResults(results));
            }
        });
        modal.present();
    }
    handleFilterResults(results) {
        this.products = results;
    }
}