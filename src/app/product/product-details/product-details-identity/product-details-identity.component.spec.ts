import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsIdentityComponent } from './product-details-identity.component';

describe('ProductDetailsIdentityComponent', () => {
  let component: ProductDetailsIdentityComponent;
  let fixture: ComponentFixture<ProductDetailsIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
