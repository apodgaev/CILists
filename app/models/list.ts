import { CIItem } from './item';

export class CIList {
  private id: number;
  public title: string;
  public checked: boolean;
  public note: string;
  public items: Array<CIItem>;
  constructor(title?: string) {
    this.title = title || 'CIList';
    this.note = '';
    this.checked = false;
    this.items = [];
  }
  public setId(id: number): void {
    this.id = id;
  }
  public getId(): number { return this.id; }
}
