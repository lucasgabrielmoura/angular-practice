import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  //Atributos
  public "vetorProduto":Produto[];
  public "produto":Produto;
  public "id":number;
  public "valorFechar":number;

  //Construtor
  constructor(private servico:CursosService) { }

  //Inicialização
  ngOnInit(): void {
    this.produto = new Produto();
    this.vetorProduto = this.servico.listar();
  }

  cadastrar(imgc:any,nomec:any, valorc:any, areac:any){
    if(imgc == undefined || nomec == undefined || valorc == undefined || areac == undefined){
      alert("Campos não preenchidos")
    }else{
      this.servico.cadastrar(this.produto);
      this.produto = new Produto();
      this.fecharPopMenuC()
    }
  }

  deletarCurso(id:any){
    this.servico.excluir(id);
  }
  editarCurso(id:any){
    this.id = id

    document.querySelector(".pop-menu")?.classList.toggle("active");

    this.produto = new Produto(
      this.vetorProduto[id].imgProduto,
      this.vetorProduto[id].nomeProduto,
      this.vetorProduto[id].valorProduto,
      this.vetorProduto[id].tipoProduto
    );

  }

  fecharPopMenu(){
    document.querySelector(".pop-menu")?.classList.toggle("active");
    this.produto = new Produto();
  }
  fecharPopMenuC(){
    document.querySelector(".pop-menu-c")?.classList.toggle("active");
    this.produto = new Produto();
  }

  atualizarProduto(imgc:any,nomec:any, valorc:any, areac:any){
    if(nomec == "" || valorc == null || areac == ""){
      alert("Campos não preenchidos")
    }else{
      document.querySelector(".pop-menu")?.classList.toggle("active");
      this.servico.alterar(this.id, this.produto)
      this.produto = new Produto();
    }
    
  }

  
}
