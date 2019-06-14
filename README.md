## Configuration SurveyJS API
 1) To use your own surveys register in [SurveyJS](https://surveyjs.io/Account/Register)
 2) Create your own survey.
 3) In src/providers/survey/survey.ts replace: accessKey with your [SurveyJS API accessKey](https://surveyjs.io/Help/Index/)
    to get your active surveys.
 
 NOTE: To see your survey [results](https://surveyjs.io/Service/MySurveys/)


 ## Configuration Custom Button (Product Page)
 
 In src/pages/product/product.html:170, edit:
  ```html
  <ion-grid class="add-to-cart" *ngIf="product.type != 'external'">
     <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == 'outofstock'" (click)="buyNow(product.id)" style="margin: 0.4rem 0.2rem;width: 100%; min-height: 50px;background-color: #0cd1e8; color: white; box-shadow: none;">{{"Buy now" | translate}}</button>
     <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == 'outofstock'" (click)="addToCart(product.id)" style="margin: 0.4rem 0.2rem;width: 100%; min-height: 50px;box-shadow: none;">{{AddToCart | translate}}</button>
  </ion-grid>
  ```
  
  ## Configuration Field Kota & Kecamatan
  
  In src/pages/checkout/billing-address-form/billing-address-form.html:81, edit:
  ```html
  <ion-item *ngIf="city?.length">
    <ion-label>Town / {{"City" | translate}} </ion-label>
    <ion-select [(ngModel)]="form.billing_city" (ngModelChange)="getSubdistrict(form.billing_city)" name="billing_city">
      <div *ngFor="let field of city">
        <ion-option value="{{field.type}} {{field.city_name}}"><span>{{field.type}} {{field.city_name}}</span> </ion-option>
      </div>
    </ion-select>
   </ion-item>
  .
  .
  .
  <ion-item *ngIf="suite?.length">
    <ion-label> {{"Apartment" | translate}}, {{"suite" | translate}}, {{"unit" | translate}} {{"etc" | translate}} </ion-label>
    <ion-select required [(ngModel)]="form.billing_address_2" (ngModelChange)="form.billing_address_2" name="billing_address_2">
      <div *ngFor="let field of suite">
        <ion-option value="{{field.subdistrict_name}}">Kecamatan {{field.subdistrict_name}}</ion-option>
      </div>
    </ion-select>
   </ion-item>
  ```
  
  ## Ionic Icon
  In resources/android/icon. Rename it.
  
  ## Website Speed Optimization
  1) [Autoptimize](https://wordpress.org/plugins/autoptimize/) plugin added.
  2) [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) plugin added.
  3) [WP Smushit](https://wordpress.org/plugins/wp-smushit/) plugin added.
  4) Adding script in /.htaccess
  5) Image optimization.
  
  ## Adding Custom Fields to Products (Shopping Origin)
  In [Add Product](http://cirung.com/wp-admin/post-new.php?post_type=product) -> Shipping, Change
    1) Shipping Origin Province
    2) Shipping Origin City
    3) Shipping Origin Subdistrict
  
  ###Update 14 June 2019
