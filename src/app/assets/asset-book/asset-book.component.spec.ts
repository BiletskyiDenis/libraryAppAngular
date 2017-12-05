import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBookComponent } from './asset-book.component';

describe('AssetBookComponent', () => {
  let component: AssetBookComponent;
  let fixture: ComponentFixture<AssetBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
