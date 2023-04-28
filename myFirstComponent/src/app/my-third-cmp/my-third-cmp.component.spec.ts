import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThirdCmpComponent } from './my-third-cmp.component';

describe('MyThirdCmpComponent', () => {
  let component: MyThirdCmpComponent;
  let fixture: ComponentFixture<MyThirdCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyThirdCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyThirdCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
