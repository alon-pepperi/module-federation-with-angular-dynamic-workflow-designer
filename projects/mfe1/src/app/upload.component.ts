import { Component, OnInit } from '@angular/core';
import { PepMenuItem } from '@pepperi-addons/ngx-lib/menu';

@Component({
    selector: 'mfe1-upload',
    template: `

      <div>Remote Component Works!</div>
      <div class="my-component-wrapper">
    <!-- <app-my-component [counter]="counter" (componentClick)="handleOnClick($event)"></app-my-component> -->
  </div>

    `,
    styles: []
})

export class UploadComponent  {
  public counter = 21;

  public handleOnClick(stateCounter: number) {
    this.counter++;
  }
}
