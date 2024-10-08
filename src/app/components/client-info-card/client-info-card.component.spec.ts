import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoCardComponent } from './client-info-card.component';

describe('ClientInfoCardComponent', () => {
  let component: ClientInfoCardComponent;
  let fixture: ComponentFixture<ClientInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
