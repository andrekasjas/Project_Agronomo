import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddlotePage } from './addlote.page';

const routes: Routes = [
  {
    path: '',
    component: AddlotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddlotePageRoutingModule {}
