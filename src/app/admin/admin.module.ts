import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import{ HttpClientModule} from '@angular/common/http'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatTableModule} from '@angular/material/table'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSliderModule } from '@angular/material/slider'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { DepensesComponent } from './depenses/depenses.component';
import { HabitantComponent } from './habitant/habitant.component';
import { ListdepensesComponent } from './listdepenses/listdepenses.component';
import { ListpaiementComponent } from './listpaiement/listpaiement.component';
import { ModifierHabitantComponent } from './modifierhabitant/modifierhabitant.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SettingComponent } from './setting/setting.component';
import { SideComponent } from './side/side.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DepensesComponent,
    HabitantComponent,
    ListdepensesComponent,
    ListpaiementComponent,
    ModifierHabitantComponent,
    PaiementComponent,
    SettingComponent,
    SideComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatSortModule,
    CdkTableModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  
})
export class AdminModule { }
