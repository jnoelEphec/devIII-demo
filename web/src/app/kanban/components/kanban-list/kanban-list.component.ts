import { Component, Input, OnInit } from '@angular/core';
import { CardList } from '../../models/card-list';

@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss'],
})
export class KanbanListComponent implements OnInit {
  @Input()
  list!: CardList;

  constructor() {}

  ngOnInit(): void {}

  addCard(): void {
    this.list.cards.push({ content: 'New Task' });
  }
}
