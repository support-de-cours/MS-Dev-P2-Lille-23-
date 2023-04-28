import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinComponent } from './machin.component';

describe('MachinComponent', () => {
  let component: MachinComponent;
  let fixture: ComponentFixture<MachinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
