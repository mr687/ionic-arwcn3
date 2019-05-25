import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { Config } from '../../../providers/service/config';
import { AccountForgotten } from '../forgotten/forgotten';
import { AccountRegister } from '../register/register';
import { Home } from '../../home/home';
//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';

@Component({
    templateUrl: 'login.html'
})
export class AccountLogin {
    loginData: any;
    loadLogin: any;
    status: any;
    error: any;
    nonce: any;
    avatar: any;
    public disableSubmit: boolean = false;
    LogIn: any;
    facebookSpinner: boolean = false;
    googleSpinner: boolean = false;
    feceres: any;
    userProfile: any;
    gres: any;
    fbres: any;
    constructor(public nav: NavController, public service: Service, public functions: Functions, public values: Values, public config: Config/*, private googlePlus: GooglePlus, private fb: Facebook*/) {
        this.loginData = [];
        this.LogIn = "LogIn";
    }
    login() {
    if (this.validateForm()) {
        this.disableSubmit = true;
        this.LogIn = "Logging In";
        this.service.login(this.loginData).then((results) => this.handleResults(results));
    }
    }
    validateForm() {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false
        } else {
            return true
        }
    }
    handleResults(results) {
        this.disableSubmit = false;
        this.LogIn = "LogIn";
        if (!results.errors) {
            this.functions.showAlert('success', 'You have successfully logged in');
            this.nav.setRoot(Home);
        } else if (results.errors) {
            this.functions.showAlert('error', 'invalid username/password');
        }
    }
    forgotten(loginData) {
        this.nav.push(AccountForgotten);
    }
    signup() {
        this.nav.push(AccountRegister);
    }
    /*facebookLogin() {
        this.facebookSpinner = true;
       this.fb.login(['public_profile', 'user_friends', 'email']).then((response) => {
            console.log(response.authResponse.accessToken);
            //this.functions.showAlert('token', response.authResponse.accessToken);
            this.service.sendToken(response.authResponse.accessToken).then((results) => {
                
                this.facebookSpinner = false;
                this.nav.setRoot(Home);
                
                this.functions.showAlert('success', 'Logged in successfully');
                //this.nav.pop();
                
                //if (this.values.setNavigation) {
                 //   this.nav.setRoot(Home);
                //}
            });
        }).catch((error) => {
            console.log(error)
            this.facebookSpinner = false;
            this.functions.showAlert('Error', error);
        });
    }
    gmailLogin() {
        this.googleSpinner = true;
        this.googlePlus.login({
            'scopes': '',
            'webClientId': this.values.settings.google_web_client_id,
            'offline': true
        }).then((res) => {
             this.gres = res;
             console.log(this.gres);
            this.googleSpinner = false;
            //this.values.avatar = res.imageUrl;
            
            this.service.googleLogin(res).then((results) => {
                this.functions.showAlert('success', 'Logged in successfully');
                this.nav.setRoot(Home);
            });
        }).catch((err) => {
            this.googleSpinner = false;
            this.error = err;
            this.functions.showAlert('Error', err);
            console.error(err);
        });
    }*/
    
}