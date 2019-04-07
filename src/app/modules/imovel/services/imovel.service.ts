import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imovel } from '../imovel';
import { take } from 'rxjs/operators';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  private endpoint : string = environment.api + '/imoveis'; //rota da api criada
  constructor(
    private http: HttpClient //cuidar para importar o angular/common/http
  ) { }
  findAll(): Observable<Imovel[]> {//observable fica observando se tem alteração e retorna
    return this.http.get<Imovel[]>(this.endpoint)
     /* .pipe(
        delay(1000),
        tap(console.log)
      )*/
  }
  findOne(id: string): Observable<Imovel> {
    return this.http.get<Imovel>(this.endpoint + '/' + id)
      .pipe(take(1)) //só um
  }
  create(imovel: Imovel) {
    return this.http.post(this.endpoint, imovel)
     .pipe(take(1))
  }
  update(id: string, imovel: Imovel) {
    return this.http.put(this.endpoint + '/' + id, imovel)
      .pipe(take(1))
  }
  delete(id: string) {
    return this.http.delete(this.endpoint + '/' + id)
      .pipe(take(1))
  }
}
