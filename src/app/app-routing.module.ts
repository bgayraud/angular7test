import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollTestComponent } from './scroll-test/scroll-test.component';
import { DndTestComponent } from './dnd-test/dnd-test.component';

const routes: Routes = [
  {path: 'scroll-test', component: ScrollTestComponent},
  {path: 'dnd-test', component: DndTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
