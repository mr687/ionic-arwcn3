import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, ToastController } from 'ionic-angular';
import { ProductService } from '../../providers/service/product-service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { md5 } from './md5';


@Component({
    templateUrl: 'reviews.html'
})
export class ReviewPage {
    @ViewChild(Content) content: Content;

    product: any;
    id: any;
    reviews: any;
    reviewForm: any;
    nickname: any;
    name: any;
    count: any;
    rating: any;
    status: any;
    form: any = {};
    buttonSubmitLogin: boolean = false;
    showAddReview:  boolean = false;
    count5: number = 0;
    count4: number = 0;
    count3: number = 0;
    count2: number = 0;
    count1: number = 0;

    count5Percentage: string = '0' + '%';
    count4Percentage: string = '0' + '%';
    count3Percentage: string = '0' + '%';
    count2Percentage: string = '0' + '%';
    count1Percentage: string = '0' + '%';

    constructor(public nav: NavController, public service: ProductService, params: NavParams, public functions: Functions, public values: Values, public toastCtrl: ToastController) {
        this.id = params.data.id;
        this.name = params.data.name;
        this.count = params.data.count;
        this.rating = params.data.rating;
        this.form.rating = 5;

        this.handleReview(params.data.reviews);

  }
  handleReview(reviews) {
      this.reviews = reviews;
      console.log(this.reviews);
      this.reviews.forEach(review => {
          review.avatar = md5(review.email);
          if (review.rating == 5) {
              this.count5 = this.count5 + 1;
          }
          if (review.rating == 4) {
              this.count4 = this.count4 + 1;
          }
          if (review.rating == 3) {
              this.count3 = this.count3 + 1;
          }
          if (review.rating == 2) {
              this.count2 = this.count2 + 1;
          }
          if (review.rating == 1) {
              this.count1 = this.count1 + 1;
          }
      });
      // this.count5 = ((this.count5 / this.count)*100);
      this.count5Percentage = ((this.count5 / this.count) * 100) + '%';
      // this.count4 = ((this.count4 / this.count)*100);
      this.count4Percentage = ((this.count4 / this.count) * 100) + '%';
      // this.count3 = ((this.count3 / this.count)*100);
      this.count3Percentage = ((this.count3 / this.count) * 100) + '%';
      //  this.count2 = ((this.count2 / this.count)*100) + '%';
      this.count2Percentage = this.count2 + '%';
      // this.count1 = ((this.count1 / this.count)*100) + '%';
      this.count1Percentage = this.count1 + '%';
  }
  dismiss() {
      this.nav.pop();
  }
  yourRating(rating) {
      this.form.rating = rating;
  }
  submitComment() {
      this.form.id = this.id;
      if (this.validate()) {
          this.buttonSubmitLogin = true;
          this.service.submitComment(this.form).then((results) => {
              this.status = results;
              this.buttonSubmitLogin = false;
              this.functions.showAlert("Success", "Thank you for your review! Your review is awaiting approval");
          });
      }
  }
  validate() {
      if (!this.values.isLoggedIn) {
          if (this.form.author == undefined || this.form.author == "") {
              this.functions.showAlert("ERROR", "Please Enter Name");
              return false
          }
          if (this.form.email == undefined || this.form.email == "") {
              this.functions.showAlert("ERROR", "Please Enter Email");
              return false
          }
      }
      if (this.form.comment == undefined || this.form.comment == "") {
          this.functions.showAlert("ERROR", "Please Enter Comment");
          return false
      } else return true;
  }
  showSubmitReview() {
      if (this.showAddReview) this.showAddReview = false;
      else this.showAddReview = true;
  }
}