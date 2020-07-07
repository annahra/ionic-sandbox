import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';
import data from './news.json';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  isDesktop: Observable<boolean>;
  news = data.articles;
  platforms = [];

  constructor(
    private screenSizeService: ScreenSizeService,
    private plt: Platform
  ) {
    this.isDesktop = this.screenSizeService.isDesktopView();
   }

  ngOnInit() {
    this.platforms = this.plt.platforms();
  }

}
