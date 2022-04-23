import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyserviceCompComponent } from './myservice-comp.component';

describe('MyserviceCompComponent', () => {
  let component: MyserviceCompComponent;
  let fixture: ComponentFixture<MyserviceCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyserviceCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyserviceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
