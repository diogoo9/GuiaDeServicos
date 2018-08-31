import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgaoPage } from './orgao';

@NgModule({
  declarations: [
    OrgaoPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgaoPage),
  ],
})
export class OrgaoPageModule {}
