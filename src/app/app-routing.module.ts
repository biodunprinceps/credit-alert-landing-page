import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'privacy-policy', loadChildren: () => import('./modules/privacy/privacy.module').then(m => m.PrivacyModule) },
  { path: '', loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
