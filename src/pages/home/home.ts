import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Plugins, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

    grabPhoto() {

        const { Camera } = Plugins;

        Camera.getPhoto({
            quality: 100,
            resultType: CameraResultType.Base64
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
            console.log('No web implementation for plugin');
        });

    }
    
launchHomeModal() {
    /*      event.srcEvent.stopPropagation();*/
    /*    event.preventDefault();*/
    let homeModal = this.modalCtrl.create(HomePage);

    homeModal.onDidDismiss(query => {
    });
    
    homeModal.present();

}

}
