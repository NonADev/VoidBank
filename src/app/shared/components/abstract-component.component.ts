import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'master',
	template: '<div>Test</div>'
})
export abstract class AbstractComponent implements OnInit {
	public static numberFormat(number: Number, positions: number = 2) {
		return number.toFixed(positions);
	}

	abstract ngOnInit(): void;
}
