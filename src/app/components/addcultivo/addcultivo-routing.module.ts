import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcultivoPage } from './addcultivo.page';

const routes: Routes = [
  {
    path: '',
    component: AddcultivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcultivoPageRoutingModule {}
