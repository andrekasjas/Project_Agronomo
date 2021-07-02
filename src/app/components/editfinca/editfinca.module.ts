import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditfincaPageRoutingModule } from './editfinca-routing.module';

import { EditfincaPage } from './editfinca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditfincaPageRoutingModule
  ],
  declarations: [EditfincaPage]
})
export class EditfincaPageModule {}
