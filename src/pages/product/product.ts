import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, ToastController, ModalController, LoadingController, FabContainer } from 'ionic-angular';
import { ProductService } from '../../providers/service/product-service';
import { Values } from '../../providers/service/values';
import { Functions } from '../../providers/service/functions';
import { md5 } from './md5';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CartPage } from '../cart/cart';
import { ReviewPage } from '../reviews/reviews';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Slides } from 'ionic-angular';


@Component({
    templateUrl: 'product.html'
})
export class ProductPage {
    @ViewChild(Content) content: Content;
    @ViewChild(Slides) slides: Slides;
    ishref:any;
    product: any;
    id: any;
    status: any;
    options: any = {};
    opt: any;
    message: any;
    wishlist: any;
    quantity: any;
    reviews: any;
    reviewForm: any;
    nickname: any;
    details: any;
    AddToCart: any;
    disableSubmit: boolean = false;
    wishlistIcon: boolean = false;
    moreDescription: boolean = false;
    related: any;
    crossSell: any;
    upsell:any;
    items: any;
    item: any;
    variations: any;
    disableBuyNow: boolean = false;
    filter: any = {};
    usedVariationAttributes: any = [];
    hrefSlug:any;
    linkBySlug:any;
    relPro:any = [];
    linkBySlugTitle:any;

    constructor(public iab: InAppBrowser, private photoViewer: PhotoViewer, public modalCtrl: ModalController, public nav: NavController, public service: ProductService, params: NavParams, public functions: Functions, public values: Values, public toastCtrl: ToastController, private socialSharing: SocialSharing, public loadingCtrl: LoadingController) {
        this.ishref = false;
        this.hrefSlug = "";
        if(params.data.id){
            this.product = params.data;
            this.usedVariationAttributes = this.product.attributes.filter(function (attribute) { return attribute.variation == true });
            this.id = params.data.id;
            this.options.product_id = this.id;
            if ((this.product.type == 'variable') && this.product.variations.length) this.getVariationProducts();
            this.getRelatedProducts();
            this.getUpsellProducts();
            this.getCrossSellProducts();
            this.getReviews();
            this.setProductHref(this.product.short_description);
        }
        else {
            this.id = params.data;
            this.options.product_id = this.id;
            this.service.getProduct(this.id)
                .then((results) => this.handleProductResults(results));
        }
        this.quantity = 1;
        this.AddToCart = "Add To Cart";
        
    }

    setProductHref(string) {
        var arr = string.split('href="');
        var title = string.split('<strong>');
        if(title[1]){
            title = title[1].split('</strong>');
            if(title[0]){
                this.linkBySlugTitle = title[0];
            }else{
                this.linkBySlugTitle = "Mau coba?";
            }
        }
        if(arr[1]) {
            var arrProduct = arr[1].split('"');
            var linkProduct = arrProduct[0];
            var checkExists = linkProduct.split('/shop/');
            if(linkProduct && checkExists) {
                this.ishref = true;
                var lenArr = linkProduct.split('/');
                if(lenArr[lenArr.length-1] == ""){
                    this.hrefSlug = lenArr[lenArr.length-2];
                }else{
                    this.hrefSlug = lenArr[lenArr.length-1];
                }
            }
        }
    }

