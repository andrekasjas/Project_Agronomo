import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfincaPage } from './addfinca.page';

const routes: Routes = [
  {
    path: '',
    component: AddfincaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfincaPageRoutingModule {}
