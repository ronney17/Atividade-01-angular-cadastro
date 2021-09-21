import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Variáveis globais
  mostrarBtn = false;
  esconderInputs = true;
  mostrarBtnCadastro = true;
  mostrarBtnExcluir = true;
  mostrarBtnProcurar = true;

  //Função para o botão novo e alterar
  novo() {
    this.mostrarBtn = true;
    this.esconderInputs = false;
    this.mostrarBtnCadastro = false;
  }
  //Função para o botão excluir
  excluir() {
    this.mostrarBtn = true;
    this.mostrarBtnExcluir = false;
  }
  //Função para o botão procurar
  procurar() {
    this.mostrarBtn = true;
    this.mostrarBtnProcurar = false;
  }
}
