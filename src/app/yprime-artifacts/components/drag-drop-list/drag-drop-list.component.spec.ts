import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropListComponent } from './drag-drop-list.component';

xdescribe('DragDropListComponent', () => {
  let component: DragDropListComponent;
  let fixture: ComponentFixture<DragDropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
