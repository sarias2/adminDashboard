import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdderComponent } from './adder/adder.component';
import { FormsModule } from '@angular/forms';
import { DonnutComponent } from './donnut/donnut.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AdderComponent,
    DonnutComponent
  ],
  exports: [
    AdderComponent,
    DonnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
