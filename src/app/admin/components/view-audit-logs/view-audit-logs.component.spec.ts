import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuditLogsComponent } from './view-audit-logs.component';

describe('ViewAuditLogsComponent', () => {
  let component: ViewAuditLogsComponent;
  let fixture: ComponentFixture<ViewAuditLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAuditLogsComponent]
    });
    fixture = TestBed.createComponent(ViewAuditLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
