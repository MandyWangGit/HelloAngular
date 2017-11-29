import { Component } from '@angular/core';

export class Infor{
	name:string	
}

const STAFFLIST:Infor[] = [
	{name:'Austin'},
	{name:'Alex'},
	{name:'Mandy'},
	{name:'Machal'},
	{name:'Sunny'},
	{name:'Sunny1'},
	{name:'Lux'}
]

@Component({
  selector: 'app-search-result-list',
  templateUrl: './app-search-result-list.component.html',
  styleUrls: ['./app-search-result-list.component.css']
})
export class AppSearchResultListComponent {
	inforList = STAFFLIST;
}