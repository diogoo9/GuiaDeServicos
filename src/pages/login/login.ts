import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { Usuario } from '../../model/Usuario';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: Usuario = new Usuario();
  msgAviso: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public toastCtrl: ToastController) {
  }

  login(){
    console.log(this.usuario.email);
      console.log(this.usuario.senha);
    if(this.usuario.email == "teste" && this.usuario.senha == "12"){
      this.navCtrl.setRoot(HomePage);
      }else{
        this.msgAviso = "usuario ou senha incorreta";
      this.presentToast();
    }
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Senha incorreta',
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }

}
