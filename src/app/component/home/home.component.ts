import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InscrireComponent } from '../inscrire/inscrire.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openForm() {
    const dialogRef = this.dialog.open(InscrireComponent,{
      width: "30%"
    });
  }
}
