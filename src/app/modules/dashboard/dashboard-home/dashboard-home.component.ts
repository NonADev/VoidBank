import { Component, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/shared/components/abstract-component.component';
import { Account } from 'src/app/shared/components/account.component';

@Component({
	selector: 'dashboard-home',
	templateUrl: './dashboard-home.component.html',
	styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent extends AbstractComponent {
	@Input() public account!: Account;
	@Input() public atualizaPasso!: (pagina: number) => void;

	getAccountValue(): string {
		return DashboardHomeComponent.numberFormat(this.account.accountValue);
	}

	ngOnInit(): void {
		console.warn('\'ngOnInit\' Method not implemented.');
	}
}
