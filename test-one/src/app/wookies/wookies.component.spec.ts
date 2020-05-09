import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WookiesComponent } from './wookies.component';
import { Store, StoreModule } from '@ngrx/store';

describe('WookiesComponent', () => {
  let component: WookiesComponent;
  let fixture: ComponentFixture<WookiesComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ WookiesComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WookiesComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
