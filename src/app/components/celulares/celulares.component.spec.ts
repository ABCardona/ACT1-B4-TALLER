import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celulares } from './celulares.component';

describe('Celulares', () => {
  let component: Celulares;
  let fixture: ComponentFixture<Celulares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Celulares],
    }).compileComponents();

    fixture = TestBed.createComponent(Celulares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
