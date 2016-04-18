import { Component, EventEmitter, Input, Output } from 'angular2/core';

@Component({
  selector: 'rio-button',
  template: `
    <button
      [id]="qaid"
      (click)="handleClick($event)"
      type="{{type || 'button'}}"
      class="btn btn-primary {{className}}">

      <ng-content></ng-content>
    </button>
  `
})
export class RioButton {
  @Input() className: string;
  @Input() type: string;
  @Input() qaid: string;
  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  handleClick(event) {
    this.onClick.emit(event);
  }
};
