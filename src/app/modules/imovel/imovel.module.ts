import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImovelFormComponent } from './imovel-form/imovel-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImovelFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ImovelFormComponent
  ]
})
export class ImovelModule { }
