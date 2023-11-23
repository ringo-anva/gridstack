import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'gridstack-apps/gridstackmf/remote2-entry',
  template: `<gridstack-nx-welcome></gridstack-nx-welcome>`,
})
export class RemoteEntryComponent {}
