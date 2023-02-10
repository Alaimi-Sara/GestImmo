import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paiement } from 'src/app/classes/paiement';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-listpaiement',
  templateUrl: './listpaiement.component.html',
  styleUrls: ['./listpaiement.component.css']
})
export class ListpaiementComponent implements OnInit {

  tabs: string[] = ['nom', 'prenom', 'montant', 'date'];
  lesPaiements !: Paiement[];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private paiementservice:PaiementService) { }

  ngOnInit(): void {

    this.paiementservice.getPaiements().subscribe(
      (value) =>{ 
        this.lesPaiements = value['paiements'];
       this.dataSource = new MatTableDataSource(this.lesPaiements);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;})
      }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}















