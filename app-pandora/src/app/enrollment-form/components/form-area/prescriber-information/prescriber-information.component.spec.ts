import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberInformationComponent } from './prescriber-information.component';

describe('PrescriberInformationComponent', () => {
  let component: PrescriberInformationComponent;
  let fixture: ComponentFixture<PrescriberInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriberInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrescriberInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
