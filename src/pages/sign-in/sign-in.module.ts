import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInPage } from './sign-in';

import { ConnectionPage } from '../connection/connection.module' // on import le module du modal


@NgModule({
  declarations: [
    SignInPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInPage),
    
  ],
  entryComponents: [
      SignInPage
      ]
})
export class SignInPageModule {}
