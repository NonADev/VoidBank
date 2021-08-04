import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'master',
	template: '<div>Test</div>'
})
export abstract class AbstractComponent implements OnInit {
	static numberFormat(number: Number, positions: number = 2) {
		return number.toFixed(positions);
	}

	static passwordIsValid(password: string): { valid: boolean, error: string[] } {
		let retorno = {
			valid: true,
			error: new Array()
		};

		if (password.length < 8) {
			retorno.valid = false;
			retorno.error.push('Tamanho insuficiente');
		}

		if (!this.hasNumber(password)) {
			retorno.valid = false;
			retorno.error.push('Senha sem número');
		}

		return retorno;
	}

	static hasNumber(myString: string): boolean {
		return /\d/.test(myString);
	}

	abstract ngOnInit(): void;
}
