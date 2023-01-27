import { Component, OnInit } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table'
import { Habitant } from '../classes/habitant';
import { HabitantService } from '../services/habitant.service';
 

@Component({
  selector: 'app-habitant',
  templateUrl: './habitant.component.html',
  styleUrls: ['./habitant.component.css']
})
export class HabitantComponent implements OnInit {

  tabs: string[] = ['id', 'cin','nom', 'prenom', 'tel', 'residence','copropriete','appartement',];
  lesHabitant !: Habitant[];
  dataSource!: MatTableDataSource<any>;

  constructor(private habitantservice : HabitantService) { }

  ngOnInit(): void {
    // this.habitantservice.getHabitants().subscribe(
    //   (value) =>{ 
    //     this.lesHabitant = value;
    //    this.dataSource = new MatTableDataSource(this.lesHabitant);}
    // )

    this.afficherProduits();
  
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  afficherProduits(){
    this.habitantservice.getHabitants().subscribe( (data:any[]) => this.lesHabitant = data)
    }
    
    
 
    
  }
  
