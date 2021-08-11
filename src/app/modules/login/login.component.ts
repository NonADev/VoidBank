import { Account } from './../../shared/components/account.component';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { AbstractComponent } from './../../shared/components/abstract-component.component';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AbstractComponent {
	@Input() public account!: Account;
	@Input() public atualizaPasso!: (pagina: number) => void;

	public loginForm = this.fb.group({
		'email': new FormControl('', [
			Validators.required,
			Validators.email
		]),
		'senha': new FormControl('', [
			Validators.required,
			Validators.minLength(8)
		])
	});

	constructor(private fb: FormBuilder) {
		super();
	}

	onClickLogin(): void {
		if (this.loginForm.valid) {
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
