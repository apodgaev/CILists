import { CIItem } from './item';

export class CIList {
  id      : number;
  title   : string;
  checked : boolean;
  note    : string;
  items   : Array<CIItem>;
  constructor(title?:string) {
    this.title = title || "CIList";
    this.note = "";
    this.checked = false;
    this.items = [];
  }
}
