import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndTestComponent } from './dnd-test.component';

describe('DndTestComponent', () => {
  let component: DndTestComponent;
  let fixture: ComponentFixture<DndTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
