import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { AccountLogin } from '../login/login';



@Component({
    templateUrl: 'forgotten.html'
})
export class AccountForgotten {
    href: any;
    loadForgotten: any;
    forgottenData: any;
    errorMessage: any;
    status: any;
    login: any;
    nonce: any;
    url: any;
    Reset: any;
    public disableSubmit: boolean = false;
    constructor(public nav: NavController, public service: Service, public functions: Functions, public values: Values) {
        this.Reset = "Reset";
        this.loadForgotten = null;
        this.forgottenData = [];
        this.service.passwordResetNonce()
            .then((results) => this.handleNonce(results));
    }
    forgotten(email) {
        if (this.validateForm()) {
            this.Reset = "Resetting";
            this.disableSubmit = true;
            this.service.passwordreset(email, this.nonce, this.url)
                .then((results) => this.handleResult(results, email));
        }
    }
    validateForm() {
        if (this.forgottenData.email == undefined || this.forgottenData.email == "") {
            return false
        }
        else {
            return true
        }
    }
    handleNonce(results) {
        this.nonce = results.nonce;
        this.url = results.url;
    }
    handleResult(results, email) {
        this.Reset = "Reset";
        this.disableSubmit = false;
        this.functions.showAlert("SUCCESS", "An email with password reset link has been sent to your mail address " + email);
        this.nav.setRoot(AccountLogin);
    }
}