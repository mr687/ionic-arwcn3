## Configuration SurveyJS API
 1) To use your own surveys register in [SurveyJS](https://surveyjs.io/Account/Register)
 2) Create your own survey.
 3) In src/providers/survey/survey.ts replace: accessKey with your [SurveyJS API accessKey](https://surveyjs.io/Help/Index/)
    to get your active surveys.
 
 NOTE: To see your survey [results](https://surveyjs.io/Service/MySurveys/)


 ## Configuration Custom Button (Product Page)
 
 1) In src/pages/product/product.html:170, edit:
      ```bash
      <ion-grid class="add-to-cart" *ngIf="product.type != 'external'">
         <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == 'outofstock'" (click)="buyNow(product.id)" style="margin: 0.4rem 0.2rem;width: 100%; min-height: 50px;background-color: #0cd1e8; color: white; box-shadow: none;">{{"Buy now" | translate}}</button>
         <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == 'outofstock'" (click)="addToCart(product.id)" style="margin: 0.4rem 0.2rem;width: 100%; min-height: 50px;box-shadow: none;">{{AddToCart | translate}}</button>
      </ion-grid>
      ```