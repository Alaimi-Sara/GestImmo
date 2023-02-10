import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path:'**',component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
