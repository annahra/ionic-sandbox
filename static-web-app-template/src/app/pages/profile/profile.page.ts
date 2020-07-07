import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isDesktop: Observable<boolean>;

  constructor(
    private screenSizeService: ScreenSizeService
  ) { 
    this.isDesktop = this.screenSizeService.isDesktopView();
  }

  ngOnInit() {
  }

}
