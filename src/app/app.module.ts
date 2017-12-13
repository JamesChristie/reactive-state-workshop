import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ColorComponent } from './color/color.component';
import { ControlsComponent } from './controls/controls.component';
import { countReducer } from './state/count.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ColorComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({
      count: countReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
