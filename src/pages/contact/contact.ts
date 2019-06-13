import { Component, Input, OnChanges } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
  })
  export class ContactPage {
    a:any = {};
    @Input() userInput;
    constructor(public navCtrl: NavController, private params:NavParams) {
        this.a = params.get('a');
    }
  
    ngOnChanges() {
      if(this.userInput) {
          this.a = this.userInput;
      }
    }
  }