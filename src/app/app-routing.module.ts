import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitantComponent } from './habitant/habitant.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'habitant', title: 'list habitant', component: HabitantComponent },
  { path: 'home', title: 'Accueil', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
