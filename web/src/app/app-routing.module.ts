import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './kanban/components/kanban-board/kanban-board.component';

const routes: Routes = [
  { path: 'table', component: KanbanBoardComponent },
  { path: '**', redirectTo: 'table' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
