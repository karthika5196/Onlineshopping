import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdisplyComponent } from './productdisply.component';

describe('ProductdisplyComponent', () => {
  let component: ProductdisplyComponent;
  let fixture: ComponentFixture<ProductdisplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdisplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdisplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
