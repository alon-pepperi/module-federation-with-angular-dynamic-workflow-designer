import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mfe2-analyze',
    template: `
      <div class="embedded-showcase">

  <div class="my-component-wrapper">
    <app-my-component [counter]="counter" (componentClick)="handleOnClick($event)"></app-my-component>
  </div>
</div>

    `,
    styles: [`img { max-width: 100px;}`]
})

export class AnalyzeComponent  {
  public counter = 21;

  public handleOnClick(stateCounter: number) {
    this.counter++;
  }
}
