import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashcarComponent } from './crashcar.component';

describe('CrashcarComponent', () => {
  let component: CrashcarComponent;
  let fixture: ComponentFixture<CrashcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrashcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
