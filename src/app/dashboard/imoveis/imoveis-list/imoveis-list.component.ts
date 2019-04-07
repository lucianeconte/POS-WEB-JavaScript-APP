import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovel } from 'src/app/modules/imovel/imovel';
import { ImovelService } from 'src/app/modules/imovel/services/imovel.service';

@Component({
  selector: 'app-imoveis-list',
  templateUrl: './imoveis-list.component.html',
  styleUrls: ['./imoveis-list.component.scss']
})
export class ImoveisListComponent implements OnInit {
  imoveis$: Observable<Imovel[]>;
  constructor(
    private imovelService: ImovelService
  ) { }

  ngOnInit() {
    this.onRefresh()
  }
  onRefresh() {
    this.imoveis$ = this.imovelService.findAll();
  }
  onDelete(id: string){
    this.imovelService.delete(id).subscribe(
      (response) => {
        console.log(response),
        this.onRefresh()
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
