import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { OrgaosProvider } from '../../providers/orgaos/orgaos';
import { Orgao } from '../../model/Orgao';

/**
 * Generated class for the OrgaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orgao',
  templateUrl: 'orgao.html',
})
export class OrgaoPage {
  
  orgaos: Orgao[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,private OrgaosProvider: OrgaosProvider ) {
  }

  pullOrgaos(){
    this.OrgaosProvider.getOrgao().then((dado)=>{
      for(let _i = 1; _i<=50; _i++){
        this.orgaos.push({nome:dado[_i].name,cidade:dado[_i].county});
      }
      console.log(this.orgaos.length);
    })
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgaoPage');   
      this.pullOrgaos();
      this.menuCtrl.enable(true);
  
  }

}
