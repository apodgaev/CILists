import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CIList } from '../../models/list';
import { CIItem } from '../../models/item';

@Component({
  templateUrl: 'build/pages/start/start.html'
})
export class StartPage {
  selectedItem: any;
  icons: string[];
  lists: Array<CIList>;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.lists = [];
    let testList = new CIList('Test list');

    for (let i = 1; i < 11; i++) {
      let item = new CIItem('Item ' + i);
      item.note = 'This is item #' + i
      testList.items.push(item);
    }
    this.lists.push(testList);
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(StartPage, {
      item: item
    });
  }
}
