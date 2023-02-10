import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Depenses } from 'src/app/classes/depenses';
import { DepensesService } from 'src/app/services/depenses.service';


@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit {
  lesTypes:string[]=["Eau et éléctricité", "Gardiennage", "Nettoyage", "petit outillage","Assurence ","Entretien sécurité",
  "Maintenance installation TV","Maintenance ascensseurs","Entretien espace vert","Entretien picine","Frais Postaux"];
  cardForm !: FormGroup;
  Foods !: Depenses[]; 
  actionBtn : String ="Ajouter"
  
  constructor(private fb:FormBuilder,
    @Inject (MAT_DIALOG_DATA) public editData :any,
    private depenseservice:DepensesService) { }

  ngOnInit(): void {
    this.cardForm = this.fb.nonNullable.group({
      id:[0],
      type: ['',Validators.required],
      montant: ['',Validators.required],
  })

  this.depenseservice.getDepensess().subscribe(
    value => this.Foods = value
  )

  if(this.editData){
    this.actionBtn = "Modifier";
    this.cardForm.controls['id'].setValue(this.editData.id);
    this.cardForm.controls['type'].setValue(this.editData.type);
    this.cardForm.controls['montant'].setValue(this.editData.montant);
    
  }
}

onAddProduct(){
  if (!this.editData){
    this.depenseservice.addDepensess(this.cardForm.value).subscribe(
      value => {
        this.Foods.push(value);
        location.reload();
      }
    )
  }
}

updateProduct(){
  this.depenseservice.updateDepenses(this.editData.id, this.cardForm.value).subscribe(
    value => {
      location.reload()
    }
  )
}
}
