import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDemoComponent } from './kendo-demo.component';

describe('KendoDemoComponent', () => {
  let component: KendoDemoComponent;
  let fixture: ComponentFixture<KendoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
