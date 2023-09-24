import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponentUser } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponentUser;
  let fixture: ComponentFixture<SidebarComponentUser>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponentUser]
    });
    fixture = TestBed.createComponent(SidebarComponentUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
