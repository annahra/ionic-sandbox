import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebHomePage } from './web-home.page';

describe('WebHomePage', () => {
  let component: WebHomePage;
  let fixture: ComponentFixture<WebHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
