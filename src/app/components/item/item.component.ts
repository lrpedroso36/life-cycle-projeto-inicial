import { Item } from 'src/app/interfaces/iItem';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item! : Item;
  @Output() emitindoItemParaEdicao = new EventEmitter();
  @Output() emitindoIdParaExclusao = new EventEmitter();


  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  editarItem() : void {
    this.emitindoItemParaEdicao.emit(this.item);
  }

  excluirItem() : void {
    this.emitindoIdParaExclusao.emit(this.item?.id);
  }
}
