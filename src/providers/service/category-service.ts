import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from './config';
import { Values } from './values';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class CategoryService {
    data: any;
    url: any;
    products: any;
    banners: any;
    filters: any;
    status: any;
    product: any;
    cart: any;
    code: any;
    options: any;
    loader: any;
    attributes: any;
    attribTerms: any;
    
    constructor(private http: Http, private config: Config, private values: Values, private loadingController: LoadingController) {

    }
    load(params) {
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), this.config.optionstwo).map(res => res.json())
                .subscribe(data => {
                    this.products = data;
                    resolve(this.products);
                });
        });
    }
    loadMore(filter) {
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products?', filter), this.config.optionstwo).map(res => res.json())
                .subscribe(data => {
                    this.products = data;
                    resolve(this.products);
                });
        });
    }
    addToCart(params) {
        return new Promise(resolve => {
            var searchParams = new URLSearchParams();
            for (let param in params) {
                searchParams.set(param, params[param]);
            }
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, this.config.options).map(res => res.json())
                .subscribe(data => {
                    this.status = data.cart;
                    this.values.cartNonce = data.cart_nonce;
                    this.values.updateCartTwo(this.status);
                    resolve(this.status);
                });
        });
    }
    deleteFromCart(id) {
        var params = new URLSearchParams();
        for (let key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0
                }
                else {
                    this.values.cartItem[key].quantity -= 1
                };
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0
                }
                else {
                    this.values.cart[id] -= 1
                };
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(resolve => {
            this.http.post(this.config.url + '/cart/', params, this.config.options)
                .subscribe(data => {
                    this.status = data;
                    resolve(this.status);
                });
        });
    }
    updateToCart(id) {
        var params = new URLSearchParams();
        for (let key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0
                }
                else {
                    this.values.cartItem[key].quantity += 1
                };
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0
                }
                else {
                    this.values.cart[id] += 1
                };
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(resolve => {
            this.http.post(this.config.url + '/cart/', params, this.config.options)
                .subscribe(data => {
                    this.status = data;
                    resolve(this.status);
                });
        });
    }
    presentLoading(text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    }
    dismissLoading() {
        this.loader.dismiss();
    }
    search(params) {
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.products = data;
                resolve(this.products);
            });
        });
    }
    addToWishlist(id) {
        return new Promise(resolve => {
            var params = new URLSearchParams();
            params.append("product_id", id);
            params.append("customer_id", this.values.customerId.toString());
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
                this.status = data;
                resolve(this.status);
            });
        });
    }
    deleteItem(id) {
        var params = new URLSearchParams();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
    getAttributes() {
        if (this.values.attributes) {
            return Promise.resolve(this.values.attributes);
        }
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/attributes?', false), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.values.attributes = data;
                resolve(this.values.attributes);
            });
        });
    }
    attributeTerms(id) {
        if (this.values.attributeTerms[id]) {
            return Promise.resolve(this.values.attributeTerms[id]);
        }
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/attributes/' + id + '/terms?', false), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.values.attributeTerms[id] = data;
                resolve(this.values.attributeTerms[id]);
            });
        });
    }
}