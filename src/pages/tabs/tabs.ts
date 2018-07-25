import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GunlukTahminlerPage } from '../gunluk-tahminler/gunluk-tahminler';
import { YorumlarPage } from '../yorumlar/yorumlar';
import { BolgeselTahminlerPage } from '../bolgesel-tahminler/bolgesel-tahminler';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  gnTahminlerPage=GunlukTahminlerPage;
  blTahminlerPage=BolgeselTahminlerPage;
  yrmPage=YorumlarPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
