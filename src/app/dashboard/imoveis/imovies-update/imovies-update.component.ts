import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImovelService } from 'src/app/modules/imovel/services/imovel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Imovel } from 'src/app/modules/imovel/imovel';

@Component({
  selector: 'app-imovies-update',
  templateUrl: './imovies-update.component.html',
  styleUrls: ['./imovies-update.component.scss']
})
export class ImoviesUpdateComponent implements OnInit {
  imovel$: Observable<Imovel>;
  imovelForm: FormGroup;
  imovelSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private service: ImovelService,
    private route: ActivatedRoute, //pega id
    private router: Router //redireciona
  ) {
    this.imovelForm = this.fb.group({
      _id: [null, Validators.required],
      tipo: [null, Validators.required],
      descricao: [null, Validators.required],
      locacao_venda: [null, Validators.required],
      preco: [null, Validators.required],
      ativo: [null, Validators.required],
      endereco: [null, Validators.required],
      proprietario: []
    });
   }


  ngOnInit() {
    console.log('qui');
    this.route.params.subscribe((params: any) => {
      console.log(params)
      this.imovelSub = this.service.findOne(params.id)
       .subscribe((imovel: Imovel) => {
         console.table(imovel)
         this.imovelForm.patchValue(imovel);
       })
    })
  }

  onSave() {
    let {_id, ...data } = this.imovelForm.value;
    //console.log(_id)
    //console.table(data)
    this.service.update(_id, data).subscribe(
      (response) => {
        console.table(response)
        this.router.navigate(['/dashboard', 'imoveis'])
      }
    )
  }

}
