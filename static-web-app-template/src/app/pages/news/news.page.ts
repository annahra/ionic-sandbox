import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  isDesktop: Observable<boolean>;

  constructor(
    private screenSizeService: ScreenSizeService
  ) {
    this.isDesktop = this.screenSizeService.isDesktopView();
   }

  ngOnInit() {
  }

}
