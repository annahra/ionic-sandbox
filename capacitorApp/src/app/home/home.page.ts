import { Component, AfterViewInit } from '@angular/core';
import { Plugins, CameraResultType, Capacitor } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
const { Browser, Camera, YoutubePlayer } = Plugins;
import { YoutubePlayerWeb } from 'capacitor-youtube-player';
import { OpenNativeSettings } from "@ionic-native/open-native-settings/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  image = null;

  constructor(private sanitizer: DomSanitizer, private openNativeSettings: OpenNativeSettings) {}

  ngAfterViewInit() {
    if(Capacitor.platform == 'web') {
      this.initializeYoutubePlayerPluginWeb();
    } else {
      this.initializeYoutubePlayerPluginNative();
    }
  }

  async initializeYoutubePlayerPluginWeb() {
    const options = { playerId: 'youtube-player', playerSize: {width: 640, height: 360}, videoId: 'tzAAwo5tHOU' };
    const result = await YoutubePlayerWeb.initialize(options);
  }

  async initializeYoutubePlayerPluginNative() {
    const options = { width: 640, height: 360, videoId: 'tzAAwo5tHOU' };
    const playerReady = await YoutubePlayer.initialize(options);
  }

  async openBrowser() {
    await Browser.open({url: "https://ionicframework.com" })
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    console.log('image: ', image);
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);

  }

  openSettings() {
    this.openNativeSettings.open('wifi');
  }

}
