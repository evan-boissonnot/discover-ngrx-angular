import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from './store/reducers';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
