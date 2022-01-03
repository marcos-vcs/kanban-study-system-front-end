import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKanbanPageComponent } from './about-kanban-page.component';

describe('AboutKanbanPageComponent', () => {
  let component: AboutKanbanPageComponent;
  let fixture: ComponentFixture<AboutKanbanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutKanbanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutKanbanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
