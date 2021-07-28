import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  @Input() public atualizaPasso!: (pagina: number) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
