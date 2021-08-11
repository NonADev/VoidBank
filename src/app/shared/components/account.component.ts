export class Account {
	currency: string;
	accountValue: number
	email: string;
	senha: string;

	constructor(_currency: string = 'BRL', _accountValue: number = 0, _email: string = '', _senha: string = '') {
		this.currency = _currency;
		this.accountValue = _accountValue;
		this.email = _email;
		this.senha = _senha;
	}
}
