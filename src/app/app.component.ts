import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Home } from '../pages/home/home';
import { Service } from '../providers/service/service';
import { Values}  from '../providers/service/values';
import { Config}  from '../providers/service/config';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '@ionic-native/onesignal';
import { AccountLogin } from '../pages/account/login/login';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { CartPage } from '../pages/cart/cart';
import { Post } from '../pages/post/post';
import { AccountRegister } from '../pages/account/register/register';
import { OrderSummary } from '../pages/checkout/order-summary/order-summary';
import { Address } from '../pages/account/address/address';
import { Orders } from '../pages/account/orders/orders';
import { WishlistPage } from '../pages/account/wishlist/wishlist';
import { AppRate } from '@ionic-native/app-rate';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EmailComposer } from '@ionic-native/email-composer';
import { NativeStorage } from '@ionic-native/native-storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SurveyPage } from '../pages/survey/survey';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = Home;
    status: any;
    items: any;
    buttonLanguagesSettings: boolean = false;
    showCategories: boolean = false;
    alert: any;
    constructor(statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController, public config: Config, private oneSignal: OneSignal, public platform: Platform, public service: Service, public values: Values, public translateService: TranslateService, private emailComposer: EmailComposer, private appRate: AppRate, private socialSharing: SocialSharing, private nativeStorage: NativeStorage, private screenOrientation: ScreenOrientation, public menuCtrl: MenuController) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            statusBar.backgroundColorByHexString('#f4f5f8');
            this.registerBackButton();
            this.nativeStorage.getItem('blocks').then(data => { if (data) { 
                this.splashScreen.hide();
                this.service.blocks = data.blocks;
                this.values.settings = data.settings;
                this.values.calc(platform.width());
                if (this.values.settings.app_dir == 'right') this.platform.setDir('rtl', true);
                else this.platform.setDir('ltr', true);
                this.translateService.setDefaultLang(this.values.settings.language);
            } }, error => console.error(error));
            this.nativeStorage.getItem('categories').then(data => {
                if (data) {
                    this.service.categories = data;
                    this.service.mainCategories = [];
                    for (var i = 0; i < this.service.categories.length; i++) {
                        if (this.service.categories[i].parent == '0') {
                            this.service.mainCategories.push(this.service.categories[i]);
                        }
                    }
                }
            }, error => console.error(error));
            this.service.load().then((results) => this.handleService(results));
            this.screenOrientation.onChange().subscribe(
               () => {
                   this.values.calc(platform.height());
               }
            );
        });
    }
    handleService(results) {
        if (this.values.settings.app_dir == 'right') this.platform.setDir('rtl', true);
        else this.platform.setDir('ltr', true);
            this.translateService.setDefaultLang(this.values.settings.language);
            this.splashScreen.hide();
            this.values.calc(this.platform.width());
        if (this.platform.is('cordova')) {
            this.oneSignal.startInit(this.values.settings.onesignal_app_id, this.values.settings.google_project_id);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(result => {
                console.log(result);
            });
            this.oneSignal.handleNotificationOpened().subscribe(result => {
                if (result.notification.payload.additionalData.category) {
                    this.nav.push(ProductsPage, {id: result.notification.payload.additionalData.category});
                } else if (result.notification.payload.additionalData.product) {
                    this.nav.push(ProductPage, {id: result.notification.payload.additionalData.product});
                } else if (result.notification.payload.additionalData.post) {
                    this.post({di: result.notification.payload.additionalData.post});
                } else if (result.notification.payload.additionalData.order) {
                    this.nav.push(OrderSummary, {id: result.notification.payload.additionalData.order});
                }
            });
            this.oneSignal.endInit();
        }
        if(this.values.settings.show_latest == '1')
        this.service.getProducts();
        if(this.values.settings.show_featured == '1')
        this.service.getfeaturedProduct();
        if(this.values.settings.show_onsale == '1')
        this.service.onSaleProduct();
    }
    openPage(page) {
        this.nav.setRoot(page);
    }
    getCategory(id, slug, name) {
        this.items = [];
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories =  this.service.categories.filter(item => item.parent === parseInt(id));
        this.nav.setRoot(ProductsPage, this.items);
    }
    getCart() {
        this.nav.setRoot(CartPage);
    }
    logout() {
        this.service.logout();
        this.values.wishlistId = [];
        this.nav.setRoot(Home);
    }
    login() {
        this.nav.setRoot(AccountLogin);
    }
    register() {
        this.nav.setRoot(AccountRegister);
    }
    address() {
        this.nav.setRoot(Address);
    }
    order() {
        this.nav.setRoot(Orders);
    }
    cart() {
        this.nav.setRoot(CartPage);
    }
    wishlist() {
        this.nav.setRoot(WishlistPage);
    }
    shop() {
        this.nav.setRoot(Home);
    }
    quiz() {
        this.nav.setRoot(SurveyPage);
    }
    dropDown() {
        this.showCategories = true;
    }
    dropup() {
        this.showCategories = false;
    }
    rateApp() {
        if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
                ios: this.values.settings.rate_app_ios_id,
                android: this.values.settings.rate_app_android_id,
                windows: 'ms-windows-store://review/?ProductId=' + this.values.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(true);
        }
    }
    shareApp() {
        if(this.platform.is('cordova')){
            var url = '';
            if(this.platform.is('android'))
            url = this.values.settings.share_app_android_link;
            else url = this.values.settings.share_app_ios_link;
            var options = {
                message: '',
                subject: '',
                files: ['', ''],
                url: url,
                chooserTitle: ''
            }
            this.socialSharing.shareWithOptions(options);
        }
    }
    contact() {
        let email = {
            to: this.values.settings.support_email,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    }
    post(id) {
        this.nav.setRoot(Post, id);
    }
    registerBackButton() {
        this.platform.registerBackButtonAction(() => {
            if (this.menuCtrl.isOpen()) {
                this.menuCtrl.close();
                return;
            } else if (this.nav.canGoBack()) {
                this.nav.pop();
            } else {
                this.showAlert();
            }
        });
    }
    showAlert() {
        this.alert = this.alertCtrl.create({
            title: "Exit?",
            message: "Are you sure you want to exit?",
            buttons: [{
                text: "Cancel",
                role: "cancel",
                handler: () => {
                    this.alert = null;
                }
            }, {
                text: "Exit",
                handler: () => {
                    this.platform.exitApp();
                }
            }]
        });
        this.alert.present();
    }
}