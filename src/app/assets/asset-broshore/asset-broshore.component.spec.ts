import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBroshoreComponent } from './asset-broshore.component';

describe('AssetBroshoreComponent', () => {
  let component: AssetBroshoreComponent;
  let fixture: ComponentFixture<AssetBroshoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetBroshoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetBroshoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
