import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridstackComponent, GridstackModule } from 'gridstack/dist/angular';
import { GridStackOptions } from 'gridstack';

@Component({
  selector: 'gridstack-nx-welcome',
  standalone: true,
  imports: [CommonModule, GridstackModule],
  template: `<h1>Remote 1</h1>
    <gridstack [options]="options"></gridstack> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  @ViewChild(GridstackComponent)
  public readonly gsComp?: GridstackComponent;

  // there's also NgGridStackOptions
  public options: GridStackOptions = {
    column: 6,
    cellHeight: 50,
    margin: 5,
    minRow: 1, // don't collapse when empty
    removable: '.trash',
    acceptWidgets: true,
    float: true,
    children: [
      { x: 0, y: 0, w: 2, h: 2, content: 'cell 1 remote 1' },
      { x: 3, y: 1, h: 2 },
      { x: 4, y: 1 },
      { x: 2, y: 3, w: 3, maxW: 3, id: 'special', content: 'has maxW=3' },
    ],
  };
}
