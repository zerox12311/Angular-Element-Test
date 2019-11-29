import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleTestComponent } from './ele-test.component';

describe('EleTestComponent', () => {
  let component: EleTestComponent;
  let fixture: ComponentFixture<EleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
