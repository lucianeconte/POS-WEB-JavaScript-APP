import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-imovel-form',
  templateUrl: './imovel-form.component.html',
  styleUrls: ['./imovel-form.component.scss']
})
export class ImovelFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Output() onSubmit = new EventEmitter(); //usar o import angular/core
  constructor() { }

  ngOnInit() {
  }
  submit() {
    this.onSubmit.emit();
  }

}
