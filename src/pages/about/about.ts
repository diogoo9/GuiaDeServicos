import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Orgao } from '../../model/Orgao';
import { OrgaosProvider } from '../../providers/orgaos/orgaos';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private OrgaosProvider: OrgaosProvider,public MenuCtrl: MenuController) {
  }

 
  ionViewDidLoad() {     
    this.MenuCtrl.enable(false);
  }

}
