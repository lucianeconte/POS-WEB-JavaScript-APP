import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImoveisRoutingModule } from './imoveis-routing.module';
import { ImoveisListComponent } from './imoveis-list/imoveis-list.component';
import { ImoveisCreateComponent } from './imoveis-create/imoveis-create.component';
import { ImoviesUpdateComponent } from './imovies-update/imovies-update.component';
import { ImovelModule } from 'src/app/modules/imovel/imovel.module';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [ImoveisListComponent, ImoveisCreateComponent, ImoviesUpdateComponent],
  imports: [
    CommonModule,
    ImovelModule,
    ImoveisRoutingModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule
  ]
})
export class ImoveisModule { }
