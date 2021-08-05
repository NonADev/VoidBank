import { AbstractComponent } from '../shared/components/abstract-component.component';
import { Component } from '@angular/core';

@Component({
	selector: 'Dashboard-router',
	templateUrl: './router.component.html'
})
export class DashboardRouterComponent extends AbstractComponent {
	currentPage: number = 0;

	constructor() {
		super();
	}

	public changeCurrentPage(newPage: number): void {
		this.currentPage = newPage;
	}

	ngOnInit(): void {
		console.warn('\'ngOnInit\' Method not implemented.');
	}
}
