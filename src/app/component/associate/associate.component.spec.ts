import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateComponent } from './associate.component';

describe('AssociateComponent', () => {
  let component: AssociateComponent;
  let fixture: ComponentFixture<AssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
