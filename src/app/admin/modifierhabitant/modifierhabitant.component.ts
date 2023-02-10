import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Habitant } from 'src/app/classes/habitant';
import { HabitantService } from 'src/app/services/habitant.service';


@Component({
  selector: 'app-modifier-habitant',
  templateUrl: './modifierhabitant.component.html',
  styleUrls: ['./modifierhabitant.component.css']
})
export class ModifierHabitantComponent implements OnInit {
  HabitantForm !: FormGroup;
  Habitant !: Habitant[];
  actionBtn: String = "Ajouter"
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
      private habitantservice:HabitantService) { }

  ngOnInit(): void {
    this.HabitantForm = this.fb.nonNullable.group({
      id: [0],
      cin: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: [0, Validators.required],
      residence: ['', Validators.required],
      copropriete: ['', Validators.required],
      appartement: ['', Validators.required],
    })

    this.habitantservice.getHabitants().subscribe(
      value => this.Habitant = value
    )

    if(this.editData){
      this.actionBtn = "Modifier";
      this.HabitantForm.controls['id'].setValue(this.editData.id);
      this.HabitantForm.controls['cin'].setValue(this.editData.cin);
      this.HabitantForm.controls['nom'].setValue(this.editData.nom);
      this.HabitantForm.controls['prenom'].setValue(this.editData.prenom);
      this.HabitantForm.controls['tel'].setValue(this.editData.tel);
      this.HabitantForm.controls['residence'].setValue(this.editData.residence);
      this.HabitantForm.controls['copropriete'].setValue(this.editData.copropriete);
      this.HabitantForm.controls['appartement'].setValue(this.editData.appartement);

    }
  }

  onAddProduct(){
    if (!this.editData){
      this.habitantservice.addHabitants(this.HabitantForm.value).subscribe(
        value => {
          this.Habitant.push(value);
          location.reload();
        }
      )
    }
  }

  updateProduct(){
    this.habitantservice.updateHabitants(this.editData.id, this.HabitantForm.value).subscribe(
      value => {
        location.reload()
      }
    )
  }

}
