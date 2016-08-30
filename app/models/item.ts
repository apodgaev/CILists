export class CIItem {
  private id: number;
  public title: string;
  public checked: boolean;
  public note: string;
  constructor(title?: string) {
    this.title = title || 'CIItem';
    this.checked = false;
    this.note = '';
  }
  public setId(id: number): void {
    this.id = id;
  }
  public getId(): number { return this.id; }
}
