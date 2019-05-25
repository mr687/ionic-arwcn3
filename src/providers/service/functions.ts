import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class Functions {
    loader: any;
    constructor(private alert: AlertController, private loadingController: LoadingController) {
    }
    showAlert(title, text) {
        let alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
    presentLoading() {
        this.loader = this.loadingController.create({
            content: 'Please Wait..'
        })
        this.loader.present();
    }
    dismissLoading() {
        this.loader.dismiss();
    }
}