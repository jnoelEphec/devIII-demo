import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { KanbanCardComponent } from './components/kanban-card/kanban-card.component';
import { KanbanListComponent } from './components/kanban-list/kanban-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    KanbanBoardComponent,
    KanbanCardComponent,
    KanbanListComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
})
export class KanbanModule {}
