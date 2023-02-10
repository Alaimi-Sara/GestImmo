import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Habitant } from 'src/app/classes/habitant';
import { HabitantService } from 'src/app/services/habitant.service';
import { ModifierHabitantComponent } from '../modifierhabitant/modifierhabitant.component';
import { PaiementComponent } from '../paiement/paiement.component';
import { DepensesComponent } from '../depenses/depenses.component';


@Component({
  selector: 'app-habitant',
  templateUrl: './habitant.component.html',
  styleUrls: ['./habitant.component.css']
})
export class HabitantComponent implements OnInit {

  tabs: string[] = ['id', 'cin','nom', 'prenom', 'tel', 'residence','copropriete','appartement','action'];
  lesHabitant !: Habitant[];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private habitantservice : HabitantService,
    private dialog: MatDialog,
    // @Inject(MAT_DIALOG_DATA) public editData: any,
    ) { }

  ngOnInit(): void {
    this.habitantservice.getHabitants().subscribe(
      (value) =>{ 
        this.lesHabitant = value['habitants'];
       this.dataSource = new MatTableDataSource(this.lesHabitant);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;}
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openForm() {
    const dialogRef = this.dialog.open(ModifierHabitantComponent,{
      width: "30%"
    });
  }

  openForm1() {
    const dialogRef = this.dialog.open(PaiementComponent,{
      width: "30%"
    });
  }

  openForm2() {
    const dialogRef = this.dialog.open(DepensesComponent,{
      width: "30%"
    });
  }

  onEditProduct(element : any){
      this.dialog.open(ModifierHabitantComponent, {
        width: "30%",
        data : element
      })    
  }
  onDeleteProduct = (id : number)=>{
    this.habitantservice.deleteHabitants(id).subscribe(value => {
      this.lesHabitant = this.lesHabitant.filter(elt =>elt.id !== id)
      this.dataSource.data = this.lesHabitant
    })
  }

  

    
  }
  
