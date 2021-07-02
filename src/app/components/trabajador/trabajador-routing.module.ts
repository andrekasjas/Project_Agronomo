import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajadorPage } from './trabajador.page';

const routes: Routes = [
  {
    path: '',
    component: TrabajadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajadorPageRoutingModule {}
