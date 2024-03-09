import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from 'src/app/interfaces/iItem';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>
  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) {

  }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }

  editarItem(item: Item) : void {
    this.itemParaSerEditado = item;
  }

  excluirItem(id: number) : void {
    const index = this.listaDeCompra.findIndex((item)=>item.id === id);
    this.listaDeCompra.splice(index, 1);
  }

  limparLista() : void {
    this.listaDeCompra = [];
  }
}
