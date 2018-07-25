import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GunlukTahminEklePage } from '../gunluk-tahmin-ekle/gunluk-tahmin-ekle';

@IonicPage()
@Component({
  selector: 'page-gunluk-tahminler',
  templateUrl: 'gunluk-tahminler.html',
})
export class GunlukTahminlerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  yeniTahmin()
  {
    this.navCtrl.push(GunlukTahminEklePage,{mode:'Ekle'});
  }

}
