import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetJournalComponent } from './asset-journal.component';

describe('AssetJournalComponent', () => {
  let component: AssetJournalComponent;
  let fixture: ComponentFixture<AssetJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
