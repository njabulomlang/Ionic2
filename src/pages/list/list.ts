import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

public text:string;
public text1:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.text = this.navParams.get('text');
  this.text1 = this.navParams.get('text1')
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
