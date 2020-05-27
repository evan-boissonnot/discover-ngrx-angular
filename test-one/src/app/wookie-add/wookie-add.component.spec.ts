import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WookieAddComponent } from './wookie-add.component';
import { Store, StoreModule } from '@ngrx/store';

describe('WookieAddComponent', () => {
  let component: WookieAddComponent;
  let fixture: ComponentFixture<WookieAddComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ WookieAddComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieAddComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
