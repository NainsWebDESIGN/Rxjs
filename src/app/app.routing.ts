import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { OperatorsComponent } from './operators/operators.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/Create', pathMatch: 'full' },
  { path: 'Operators', component: OperatorsComponent },
  { path: 'Create', component: CreateComponent },
  { path: '**', redirectTo: '/Create', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
