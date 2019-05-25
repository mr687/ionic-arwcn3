import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Config } from './config';
import { Values } from './values';
import { URLSearchParams } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class Service {
    data: any;
    url: any;
    categories: any;
    banners: any;
    orders: any;
    order: any;
    isloggedIn: any;
    status: any;
    address: any;
    headers: any;
    products: any;
    product: any;
    cart: any;
    configuration: any;
    loader: any;
    loginStatus: any;
    mainCategories: any;
    country: any;
    user: any;
    login_nonce: any;
    googleResponse: any;
    filter: any;
    fbResponse: any;
    has_more_items: boolean = true;
    featuredProduct: any;
    onSale: any;
    blocks: any = [];
    constructor(private reqhttp: HTTP, private http: Http, private config: Config, private values: Values, public loadingCtrl: LoadingController, private nativeStorage: NativeStorage) {
        this.mainCategories = [];
        this.filter = {};
        this.filter.status = 'publish';
        this.filter.page = 1;
    }
    load() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys', this.config.options).map(res => res.json()).subscribe(data => {
                this.values.data = data;
                this.values.settings = data.settings;
                this.blocks = data.blocks;
                this.getCategories(1);
                for (let item in this.blocks) {
                    var filter;
                    if (this.blocks[item].block_type == 'product_block') {
                        if(this.blocks[item].filter_by == 'tag')
                        filter = {tag: this.blocks[item].link_id, status: 'publish'};
                        else filter = {category: this.blocks[item].link_id, status: 'publish'};
                        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                            this.blocks[item].products = data;
                        });
                    }
                    if (this.blocks[item].block_type == 'flash_sale_block') {
                        if(this.blocks[item].filter_by == 'tag')
                        filter = {tag: this.blocks[item].link_id, status: 'publish'};
                        else filter = {category: this.blocks[item].link_id, status: 'publish'};
                        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                            this.blocks[item].products = data;
                        });
                        this.blocks[item].interval = setInterval(() => {
                        var countDownDate = new Date(this.blocks[item].sale_ends).getTime();
                            var now = new Date().getTime();
                            var distance = countDownDate - now;
                            this.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            this.blocks[item].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            this.blocks[item].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            this.blocks[item].seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            if (distance < 0) {
                                clearInterval(this.blocks[item].interval);
                                this.blocks[item].hide = true;
                            }
                        }, 1000);
                    }
                }
                this.values.currency = data.currency;
                this.login_nonce = data.login_nonce;
                this.banners = data.banners;
                this.values.max_price = data.max_price;
                this.values.price.upper = data.max_price;
                if (data.user && data.user.data != undefined) {
                    this.values.isLoggedIn = data.user.data.status;
                    this.values.customerId = data.user.data.ID;
                    this.values.customerName = data.user.data.display_name;
                    //this.values.avatar = data.user.data.avatar_url;
                    //this.values.logoutUrl = this.encodeUrl(data.user.data.url);
                    this.nativeStorage.getItem('loginData').then(data => {
                        if (data.type == 'social') {
                            this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                        }
                    }, error => console.error(error));
                } else {
                    this.nativeStorage.getItem('loginData').then(data => {
                        if (data.type == 'woo') {
                            //this.values.avatar = data.avatar;
                            this.login(data);
                        } else if (data.type == 'social') {
                            this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                            this.socialLogin(data.username);
                        }
                    }, error => console.error(error));
                }
                setTimeout(() => {
                    this.nativeStorage.setItem('blocks', data).then(data => console.log('Blocks Saved'), error => {
                    console.error("Blocks Storing error");console.error(error);
                    });      
                }, 10000);
                this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', this.config.options).map(res => res.json()).subscribe(data => {
                    this.cart = data;
                    this.values.updateCart(this.cart);
                    this.values.cartNonce = this.cart.cart_nonce;
                });
                if (this.values.isLoggedIn) {
                    var params = new URLSearchParams();
                    params.append("customer_id", this.values.customerId.toString());
                    this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
                        for (let item in data) {
                            this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                }
                resolve(true);
            });
        });
    }
    getCategories(page){
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v2/products/categories?', {
            per_page: 100, page: page
        }), this.config.optionstwo).map(res => res.json()).subscribe(data => {
        if(page == 1)
            this.categories = data;
        else {
            this.categories.push.apply( this.categories, data );
        }   
        if(data.length == 100)
            this.getCategories(page + 1);
        else {
            this.mainCategories = this.categories.filter(item => item.parent === 0 && item.name !== 'Uncategorized');
            this.nativeStorage.setItem('categories', this.categories).then(data => console.log('Saved'), error => console.error(error)); 
        }    
        });     
    }
    getNonce() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
    login(loginData) {
        var params = new URLSearchParams();
        params.append("username", loginData.username);
        params.append("password", loginData.password);
        params.append("_wpnonce", this.login_nonce);
        params.append("login", 'Login');
        params.append("redirect", this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login', params, this.config.options).map(res => res.json()).subscribe(data => {
                if (!data.errors) {
                    this.values.isLoggedIn = true;
                    this.values.customerName = data.data.display_name;
                    this.values.customerId = data.data.ID;
                    //this.values.logoutUrl = this.encodeUrl(data.data.url);
                    //this.values.avatar = data.data.avatar_url;
                    params = new URLSearchParams();
                    params.append("customer_id", this.values.customerId.toString());
                    this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, this.config.options).map(res => res.json()).subscribe(data => {
                        for (let item in data) {
                            this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    this.nativeStorage.setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password,
                        type: 'woo'
                    }).then(data => console.log('Login Details Stored'), error => console.error(error));
                }
                resolve(data);
            }, err => {
                resolve(JSON.parse(err._body));
                console.log(err._body)
            });
        });
    }
    encodeUrl(href) {
        return href.replace(/&amp;/g, '&')
    }
    logout() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', this.config.options).subscribe(data => {
                this.values.isLoggedIn = false;
                this.values.customerName = "";
                this.nativeStorage.setItem('loginData', {}).then(data => console.log('Login Data cleared'), error => console.error(error));
                this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', this.config.options).map(res => res.json()).subscribe(data => {
                    this.cart = data;
                    this.values.updateCart(this.cart);
                });
                resolve(this.cart);
            });
        });
    }
    passwordreset(email, nonce, url) {
        var params = new URLSearchParams();
        params.append("user_login", email);
        params.append("wc_reset_password", "true");
        params.append("_wpnonce", nonce);
        params.append("_wp_http_referer", '/my-account/lost-password/');
        return new Promise(resolve => {
            this.http.post(this.config.url + '/my-account/lost-password/', params, this.config.options).subscribe(status => {
                resolve(status);
            });
        });
    }
    passwordResetNonce() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
    getAddress() {
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/customers/' + this.values.customerId + '?', false), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.address = data;
                resolve(this.address);
            });
        });
    }
    saveAddress(address) {
        var params = address;
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(resolve => {
            this.reqhttp.put(this.config.setUrl('PUT', '/wp-json/wc/v3/customers/' + this.values.customerId + '?', false), params, {}).then(data => {
                resolve(data);
            }, err => console.log(err));
        });
    }
    pushNotification(notification) {
        var params = new URLSearchParams();
        params.append("device_id", notification.device_id);
        params.append("platform", notification.platform);
        params.append("email", notification.email);
        params.append("city", notification.city);
        params.append("state", notification.state);
        params.append("country", notification.country);
        params.append("pincode", notification.pincode);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, this.config.options).map(res => res.json()).subscribe(data => {
                this.status = data;
                resolve(this.status);
            });
        });
    }
    pushNotify(deviceId, platform) {
        var params = new URLSearchParams();
        params.append("device_id", deviceId);
        params.append("platform", platform);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, this.config.options).map(res => res.json()).subscribe(data => {
                this.status = data;
                resolve(this.status);
            });
        });
    }
    getOrder(id) {
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/orders/' + id + '?', false), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.order = data;
                resolve(this.order);
            });
        });
    }
    getCountry() {
        return new Promise(resolve => {
            this.http.get(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', this.config.options).map(res => res.json()).subscribe(data => {
                this.country = data;
                resolve(this.country);
            });
        });
    }
    registerCustomer(customer) {
        var params = new URLSearchParams();
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
        return new Promise(resolve => {
            this.http.post(this.config.setUrl('POST', '/wp-json/wc/v1/customers?', false), params, this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.user = data;
                console.log(data);
                resolve(this.user);
            }, err => {
                resolve(JSON.parse(err._body));
            });
        });
    }
    getOrders(filter) {
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/orders?', filter), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.orders = data;
                resolve(this.orders);
            });
        });
    }
    updateOrder(data, id) {
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(resolve => {
            this.reqhttp.put(this.config.setUrl('PUT', '/wp-json/wc/v3/orders/' + id + '?', false), data, {}).then(data => {
                this.status = JSON.parse(data.data);
                resolve(this.status);
            }, err => console.log(err));
        });
    }
    presentLoading(text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    }
    dismissLoading() {
        this.loader.dismiss();
    }
    addToWishlist(id) {
        return new Promise(resolve => {
            var params = new URLSearchParams();
            params.append("product_id", id);
            params.append("customer_id", this.values.customerId.toString());
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, this.config.options).subscribe(data => {
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
    getfeaturedProduct() {
        let filter = {status: 'publish', featured: true};
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter), this.config.optionstwo).map(res => res.json()).subscribe(data => {
            this.featuredProduct = data;
        });
    }
    onSaleProduct(){
        let filter = {status: 'publish', on_sale: true};
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', filter), this.config.optionstwo).map(res => res.json()).subscribe(data => {
            this.onSale = data;
        });
    }
    getProducts() {
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', this.filter), this.config.optionstwo).map(res => res.json()).subscribe(data => {
            this.products = data;
        });
    }
    loadMore() {
        this.filter.page += 1;
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/?', this.filter), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.handleMore(data);
                resolve(true);
            });
        });
    }
    handleMore(results) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            };
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
    }
    sendToken(token) {
        var params = new URLSearchParams();
        params.append("access_token", token);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-facebook_connect', params, this.config.options).map(res => res.json()).subscribe(data => {
                console.log(data);
                this.fbResponse = data;
                if (data.status) {
                    this.values.isLoggedIn = true;
                    this.values.setNavigation = true;
                    this.values.customerName = data.last_name;
                    this.values.customerId = data.user_id;
                    //this.values.avatar = data.avatar;
                    this.nativeStorage.setItem('loginData', {
                        username: data.user_login,
                        avatar: data.avatar,
                        type: 'social',
                        displayName: data.last_name
                    }).then(data => console.log('Data Stored'), error => console.error(error));
                    resolve(data);
                }
            });
        });
    }
    googleLogin(res) {
        var params = new URLSearchParams();
        params.append("access_token", res.userId);
        params.append("email", res.email);
        params.append("first_name", res.displayName);
        params.append("last_name", res.displayName);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-google_connect', params, this.config.options).map(res => res.json()).subscribe(data => {
                console.log(data);
                this.googleResponse = data;
                if (data.status) {
                    this.values.isLoggedIn = true;
                    this.values.setNavigation = true;
                    this.values.customerName = res.displayName;
                    this.values.customerId = data.user_id;
                    console.log(data);
                    this.nativeStorage.setItem('loginData', {
                        username: res.email,
                        avatar: res.imageUrl,
                        type: 'social',
                        displayName: res.displayName
                    }).then(data => console.log('Data Stored'), error => console.error(error));
                    resolve(data);
                }
                //this.status = data;
            });
        });
    }
    socialLogin(email) {
        var params = new URLSearchParams();
        params.append("access_token", 'token');
        params.append("email", email);
        this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-google_connect', params, this.config.options).map(res => res.json()).subscribe(data => {
            console.log(data);
            this.googleResponse = data;
            if (data.status) {
                this.values.isLoggedIn = true;
                this.values.setNavigation = true;
                //this.values.customerName = data.displayName;
                this.values.customerId = data.user_id;
            }
        });
    }
    getAttributes() {
        if (this.values.attributes) {
            return Promise.resolve(this.values.attributes);
        }
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/attributes?', {
                per_page: 100
            }), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.values.attributes = data;
                if (this.values.attributes[0]) {
                    this.values.attributes[0].selected = true;
                    this.values.selectedFilter = this.values.attributes[0];
                    resolve(this.values.attributes);
                }
            });
        });
    }
    attributeTerms(id) {
        if (this.values.attributeTerms[id]) {
            return Promise.resolve(this.values.attributeTerms[id]);
        }
        return new Promise(resolve => {
            this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products/attributes/' + id + '/terms?', {
                per_page: 100
            }), this.config.optionstwo).map(res => res.json()).subscribe(data => {
                this.values.attributeTerms[id] = data;
                resolve(this.values.attributeTerms[id]);
            });
        });
    }
    getPage(id: any) {
       var params = new URLSearchParams();
       params.append("page_id", id);
       return new Promise(resolve => {
           this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, this.config.options).map(res => res.json()).subscribe(data => {
               resolve(data);
           });
       });
   }
   subscribeNotification(data) {
        var params = new URLSearchParams();
        params.append("onesignal_user_id", data.userId);
        params.append("onesignal_push_token", data.pushToken);
        return new Promise(resolve => {
            this.http.post(this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_user_notification', params, this.config.options).map(res => res.json()).subscribe(data => {
                resolve(data);
            });
        });
    }
}