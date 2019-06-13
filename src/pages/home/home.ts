import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  a: any = {};
  show: Boolean = false;
  constructor(public navCtrl: NavController) {

  }
  goListPage(){
  
    this.navCtrl.push(ContactPage, {a: this.a});
  }
  toggle(){
    this.show = !this.show;
  }
}
