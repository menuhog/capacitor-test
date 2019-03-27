import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    grabPhoto() {

        const { Camera } = Plugins;

        Camera.getPhoto({
            quality: 100,
            resultType: 'base64'
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
            console.log('No web implementation for plugin');
        });

    }

}
