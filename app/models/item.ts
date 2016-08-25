export class CIItem {
  id      : number;
  title   : string;
  checked : boolean;
  note    : string;
  constructor(title?:string) {
    this.title = title || "CIItem";
    this.checked = false;
    this.note = "";
  }
}
