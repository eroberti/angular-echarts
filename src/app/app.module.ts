
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Scatter3dChartComponent } from './scatter3d-chart/scatter3d-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    Scatter3dChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
