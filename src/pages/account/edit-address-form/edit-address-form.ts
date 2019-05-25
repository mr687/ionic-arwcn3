import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Values } from '../../../providers/service/values';
import { Address } from '../address/address';



@Component({
    templateUrl: 'edit-address-form.html'
})
export class EditAddressForm {
    status: any;
    form: any;
    editAddress: any;
    regions: any = [];
    address: any;
    id: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    public disableSubmit: boolean = false;
    Save: any;
    constructor(public nav: NavController, public service: Service, params: NavParams, public values: Values) {
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping_true = true;
        this.service.getCountry()
            .then((results) => this.handleContries(results));
    }
    handleContries(results) {
        this.country = results;
        this.billing_states = this.country.state[this.editAddress.billing.country];
        this.shipping_states = this.country.state[this.editAddress.shipping.country];
    }
    getBillingRegion(countryId) {
        this.billing_states = this.country.state[countryId];
    }
    getShippingRegion(countryId) {
        this.shipping_states = this.country.state[countryId];
    }
    saveAddress() {
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
            .then((results) => this.handleSaveAddress(results));
    }
    handleSaveAddress(results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.setRoot(Address);
    }
}