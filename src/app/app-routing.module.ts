import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'input',component:InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
