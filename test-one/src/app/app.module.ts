import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { WookiesComponent } from './wookies/wookies.component';
import { WookiesEffects } from './store/effects/wookies.effects';
import { WookieAddComponent } from './wookie-add/wookie-add.component';

@NgModule({
  declarations: [
    AppComponent,
    WookiesComponent,
    WookieAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([WookiesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
