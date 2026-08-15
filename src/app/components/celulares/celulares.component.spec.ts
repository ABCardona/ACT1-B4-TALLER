import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CelularesComponent } from './celulares.component';

describe('CelularesComponent', () => {
  let component: CelularesComponent;
  let fixture: ComponentFixture<CelularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CelularesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CelularesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
