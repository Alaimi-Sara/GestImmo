import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Depenses } from 'src/app/classes/depenses';
import { DepensesService } from 'src/app/services/depenses.service';
import { DepensesComponent } from '../depenses/depenses.component';

@Component({
  selector: 'app-listdepenses',
  templateUrl: './listdepenses.component.html',
  styleUrls: ['./listdepenses.component.css']
})
export class ListdepensesComponent implements OnInit {

  displayedColumns: string[] = ['type','montant','action'];
  dataSource!: MatTableDataSource<any>;
  lesDepenses !: Depenses[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog,
    private depenseservice:DepensesService) { }

  ngOnInit(): void {

    this.depenseservice.getDepensess().subscribe(
      (value) =>{
        this.lesDepenses = value['depensess'];
        this.dataSource = new MatTableDataSource(this.lesDepenses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } 
    )
  }

  onEditProduct(row : any){
    this.dialog.open(DepensesComponent, {
      width: "30%",
      data : row
    })    
}
onDeleteProduct = (id : number)=>{
  this.depenseservice.deleteDepenses(id).subscribe(value => {
    this.lesDepenses = this.lesDepenses.filter(elt =>elt.id !== id)
    this.dataSource.data = this.lesDepenses
  })
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
