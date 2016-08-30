import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CIList } from '../../models/list';
import { CIItem } from '../../models/item';

@Component({
  templateUrl: 'build/pages/start/start.html',
})
export class StartPage {
  private selectedItem: any;
  private lists: Array<CIList>;
  private nav: NavController;
  constructor(navCtrl: NavController, navParams: NavParams) {
    this.nav = navCtrl;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.lists = [];
    let testList: CIList = new CIList('Test list');

    for (let i: number = 1; i < 11; i++) {
      let item: CIItem = new CIItem('Item ' + i);
      item.note = 'This is item #' + i;
      testList.items.push(item);
    }
    this.lists.push(testList);
  }
/*
  private itemTapped(event: any, item: any): void {
    // That's right, we're pushing to ourselves!
    this.nav.push(StartPage, {
      item: item,
    });
  }
  */
}
