import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CombinationComponent } from './combination/combination.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/cre', pathMatch: 'full' },
  { path: 'com', component: CombinationComponent },
  { path: 'cre', component: CreateComponent },
  { path: '**', redirectTo: '/cre', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
