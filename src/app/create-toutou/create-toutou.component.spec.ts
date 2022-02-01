import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToutouComponent } from './create-toutou.component';

describe('CreateToutouComponent', () => {
  let component: CreateToutouComponent;
  let fixture: ComponentFixture<CreateToutouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateToutouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateToutouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
