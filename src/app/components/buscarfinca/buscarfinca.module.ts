import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarfincaPageRoutingModule } from './buscarfinca-routing.module';

import { BuscarfincaPage } from './buscarfinca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarfincaPageRoutingModule
  ],
  declarations: [BuscarfincaPage]
})
export class BuscarfincaPageModule {}
