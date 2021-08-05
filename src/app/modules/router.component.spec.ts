import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRouterComponent } from './router.component';

describe('DashboardRouterComponent', () => {
  let component: DashboardRouterComponent;
  let fixture: ComponentFixture<DashboardRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
