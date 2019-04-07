import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImovelService } from 'src/app/modules/imovel/services/imovel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imoveis-create',
  templateUrl: './imoveis-create.component.html',
  styleUrls: ['./imoveis-create.component.scss']
})
export class ImoveisCreateComponent implements OnInit {
  imovelForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: ImovelService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.imovelForm = this.fb.group({
      tipo: [null, Validators.required],
      descricao: [null, Validators.required],
      preco: [],
      locacao_venda: [null, Validators.required],
      endereco: [null, Validators.required],
      ativo: [],
      proprietario: []
    })
   }

  ngOnInit() {
  }
  onSave() {
    this.service.create(
      this.imovelForm.value
    ).subscribe(
      (response) => {
        console.log('resposta: ', response)
        this.router.navigate(['..'], {
          relativeTo: this.route
        })
      } 
    )   
  }
}
