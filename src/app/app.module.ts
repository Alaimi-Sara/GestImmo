import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
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
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ConsulterComponent } from './component/consulter/consulter.component';
import { ErreurComponent } from './component/erreur/erreur.component';
import { HomeComponent } from './component/home/home.component';
import { InscrireComponent } from './component/inscrire/inscrire.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceComponent } from './component/service/service.component';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConsulterComponent, 
    ErreurComponent,
    HomeComponent,
    InscrireComponent,
    LoginComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
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
    MatNativeDateModule,
    RouterModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
