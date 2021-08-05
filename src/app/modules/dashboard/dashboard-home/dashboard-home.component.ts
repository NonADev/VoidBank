import { Component, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/abstract-component.component';

@Component({
	selector: 'dashboard-home',
	templateUrl: './dashboard-home.component.html',
	styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent extends AbstractComponent {
	@Input() public atualizaPasso!: (pagina: number) => void;

	ngOnInit(): void {
		console.warn('\'ngOnInit\' Method not implemented.');
	}
}
