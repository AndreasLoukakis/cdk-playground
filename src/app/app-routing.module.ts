import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardCollectionComponent } from './pages/card-collection/card-collection.component';
import { SimpleTableComponent } from './pages/simple-table/simple-table.component';


const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table', component: SimpleTableComponent},
  { path: 'cards', component: CardCollectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
