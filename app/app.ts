import { Component, ViewChild, Type } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Page1 } from './pages/page1/page1';
import { StartPage } from './pages/start/start';

@Component({
  templateUrl: 'build/app.html',
})
export class MyApp {
  @ViewChild(Nav) private nav: Nav;

  private rootPage: Type;
  private pages: Array<{title: string, component: Type}>;
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
    this.rootPage = StartPage;
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'CILists', component: StartPage},
      { title: 'Page uno', component: Page1 },
    ];

  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  public openPage(page: any): void {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
