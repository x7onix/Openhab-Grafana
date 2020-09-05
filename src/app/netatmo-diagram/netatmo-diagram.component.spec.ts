import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetatmoDiagramComponent } from './netatmo-diagram.component';

describe('NetatmoDiagramComponent', () => {
  let component: NetatmoDiagramComponent;
  let fixture: ComponentFixture<NetatmoDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetatmoDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetatmoDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
