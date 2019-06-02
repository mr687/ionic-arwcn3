import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CheckoutService } from '../../../providers/service/checkout-service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { OrderSummary } from '../../checkout/order-summary/order-summary';
import { TermsCondition } from '../../checkout/terms-condition/terms-condition';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
    templateUrl: 'billing-address-form.html'
})
export class BillingAddressForm {
    billingAddressForm: any;
    billing: any;
    city: any;
    regions: any;
    status: any;
    errorMessage: any;
    address: any;
    form: any;
    states: any;
    suite: any;
    OrderReview: any = {};
    loginData: any;
    id: any;
    couponStatus: any;
    showCreateAccont: boolean = false;
    buttonSubmit: boolean = false;
    buttonSubmitLogin: boolean = false;
    buttonSubmitCoupon: boolean = false;
    loading: boolean = false;
    PlaceOrder: any;
    buttonText1: any;
    LogIn: any;
    mydate: any;
    time: any;
    date: any;
    selectedDate: any;
    shipping: any;
    order: any;
    buttonText : any;
    chosen_shipping: any = [];
    provinces:any;
    cityByProv:any;
    subdistrict:any;
    
    constructor(public iab: InAppBrowser, public nav: NavController, public service: CheckoutService, public platform: Platform, private oneSignal: OneSignal, params: NavParams, public functions: Functions, public values: Values) {
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
    getRegion(countryId) {
        // console.log('countryId.form', this.form);
        this.states = this.form.state[countryId];
        // console.log('this.states', this.states);
        this.service.updateOrderReview(this.form, this.OrderReview.shipping)
            .then((results) => this.handleOrderReviews(results));
    }
    getCity(stateId) {
        // console.log("dapi hai");
        var province = this.provinces[stateId];
        // console.log('stateId', stateId);
        // console.log('provinceId', province);
        var citi = [];
        for(var i=0;i<this.cityByProv.length;i++){
            if(this.cityByProv[i].province_id == province.province_id){
                citi.push(this.cityByProv[i]);
            }
        }
        this.city = citi;
        // console.log('this.cityDaph', this.city);
        this.service.updateOrderReview(this.form, this.OrderReview.shipping)
            .then((results) => this.handleOrderReviews(results));
    }
    getSubdistrict(cityId) {
        // console.log('stateId', cityId);
        var district = [];
        for(var i=0;i<this.subdistrict.length;i++){
            if(this.subdistrict[i].city_id == cityId){
                district.push(this.subdistrict[i]);
            }
        }
        this.suite = district;
        // console.log('this.suiteDaph', this.suite);
        this.service.updateOrderReview(this.form, this.OrderReview.shipping)
            .then((results) => this.handleOrderReviews(results));
    }
    handleOrderReviews(results){
    // console.log('this.form', this.form);
      this.loading = false;
      this.OrderReview = results;
    }
    checkout() {
        this.buttonSubmit = true;
        this.PlaceOrder = "Placing Order";

        if (this.platform.is('cordova'))
        this.oneSignal.getIds().then((data: any) => {
            this.form.onesignal_user_id = data.userId;
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
                .then((results) => this.handleBilling(results));
        }
        else if (this.form.payment_method == 'stripe') {
            this.service.getStripeToken(this.form)
                .then((results) => this.handleStripeToken(results));
        }
        else {
            this.service.checkout(this.form)
                .then((results) => this.handlePayment(results));
        }
    }
    handlePayment(results) {
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            let browser = this.iab.create(results.redirect, '_blank', options);
            browser.show();
            browser.on('loadstart').subscribe(data => {
                if (data.url.indexOf('order-received') != -1 && data.url.indexOf('return=') == -1) {
                    this.values.cart = [];
                    this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    this.nav.push(OrderSummary, order_id);
                    browser.hide();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser.close();
                    this.buttonSubmit = false;
                }    
            });
            browser.on('exit').subscribe(data => {
                this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    }
    checkoutStripe() {
        this.buttonSubmit = true;
        this.PlaceOrder = "Placing Order";
        this.service.getStripeToken(this.form)
            .then((results) => this.handleStripeToken(results));
    }
    handleStripeToken(results) {
        if (results.error) {
            this.buttonSubmit = false;
            this.PlaceOrder = "Place Order";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results)
                .then((results) => this.handleBilling(results));
                this.buttonSubmit = false;
        }
    }
    handleBilling(results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("order-received/");
            var pos2 = str.lastIndexOf("?key=wc_order");
            var pos3 = pos2 - (pos1 + 15);
            var order_id = str.substr(pos1 + 15, pos3);
            this.nav.push(OrderSummary, order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.PlaceOrder = "Place Order";
    }
    login() {
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.LogIn = "Please Wait";
            this.service.login(this.form)
                .then((results) => this.handleResults(results));
        }
    }
    validateForm() {
        if (this.form.username == undefined || this.form.username == "") {
            return false
        }
        if (this.form.password == undefined || this.form.password == "") {
            return false
        }
        else {
            return true
        }
    }
    handleResults(result) {
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
    }
    createAccount() {
        this.showCreateAccont = true;
    }
    changePayment() {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    }
    terms(){
        this.nav.push(TermsCondition, this.form.terms_content);
    }
    updateOrderReview() {
        this.loading = true;
        this.service.updateOrderReview(this.form, this.OrderReview.chosen_shipping)
            .then((results) => this.handleOrderReviews(results));
    }
}