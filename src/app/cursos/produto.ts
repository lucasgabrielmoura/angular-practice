//Classe
export class Produto{
    
    //Atributos
    public imgProduto:any;
    public nomeProduto:any;
    public valorProduto:any;
    public tipoProduto:any;

    //Constructor
    constructor(img?:string,nome?:string, valor?:number, area?:string){
        this.imgProduto = img;
        this.nomeProduto = nome;
        this.valorProduto = valor;
        this.tipoProduto = area;
    }
}