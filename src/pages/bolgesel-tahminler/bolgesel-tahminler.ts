import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bolgesel-tahminler',
  templateUrl: 'bolgesel-tahminler.html',
})
export class BolgeselTahminlerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BolgeselTahminlerPage');
  }

}
