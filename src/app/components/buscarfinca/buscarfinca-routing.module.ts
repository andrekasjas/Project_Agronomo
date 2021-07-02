import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarfincaPage } from './buscarfinca.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarfincaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarfincaPageRoutingModule {}
