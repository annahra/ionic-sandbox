import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(private geolocation: Geolocation, private platform: Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then(position => {
        console.log('test: ', position)
      })
    });
  }

}
