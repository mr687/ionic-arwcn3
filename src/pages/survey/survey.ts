import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController,ItemSliding, NavParams } from 'ionic-angular';

import { SurveyProvider } from '../../providers/survey/survey';

import { SurveyModel } from "../../models/survey.model";

import { ApiWrapper } from '../../providers/survey/api-wrapper';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {

  surveys: SurveyModel[];
  survey:any;
  defaultImages: any;
  noSurveys: boolean = false;
  currentYear = new Date().getFullYear();

  constructor(public navCtrl: NavController, public navParams: NavParams,public surveyProvider: SurveyProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public apiWrapper: ApiWrapper) {
      this.survey = "";
      this.getSurveys();
  }

  getSurveys() {
    let loading = this.loadingCtrl.create({
        content: "Loading..."
    });
    loading.present();
    Observable.forkJoin(this.surveyProvider.getActiveSurveys())
        .subscribe(data => {
            // console.log(data);
            this.surveys = SurveyModel.fromJSONArray(data[0]);
            this.survey = this.surveys[0];
            loading.dismiss();
        },
        error => {
            console.log(<any>error);
            if ((error.message == "Failed to get surveys.") || (error.message == "Http failure response for (unknown url): 0 Unknown Error")) this.noSurveys = true;
            loading.dismiss();
        });
}

getActiveSurveys() {
    let loading = this.loadingCtrl.create({
        content: "Loading..."
    });

    loading.present();

    this.surveyProvider.getActiveSurveys()
        .subscribe(
            data => {
                this.surveys = SurveyModel.fromJSONArray(data);
                loading.dismiss();
            },
            error => {
                console.log(<any>error);
                if ((error.message == "Failed to get surveys.") || (error.message == "Http failure response for (unknown url): 0 Unknown Error")) this.noSurveys = true;
                loading.dismiss();
        }
    );
}

}
