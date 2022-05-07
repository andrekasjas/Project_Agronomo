import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddencargadosPageRoutingModule } from './addencargados-routing.module';

import { AddencargadosPage } from './addencargados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddencargadosPageRoutingModule, 
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddencargadosPage]
})
export class AddencargadosPageModule {}
