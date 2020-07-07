import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.page.html',
  styleUrls: ['./web-home.page.scss'],
})
export class WebHomePage implements OnInit {

  constructor(
    private metaService: Meta, 
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Generic Title');
    this.metaService.updateTag({ name: 'description', content: 'Ionic everywhere news page' });
        // Twitter
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ property: 'twitter:title', content: 'My Ionic everywhere news page' });
    this.metaService.updateTag({ property: 'twitter:description', content: 'My Twitter news description!' });
    this.metaService.updateTag({ property: 'twitter:image', content: 'https://i0.wp.com/devdactic.com/wp-content/uploads/2020/05/ionic-in-app-purchase-capacitor.png?w=1620&ssl=1' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: '/news' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'My OG news description!' });
    this.metaService.updateTag({ property: 'og:title', content: 'My OG news title!' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://i0.wp.com/devdactic.com/wp-content/uploads/2020/05/ionic-in-app-purchase-capacitor.png?w=1620&ssl=1' });
  }

}
