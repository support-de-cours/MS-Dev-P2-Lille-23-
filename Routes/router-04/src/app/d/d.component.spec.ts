import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DComponent } from './d.component';

describe('DComponent', () => {
  let component: DComponent;
  let fixture: ComponentFixture<DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
