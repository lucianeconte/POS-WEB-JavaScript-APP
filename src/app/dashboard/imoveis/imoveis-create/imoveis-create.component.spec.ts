import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisCreateComponent } from './imoveis-create.component';

describe('ImoveisCreateComponent', () => {
  let component: ImoveisCreateComponent;
  let fixture: ComponentFixture<ImoveisCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImoveisCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
