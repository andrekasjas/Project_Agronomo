import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditfincaPage } from './editfinca.page';

const routes: Routes = [
  {
    path: '',
    component: EditfincaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditfincaPageRoutingModule {}
