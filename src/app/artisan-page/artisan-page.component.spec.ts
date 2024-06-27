import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanPageComponent } from './artisan-page.component';

describe('ArtisanPageComponent', () => {
  let component: ArtisanPageComponent;
  let fixture: ComponentFixture<ArtisanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtisanPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtisanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
