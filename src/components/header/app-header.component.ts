import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  panelShowed: boolean = false;
  showPanel(): void{
    this.panelShowed = !this.panelShowed;
  }
}
