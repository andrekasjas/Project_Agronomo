import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddencargadosPage } from './addencargados.page';

const routes: Routes = [
  {
    path: '',
    component: AddencargadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddencargadosPageRoutingModule {}
