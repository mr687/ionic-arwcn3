import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Address } from '../pages/account/address/address';
import { EditAddressForm } from '../pages/account/edit-address-form/edit-address-form';
import { AccountForgotten } from '../pages/account/forgotten/forgotten';
import { AccountLogin } from '../pages/account/login/login';
import { OrderDetails } from '../pages/account/order-details/order-details';
import { Orders } from '../pages/account/orders/orders';
import { AccountRegister } from '../pages/account/register/register';
import { WishlistPage } from '../pages/account/wishlist/wishlist';
import { CartPage } from '../pages/cart/cart';
import { BillingAddressForm } from '../pages/checkout/billing-address-form/billing-address-form';
import { OrderSummary } from '../pages/checkout/order-summary/order-summary';
import { TermsCondition } from '../pages/checkout/terms-condition/terms-condition';
import { Filter } from '../pages/filter/filter';
import { ProductPage } from '../pages/product/product';
import { ProductsPage } from '../pages/products/products';
import { ReviewPage } from '../pages/reviews/reviews';
import { SearchPage } from '../pages/search/search';
import { Sort } from '../pages/sort/sort';
import { Post } from '../pages/post/post';

/*------------------------ Providers ----------------------------------*/

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { BrowserModule } from '@angular/platform-browser';
import { CartService } from '../providers/service/cart-service';
import { WishlistService } from '../providers/service/wishlist-service';
import { CategoryService } from '../providers/service/category-service';
import { CheckoutService } from '../providers/service/checkout-service';
import { Config } from '../providers/service/config';
import { Functions } from '../providers/service/functions';
import { ProductService } from '../providers/service/product-service';
import { SearchService } from '../providers/service/search-service';
import { Service } from '../providers/service/service';
import { Values } from '../providers/service/values';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OneSignal } from '@ionic-native/onesignal';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HTTP } from '@ionic-native/http';
import { KeysPipeModule } from '../pipes/pipe.module';
import { AppRate } from '@ionic-native/app-rate';
import { EmailComposer } from '@ionic-native/email-composer';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
//import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';

import { SurveyPage } from '../pages/survey/survey';

import { SurveyProvider } from '../providers/survey/survey';
import { ApiWrapper } from '../providers/survey/api-wrapper';
import { TimingInterceptor } from '../interceptors/timing-interceptor';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Address,
    EditAddressForm,
    AccountForgotten,
    AccountLogin,
    OrderDetails,
    SurveyPage,
    Orders,
    AccountRegister,
    WishlistPage,
    CartPage,
    BillingAddressForm,
    OrderSummary,
    TermsCondition,
    Filter,
    Home,
    Post,
    ProductPage,
    ProductsPage,
    ReviewPage,
    SearchPage,
    Sort,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    KeysPipeModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Address,
    EditAddressForm,
    AccountForgotten,
    AccountLogin,
    OrderDetails,
    Orders,
    AccountRegister,
    WishlistPage,
    CartPage,
    BillingAddressForm,
    OrderSummary,
    TermsCondition,
    Filter,
    Home,
    Post,
    ProductPage,
    ProductsPage,
    ReviewPage,
    SearchPage,
    Sort,
    SurveyPage,
  ],

  providers: [
    CartService,
    WishlistService,
    CategoryService,
    CheckoutService,
    Config,
    Functions,
    ProductService,
    SearchService,
    Service,
    Values,
    AppRate,
    EmailComposer,
    //Facebook,
    //GooglePlus,
    ScreenOrientation,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    NativeStorage,
    PhotoViewer,
    SocialSharing,
    OneSignal,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
    SurveyProvider,
    ApiWrapper,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule {}
