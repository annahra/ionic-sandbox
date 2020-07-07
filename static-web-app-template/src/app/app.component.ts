import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenSizeService } from './services/screen-size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  isDesktop = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenSizeService: ScreenSizeService,
    private router: Router
  ) {
    this.initializeApp();
    this.screenSizeService.isDesktopView().subscribe(isDesktop =>{
      if (!isDesktop) {
        this.router.navigateByUrl('/tabs');
      }

      if (!this.isDesktop && isDesktop) {
        this.router.navigateByUrl('/');
      }

      this.isDesktop = isDesktop;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  @HostListener('window:resize',['$event'])
  private onResize(event) {
    this.screenSizeService.onResize(event.target.innerWidth);
  }
}
