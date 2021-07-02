import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
   {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'correo',
    loadChildren: () => import('./correo/correo.module').then((m) => m.CorreoPageModule),
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then((m) => m.VerifyEmailPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./components/proveedores/proveedores.module').then( m => m.ProveedoresPageModule)
  },
  {
    path: 'addfinca',
    loadChildren: () => import('./components/addfinca/addfinca.module').then( m => m.AddfincaPageModule)
  },
  {
    path: 'editfinca',
    loadChildren: () => import('./components/editfinca/editfinca.module').then( m => m.EditfincaPageModule)
  },  {
    path: 'buscarfinca',
    loadChildren: () => import('./components/buscarfinca/buscarfinca.module').then( m => m.BuscarfincaPageModule)
  },
  {
    path: 'addlote',
    loadChildren: () => import('./components/addlote/addlote.module').then( m => m.AddlotePageModule)
  },
  {
    path: 'addcultivo',
    loadChildren: () => import('./components/addcultivo/addcultivo.module').then( m => m.AddcultivoPageModule)
  },
  {
    path: 'addoperacion',
    loadChildren: () => import('./components/addoperacion/addoperacion.module').then( m => m.AddoperacionPageModule)
  },
  {
    path: 'addencargados',
    loadChildren: () => import('./components/addencargados/addencargados.module').then( m => m.AddencargadosPageModule)
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
