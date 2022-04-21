import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGridPageComponent } from './menu-grid-page.component';

describe('MenuGridPageComponent', () => {
  let component: MenuGridPageComponent;
  let fixture: ComponentFixture<MenuGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGridPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
