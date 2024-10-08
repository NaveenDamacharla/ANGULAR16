import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { SBindingComponent } from './components/s-binding/s-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    PBindingComponent,
    CBindingComponent,
    SBindingComponent,
    EBindingComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
