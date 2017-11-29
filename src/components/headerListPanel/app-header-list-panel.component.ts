import { Component } from '@angular/core';

export class Prod{
	label:string	
}

const PRODS:Prod[] = [
	{label:'Angular'},
	{label:'React'},
	{label:'VueJs'},
	{label:'ES6'}
]

@Component({
  selector: 'app-header-list-panel',
  templateUrl: './app-header-list-panel.component.html',
  styleUrls: ['./app-header-list-panel.component.css']
})

export class AppHeaderListPanelComponent {
	showPanelListDetail: boolean = false;
	toggleShowProdListDetails(e):void{
		e.cancelBule = true;
		this.showPanelListDetail = !this.showPanelListDetail
	}
	prods = PRODS 
}
