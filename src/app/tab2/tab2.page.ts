import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '+', '-'];
  ponto = ['.'];

  constructor() {}

  ngOnInit() {}

  calcularOperacao(){
    this.resultado = evaluate(this.operacao);
  }

  adicionarValor(valor: string) {
    this.caracter = this.caracteres.includes(valor);

    if (!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }

    if (!this.operacao) {
    }
  }
  limparOperacao(){
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  limparMemoria(){
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  apagarCaracter(){
    if(this.operacao.length > 0) {
      this.operacao =this.operacao.substring(0, this.operacao.length - 1);
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1);
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);
  }
  
}
