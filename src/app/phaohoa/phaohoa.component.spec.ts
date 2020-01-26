import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaohoaComponent } from './phaohoa.component';

describe('PhaohoaComponent', () => {
  let component: PhaohoaComponent;
  let fixture: ComponentFixture<PhaohoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaohoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaohoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
