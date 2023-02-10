import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HabitantComponent } from './habitant/habitant.component';
import { ListdepensesComponent } from './listdepenses/listdepenses.component';
import { ListpaiementComponent } from './listpaiement/listpaiement.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path:'admin',component:DashboardComponent,
  canActivate:[AuthGuard],
  children:[
    {path:'',redirectTo:'habitant',pathMatch:'full'},
    {path:'habitant',component:HabitantComponent},
    {path:'listDepenses',component:ListdepensesComponent},
    {path:'listPaiement',component:ListpaiementComponent},
    {path:'setting',component:SettingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
