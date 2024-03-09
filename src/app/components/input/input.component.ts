import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemParaSerEditado!: Item;
  editando: boolean = false;
  textoBotao: string = 'Salvar item';

  valorItem!: string;

  constructor(private listaCompraService: ListaDeCompraService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemParaSerEditado'].firstChange){
      this.editando = true;
      this.textoBotao = 'Editar item';
      this.valorItem = this.itemParaSerEditado?.nome;
    }
  }

  ngOnInit(): void { }

  adicionarItem() : void {
    this.listaCompraService.adicionarItem(this.valorItem);
    this.limparCampo();
  }

  editarItem() : void {
    this.listaCompraService.editarItem(this.itemParaSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBotao = 'Salvar item';
  }

  limparCampo() : void {
    this.valorItem = '';
  }
}
