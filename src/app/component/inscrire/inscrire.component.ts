import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Habitant } from 'src/app/classes/habitant';
import { HabitantService } from 'src/app/services/habitant.service';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {

  loginForm !: FormGroup;
  Habitant!:Habitant[];
  constructor( private fb:FormBuilder, private habitantservice:HabitantService,
    @Inject(MAT_DIALOG_DATA) public editData: any,) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      nom:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom:['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      tel : ['',[Validators.required,Validators.maxLength(8)]],
      cin : ['',[Validators.required,Validators.maxLength(8)]],
      residence:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      copropriete:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      appartement:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
    })

    this.habitantservice.getHabitants().subscribe(
      value => this.Habitant = value
    )
  }

  public get cin(){
    return this.loginForm.get('cin');
  }
  public get nom(){
    return this.loginForm.get('enom');
  }
  public get prenom(){
    return this.loginForm.get('prenom');
  }
  public get residence(){
    return this.loginForm.get('residence');
  }
  public get tel(){
    return this.loginForm.get('tel');
  }
  public get copropriete(){
    return this.loginForm.get('copropriete');
  }
  public get appartement(){
    return this.loginForm.get('appartement');
  }
  
  onAddProduct(){
    if (!this.editData){
      this.habitantservice.addHabitants(this.loginForm.value).subscribe(
        value => {
          this.Habitant.push(value);
          location.reload();
        }
      )
    }
  }
  reset(){
    this.loginForm.reset();
  }
  

}
