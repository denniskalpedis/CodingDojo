import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { MemoryComponent } from './memory/memory.component';

const routes: Routes = [
  {path: 'edit/:id', component: EditComponent},
  {path: 'add', component: AddComponent},
  {path: 'memory', component: MemoryComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
