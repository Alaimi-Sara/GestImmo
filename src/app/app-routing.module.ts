import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HabitantComponent } from './admin/habitant/habitant.component';
import { ListdepensesComponent } from './admin/listdepenses/listdepenses.component';
import { ListpaiementComponent } from './admin/listpaiement/listpaiement.component';
import { SettingComponent } from './admin/setting/setting.component';
import { SideComponent } from './admin/side/side.component';
import { ConsulterComponent } from './component/consulter/consulter.component';
import { ErreurComponent } from './component/erreur/erreur.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceComponent } from './component/service/service.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'consulter',component:ConsulterComponent},
  {path:'service',component:ServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:DashboardComponent},
  {path:'side',component:SideComponent},
  {path:'listhabitant',component:HabitantComponent},
  {path:'listpaiement',component:ListpaiementComponent},
  {path:'listdepense',component:ListdepensesComponent},
  {path:'setting',component:SettingComponent},
  {path:'**',component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
