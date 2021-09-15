import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeroItemComponent } from './components/hero-item/hero-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FilterComponent,
    HeroItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
