import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectionPage } from './connection';

import { HomePageModule } from '../home/home.module' // on import le module du modal


@NgModule({
  declarations: [
    ConnectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectionPage),
    HomePageModule
  ],
  entryComponents: [
      ConnectionPage
      ]
})
export class ConnectionPageModule {}
