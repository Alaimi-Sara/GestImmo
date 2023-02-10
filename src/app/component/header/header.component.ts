import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { DepensesComponent } from 'src/app/admin/depenses/depenses.component';
import { ModifierHabitantComponent } from 'src/app/admin/modifierhabitant/modifierhabitant.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isConnected = this.userservise.user ? true : false;

  constructor(private dialog: MatDialog, private userservise:UserService) { }

  ngOnInit(): void {
  }

  openForm() {
    const dialogRef = this.dialog.open(ModifierHabitantComponent,{
      width: "30%"
    });
  }
  openForm1() {
    const dialogRef = this.dialog.open(DepensesComponent,{
      width: "30%"
    });
  }
}
