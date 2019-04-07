import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisListComponent } from './imoveis-list.component';

describe('ImoveisListComponent', () => {
  let component: ImoveisListComponent;
  let fixture: ComponentFixture<ImoveisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImoveisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
