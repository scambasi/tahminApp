import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GunlukTahminlerPage } from '../pages/gunluk-tahminler/gunluk-tahminler';
import { BolgeselTahminlerPage } from '../pages/bolgesel-tahminler/bolgesel-tahminler';
import { YorumlarPage } from '../pages/yorumlar/yorumlar';
import { TabsPage } from '../pages/tabs/tabs';
import { GunlukTahminEklePage } from '../pages/gunluk-tahmin-ekle/gunluk-tahmin-ekle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    GunlukTahminlerPage,
    BolgeselTahminlerPage,
    YorumlarPage,
    GunlukTahminEklePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    GunlukTahminlerPage,
    BolgeselTahminlerPage,
    YorumlarPage,
    GunlukTahminEklePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
