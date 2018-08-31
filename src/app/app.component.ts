import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OrgaoPage } from '../pages/orgao/orgao';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild('nav')
  navCtrl: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openServ(){
    this.navCtrl.setRoot(HomePage);
  }
  openOrg(){
    this.navCtrl.setRoot(OrgaoPage);
  }
  openAbou(){
    this.navCtrl.push(AboutPage);
  }

  exit(){
    this.navCtrl.setRoot(LoginPage);
  }
}

