import { Component } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
const { Browser, Camera } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image = null;

  constructor(private sanitizer: DomSanitizer) {}

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

}
