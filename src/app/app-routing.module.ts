import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';

const routes: Routes = [
  { path: '', component: TodoComponentComponent },
  { path: '*', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
