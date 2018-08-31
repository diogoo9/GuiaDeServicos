import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicosProvider } from '../providers/servicos/servicos';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrgaoPage } from '../pages/orgao/orgao';
import { OrgaoPageModule } from '../pages/orgao/orgao.module';
import { LoginPageModule } from '../pages/login/login.module';
import { AboutPageModule } from '../pages/about/about.module';
import { OrgaosProvider } from '../providers/orgaos/orgaos';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,//importante httpClient
    OrgaoPageModule,
    LoginPageModule,
    AboutPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicosProvider,
    OrgaosProvider
  ]
})
export class AppModule {}
