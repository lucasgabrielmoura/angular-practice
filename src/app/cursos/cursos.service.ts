import { Injectable } from '@angular/core';
import { Produto } from './produto';

//Acesso total do serviço
@Injectable({
  providedIn: 'root'
})

//Classe
export class CursosService {

  //Constructor
  constructor() { }

  //Vetor de Cursos
  private vetorProdutos:Produto[] = [
    new Produto("https://conteudo.imguol.com.br/c/entretenimento/52/2020/07/06/ovo-1594070430431_v2_3x4.jpg","Ovo",30,"alimento"),
    new Produto("https://img.itdg.com.br/tdg/images/blog/uploads/2021/07/shutterstock_1010586004.jpg","Frango",25,"alimento"),
    new Produto("https://carrefourbr.vtexassets.com/arquivos/ids/215979/5666732_3.jpg?v=637272522183900000","Sabão Omo",13,"limpeza")
  ];

  //Cadastro de Cursos
  public cadastrar(produto:Produto){
    this.vetorProdutos.push(produto);
  }

  //Seleção de Cursos
  public listar(){
    return this.vetorProdutos;
  }

  //Alteração de Cursos
  public alterar(id:number, curso:Produto){
    this.vetorProdutos[id] = curso;
  }

  //Exclusão de Cursos
  public excluir(id:number){
    this.vetorProdutos.splice(id, 1);
  }
}
