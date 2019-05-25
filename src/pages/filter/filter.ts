import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/service/values';
import { Service } from '../../providers/service/service';

@Component({
    templateUrl: 'filter.html'
})
export class Filter {
    
    attributeTerms: any = [];
    term: any;
    constructor(public nav: NavController, params: NavParams, public values: Values, public service: Service, ) { 
      this.values.filter = params.data.filter;
      this.service.getAttributes().then((results) => {
           this.values.attributes = results;
           if (this.values.attributes.length) {
              this.values.attributes.forEach(item => {
                  if(!item.selected)
                  item.selected = false;
              });
              this.values.attributes.forEach(item => {
                  if(item.selected){
                    this.getAttributeTerms(item.id);
                    this.values.selectedFilter = item;
                  }
              });
           }
      });
      if(!this.values.price.upper)
      this.values.price.upper = this.values.max_price;
    }
    chooseTab(filterType) {
        this.getAttributeTerms(filterType.id);
        this.values.attributes.forEach(item => {
            item.selected = false;
        });
        this.values.attributes.forEach(item => {
            if(item.id == filterType.id)
            item.selected = true;
        });
        this.values.selectedFilter = filterType;
    }
    getAttributeTerms(id) {
        this.service.attributeTerms(id).then((results) => this.attributeTerms[id] = results);
    }
    applyFilter() {
        var i = 0;
        this.values.attributes.forEach(attr => {
            if(this.values.attributeTerms[attr.id])
            this.values.attributeTerms[attr.id].forEach(term => {
                if(term.selected && term.selected == true){
                  this.values.filter['attributes' + i] = attr.slug;
                  this.values.filter['attribute_term' + i] = term.id;
                } else {
                  this.values.filter['attributes' + i] = undefined;
                  this.values.filter['attribute_term' + i] = undefined;
                } i++;
            });
        });
        this.values.applyFilter = true;
        this.values.filter.min_price = this.values.price.lower;
        this.values.filter.max_price = this.values.price.upper;
        this.nav.pop();
    }
    dismiss() {
        this.values.applyFilter = false;
        this.nav.pop();
    }
    clearAll(){
        this.values.price.lower = 1;
        this.values.price.upper = this.values.max_price;
        this.values.filter.min_price = undefined;
        this.values.filter.max_price = undefined;
        var i = 0;
        this.values.attributes.forEach(attr => {
            if(this.values.attributeTerms[attr.id])
            this.values.attributeTerms[attr.id].forEach(term => {
                term.selected = false;
                this.values.filter['attributes' + i] = undefined;
                this.values.filter['attribute_term' + i] = undefined;
                i++;
            });
        });
        if(this.values.attributes.length){
          this.values.attributes.forEach(item => {
              item.selected = false;
          });
        this.values.attributes[0].selected = true;
        this.values.selectedFilter = this.values.attributes[0];
        }
        this.nav.pop();
    }
}