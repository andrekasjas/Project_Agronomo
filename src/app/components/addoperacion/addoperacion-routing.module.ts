import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddoperacionPage } from './addoperacion.page';

const routes: Routes = [
  {
    path: '',
    component: AddoperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddoperacionPageRoutingModule {}
