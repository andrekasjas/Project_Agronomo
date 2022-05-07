import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsumoPageRoutingModule } from './insumo-routing.module';

import { InsumoPage } from './insumo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsumoPageRoutingModule
  ],
  declarations: [InsumoPage]
})
export class InsumoPageModule {}
