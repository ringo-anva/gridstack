import {
  Component,
  Input,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GridstackComponent,
  GridstackModule,
  NgGridStackWidget,
} from 'gridstack/dist/angular';
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

  @Input()
  public options!: GridStackOptions;
  public readonly parent = inject(NxWelcomeComponent, {
    optional: true,
    skipSelf: true,
  });

  public addComponent(widget: NgGridStackWidget): NgGridStackWidget {
    if (!this.gsComp?.grid) throw Error('add component was called to early');
    const addWidget = this.gsComp.grid.addWidget(widget);
    // this.changed.next();
    return addWidget;
  }
}
