import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('items') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) : Item {
    const id = this.listaDeCompra.length + 1;
    const item : Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    };

    return item;
  }

  adicionarItem(nomeDoItem: string) : void {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
  }

  editarItem(itemAntigo: Item, novoNome: string) : void {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: novoNome,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    };

    const id = itemAntigo.id;

    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
  }

  atualizarLocalStorage() : void {
    localStorage.setItem('items', JSON.stringify(this.listaDeCompra));
  };
}