    handleProductResults(results) {
        this.product = results;
        this.usedVariationAttributes = this.product.attributes.filter(function (attribute) { return attribute.variation == true });
        if ((this.product.type == 'variable') && this.product.variations.length) this.getVariationProducts();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
        this.getReviews();
    }
    external(url){
        var options = "location=yes,hidden=no,toolbar=yes";
        let browser = this.iab.create(url, '_blank', options);
        browser.show();
    }
    getVariationProducts() {
        this.service.getVariationProducts(this.product.id).then((results) => this.variations = results);
    }
    getProduct(item) {
        this.nav.push(ProductPage, item);
    }
    addToCart(id) {
        if (this.setVariations()) {
            this.service.addToCart(this.options).then((results) => this.updateCart(results));
        }
    }
    buyNow(id) {
        if (this.setVariations()) {
            this.service.addToCart(this.options).then((results) => this.updateBuynowResults(results));
        }
    }
    setVariations(){
        this.product.attributes.forEach(item => {
            if(item.selected){
                this.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
        })
        for(var i = 0; i < this.product.attributes.length; i++){
            if(this.product.attributes[i].variation && this.product.attributes[i].selected == undefined){
                this.functions.showAlert('Options', 'Please Select Product ' + this.product.attributes[i].name  + ' Option');
                return false;
            }
        }
        return true;
    }
    updateBuynowResults(a) {
        this.disableBuyNow = false;
        this.nav.push(CartPage);
    }
    updateCart(a) {
        this.disableSubmit = false;
        this.values.count += parseInt(this.quantity);
        this.AddToCart = "Add To Cart";
        this.presentToast();
    }
    getCart() {
        this.nav.push(CartPage);
    }
    mySlideOptions = {
        initialSlide: 1,
        loop: true,
        autoplay: 5800,
        pager: true
    }
    getReviews() {
        this.service.getReviews(this.id).then((results) => this.handleReview(results));
    }
    handleReview(result) {
        this.reviews = result;
        for (let item in this.reviews) {
            this.reviews[item].avatar = md5(this.reviews[item].email);
        }
    }
    addToWishlist(id) {
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then((results) => this.update(results));
        } else {
            this.presentToastLoginAlert();
        }
    }
    update(a) {
        if (a.success == "Success") {
            this.values.wishlistId[this.product.id] = true;
            this.presentToastAddToWishlist();
        } else {
            this.functions.showAlert("error", "error");
        }
    }
    removeFromWishlist(id) {
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then((results) => this.updateWish(results, id));
    }
    updateWish(results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    }
    showMore() {
        this.moreDescription = true;
    }
    showLess() {
        this.moreDescription = false;
    }
    getRelatedProduct(item) {
        this.nav.push(ProductPage, item);
    }
    updateRelateSlug(){
        let relatedSlug = this.hrefSlug;
        let results = this.relPro;
        if(this.ishref){
            for (var i = 0; i < results.length; i++) {
                if(results[i].slug == relatedSlug){
                    this.linkBySlug = results[i];
                    break;
                }   
            }
        }
    }
    updateRelated(results) {
        this.related = results;
        for(let i = 0; i< results.length;i++){
            this.relPro.push(results[i]);
        }
        this.updateRelateSlug();
    }
    updateUpsell(results) {
        this.upsell = results;
        for(let i = 0; i< results.length;i++){
            this.relPro.push(results[i]);
        }
        this.updateRelateSlug();
    }
    updateCross(results) {
        this.crossSell = results
        for(let i = 0; i< results.length;i++){
            this.relPro.push(results[i]);
        }
        this.updateRelateSlug();
    }

    getRelatedProducts() {
        if (this.product.related_ids != 0) {
        for(let item in this.product.related_ids)
        this.filter['include[' + item + ']'] = this.product.related_ids[item];
      
            this.service.getRelatedProducts(this.filter)
               .then((results) => this.updateRelated(results));
        }
    }


    getUpsellProducts() {
        if (this.product.upsell_ids != 0) {
        for(let item in this.product.upsell_ids)
        this.filter['include[' + item + ']'] = this.product.upsell_ids[item];
      
            this.service.getUpsellProducts(this.filter)
               .then((results) => this.updateUpsell(results));
        }
    }


    getCrossSellProducts() {
        if (this.product.cross_sell_ids != 0) {
        for(let item in this.product.cross_sell_ids)
        this.filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
      
            this.service.getCrossSellProducts(this.filter)
               .then((results) => this.updateCross(results));
        }
    }
    showMoreReviews(productName, count, rating) {
        this.items = [];
        this.items.reviews = {};
        this.items.id = this.id;
        this.items.count = count;
        this.items.rating = rating;
        this.items.name = productName;
        this.items.reviews = this.reviews;
        let modal = this.modalCtrl.create(ReviewPage, this.items);
        modal.present();
    }
    viewPhotos(image) {
        this.photoViewer.show(image);
    }

    viewPhoto(index){
      this.slides.slideTo(index + 1, 500);
    }

    presentToastLoginAlert() {
        let toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
    presentToastAddToWishlist() {
        let toast = this.toastCtrl.create({
            message: 'Item added to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Item added to cart',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
    share(product, network: string, fab: FabContainer) {
        var options = {
            message: 'Hey check this product',
            subject: product.title,
            files: ['', ''],
            url: product.permalink,
            chooserTitle: 'Pick an app'
        }
        let loading = this.loadingCtrl.create({
            content: `Posting to ${network}`,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(() => {
            fab.close();
        });
        loading.present();
        this.socialSharing.shareWithOptions(options);
    }
    chooseVariation(att, value){
        this.product.attributes.forEach(item => {
            if(item.name == att.name){
                item.selected = value;
            }
        })
        this.variations.forEach(variation => {
        var test = new Array(this.usedVariationAttributes.length);
        test.fill(false);
            this.usedVariationAttributes.forEach(attribute => {
                if(variation.attributes.length == 0){
                    this.options.variation_id = variation.id;
                    this.product.in_stock = variation.in_stock;
                    this.product.price = variation.price;
                    this.product.sale_price = variation.sale_price;
                    this.product.regular_price = variation.regular_price;
                }
                else {
                    variation.attributes.forEach((item, index) => {
                        if(item.name == attribute.name && item.option == attribute.selected){
                            test[index] = true;
                        }
                    })
                    if(test.every( v => v == true )){
                        this.options.variation_id = variation.id;
                        this.product.in_stock = variation.in_stock;
                        this.product.price = variation.price;
                        this.product.sale_price = variation.sale_price;
                        this.product.regular_price = variation.regular_price;
                        test.fill(false);
                    };
                }
            })
        })
    }
}