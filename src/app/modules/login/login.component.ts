import { AbstractComponent } from './../../shared/components/abstract-component.component';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AbstractComponent {
	public email: String = "";
	public senha: String = "";

	onClickLogin(): void {
		console.warn('\'onClickLogin\' Method not implemented.');
	}

	onClickForgotPassword(): void {
		console.warn('\'onClickForgotPassword\' Method not implemented.');
	}

	ngOnInit(): void {
		console.warn('\'ngOnInit\' Method not implemented.');
	}
}
