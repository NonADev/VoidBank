import { AbstractComponent } from './../../shared/components/abstract-component.component';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AbstractComponent {
	@Input() public atualizaPasso!: (pagina: number) => void;

	public email: String = "";
	public senha: String = "";

	onClickLogin(): void {
		if(LoginComponent.passwordIsValid(this.senha.toString()).valid) {
			this.atualizaPasso(1);
		}
	}

	onClickForgotPassword(): void {
		console.warn('\'onClickForgotPassword\' Method not implemented.');
	}

	ngOnInit(): void {
		console.warn('\'ngOnInit\' Method not implemented.');
	}
}
