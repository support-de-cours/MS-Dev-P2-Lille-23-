import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondComponentComponent } from './my-second-component.component';

describe('MySecondComponentComponent', () => {
  let component: MySecondComponentComponent;
  let fixture: ComponentFixture<MySecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecondComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
