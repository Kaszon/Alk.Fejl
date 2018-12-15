import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPartnerPageComponent } from './new-partner-page.component';

describe('NewPartnerPageComponent', () => {
  let component: NewPartnerPageComponent;
  let fixture: ComponentFixture<NewPartnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPartnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPartnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
