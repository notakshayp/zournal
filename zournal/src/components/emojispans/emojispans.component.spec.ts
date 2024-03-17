import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojispansComponent } from './emojispans.component';

describe('EmojispansComponent', () => {
  let component: EmojispansComponent;
  let fixture: ComponentFixture<EmojispansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojispansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmojispansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
