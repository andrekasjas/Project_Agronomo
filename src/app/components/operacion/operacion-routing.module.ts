import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacionPage } from './operacion.page';

const routes: Routes = [
  {
    path: '',
    component: OperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionPageRoutingModule {}
