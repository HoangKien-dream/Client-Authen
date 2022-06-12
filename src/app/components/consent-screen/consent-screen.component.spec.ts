import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentScreenComponent } from './consent-screen.component';

describe('ConsentScreenComponent', () => {
  let component: ConsentScreenComponent;
  let fixture: ComponentFixture<ConsentScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
