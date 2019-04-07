import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoviesUpdateComponent } from './imovies-update.component';

describe('ImoviesUpdateComponent', () => {
  let component: ImoviesUpdateComponent;
  let fixture: ComponentFixture<ImoviesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImoviesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoviesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
