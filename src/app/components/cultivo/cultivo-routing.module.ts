import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CultivoPage } from './cultivo.page';

const routes: Routes = [
  {
    path: '',
    component: CultivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CultivoPageRoutingModule {}
