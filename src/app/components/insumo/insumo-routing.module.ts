import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsumoPage } from './insumo.page';

const routes: Routes = [
  {
    path: '',
    component: InsumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsumoPageRoutingModule {}
