import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovel } from 'src/app/modules/imovel/imovel';
import { ImovelService } from 'src/app/modules/imovel/services/imovel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imoveis$: Observable<Imovel[]>
  constructor(
    private imovelService: ImovelService
  ) { }

  ngOnInit() {
    this.imoveis$ = this.imovelService.findAll()
  }

}
