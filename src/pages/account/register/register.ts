import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { Home } from '../../home/home';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
    templateUrl: 'register.html'
})
export class AccountRegister {
    registerData: any;
    loadRegister: any;
    countries: any;
    status: any;
    public disableSubmit: boolean = false;
    errors: any;
    loginStatus: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    Register: any;
    constructor(public nav: NavController, public service: Service, public platform: Platform, public functions: Functions, private oneSignal: OneSignal, public values: Values) {
        this.Register = "Register Account";
        this.registerData = {};
        this.countries = {};
        this.registerData.billing = {};
        this.registerData.shipping = {};
        this.service.getNonce()
            .then((results) => this.handleResults(results));
    }
    handleResults(results) {
        this.countries = results;
    }
    getBillingRegion(countryId) {
        this.registerData.billing_state = "";
        this.billing_states = this.countries.state[countryId];
    }
    getShippingRegion(countryId) {
        this.shipping_states = this.countries.state[countryId];
    }
    validateForm() {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false
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
    }
    registerCustomer() {
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.Register = "Registering";
            console.log(this.registerData);
            this.service.registerCustomer(this.registerData).then((results) => this.handleRegister(results));
        }
    }
    handleRegister(results) {
        this.disableSubmit = false;
        this.Register = "Register Account";
        if (results.code) {
            this.errors = results;
        } else if (!results.code) {
            this.countries.checkout_login;
            this.service.login(this.registerData).then((results) => {
                this.loginStatus = results
            });
            this.functions.showAlert("Success", "Registration successfull..");
            this.nav.setRoot(Home);
            if (this.platform.is('cordova')) {
                this.oneSignal.getIds().then((data: any) => {
                    this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({
                    email: this.registerData.email,
                    pincode: this.registerData.billing_address.postcode,
                    city: this.registerData.billing_address.city
                });
            }

        }
    }
}