import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './kanban/components/kanban-board/kanban-board.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full'}, {path: 'login', component: LoginComponent}, { path: 'table', component: KanbanBoardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
