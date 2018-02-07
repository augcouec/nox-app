import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
@IonicPage({name : 'HomePage'})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  tasks = []

  constructor (
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  addTask () {
    let modal = this.modalCtrl.create('EditTaskModalPage')
    modal.present()
  }

}
