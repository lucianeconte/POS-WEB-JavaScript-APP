import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImoveisListComponent } from './imoveis-list/imoveis-list.component';
import { ImoveisCreateComponent } from './imoveis-create/imoveis-create.component';
import { ImoviesUpdateComponent } from './imovies-update/imovies-update.component';

const routes: Routes = [{
  path: '',
  component: ImoveisListComponent
}, {
  path: 'create',
  component: ImoveisCreateComponent
}, {
  path: 'update/:id',
  component: ImoviesUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImoveisRoutingModule { }
