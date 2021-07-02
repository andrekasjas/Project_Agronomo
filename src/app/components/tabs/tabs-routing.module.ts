import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'finca',
        loadChildren: () => import('../finca/finca.module').then(m => m.FincaPageModule)
      },
      {
        path: 'addfinca/:idadministrador',
        loadChildren: () => import('../addfinca/addfinca.module').then(m => m.AddfincaPageModule)
      },
      {
        path: 'editfinca/:idfinca',
        loadChildren: () => import('../editfinca/editfinca.module').then(m => m.EditfincaPageModule)
      },
      {
        path: 'buscarfinca/:text',
        loadChildren: () => import('../buscarfinca/buscarfinca.module').then(m => m.BuscarfincaPageModule)
      },
      {
        path: 'lote/:idfinca',
        loadChildren: () => import('../lote/lote.module').then( m => m.LotePageModule)
      },
      {
        path: 'addlote/:idfinca',
        loadChildren: () => import('../addlote/addlote.module').then(m => m.AddlotePageModule)
      },
      {
        path: 'cultivo/:idlote',
        loadChildren: () => import('../cultivo/cultivo.module').then( m => m.CultivoPageModule)
      },
      {
        path: 'addcultivo/:idlote',
        loadChildren: () => import('../addcultivo/addcultivo.module').then(m => m.AddcultivoPageModule)
      },
      {
        path: 'proveedor/:idfactura',
        loadChildren: () => import('../proveedor/proveedor.module').then( m => m.ProveedorPageModule)
      },
      {
        path: 'trabajador/:idoperacion',
        loadChildren: () => import('../trabajador/trabajador.module').then( m => m.TrabajadorPageModule)
      },
      {
        path: 'addencargados/:idoperacion',
        loadChildren: () => import('../addencargados/addencargados.module').then(m => m.AddencargadosPageModule)
      },
      {
        path: 'trabajadores',
        loadChildren: () => import('../trabajadores/trabajadores.module').then( m => m.TrabajadoresPageModule)
      },
      {
        path: 'operacion/:idcultivo',
        loadChildren: () => import('../operacion/operacion.module').then( m => m.OperacionPageModule)
      },
      {
        path: 'addoperacion/:idcultivo',
        loadChildren: () => import('../addoperacion/addoperacion.module').then(m => m.AddoperacionPageModule)
      },
      {
        path: 'insumo/:idoperacion',
        loadChildren: () => import('../insumo/insumo.module').then( m => m.InsumoPageModule)
      },
      {
        path: 'factura/:idinsumo',
        loadChildren: () => import('../factura/factura.module').then( m => m.FacturaPageModule)
      },
      {
        path: 'proveedores',
        loadChildren: () => import('../proveedores/proveedores.module').then( m => m.ProveedoresPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/finca',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TabsPageRoutingModule {}
