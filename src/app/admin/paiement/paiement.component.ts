import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Paiement } from 'src/app/classes/paiement';
import { PaiementService } from 'src/app/services/paiement.service';
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  HabitantForm !: FormGroup;
  Paiement!:Paiement[];
  actionBtn: String = "Ajouter"
  constructor(private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private paiementservice:PaiementService) { }

  ngOnInit(): void {

    this.HabitantForm = this.fb.nonNullable.group({
      id: [0],
      cin: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      montant: ['', Validators.required],
      date: ['', Validators.required],
  })

  this.paiementservice.getPaiements().subscribe(
    value => this.Paiement = value)
  
  if(this.editData){
    this.actionBtn = "Ajouter";
    this.HabitantForm.controls['id'].setValue(this.editData.id);
    this.HabitantForm.controls['cin'].setValue(this.editData.cin);
    this.HabitantForm.controls['nom'].setValue(this.editData.nom);
    this.HabitantForm.controls['prenom'].setValue(this.editData.prenom);}
}

onAddProduct(){
  if (!this.editData){
    this.paiementservice.addPaiements(this.HabitantForm.value).subscribe(
      value => {
        this.Paiement.push(value);
        location.reload();
      }
    )
  }
}
}
