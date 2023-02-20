import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { PaiementComponent } from '../paiement/paiement.component';
import { ModifierHabitantComponent } from '../modifierhabitant/modifierhabitant.component';
import { DepensesComponent } from '../depenses/depenses.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  settingForm!: FormGroup;
  hide: boolean = true;
  user: User | undefined = this.userservice.user

  constructor(private userservice:UserService, private fb:FormBuilder,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    const user = this.userservice.user
    this.settingForm = this.fb.nonNullable.group({
      login: [user?.login, Validators.required],
      pwd : [user?.pwd, Validators.required],
      role: [user?.role]
    })
  }

  onUpdate() {
    if(this.user) {
      this.userservice.updateUser(this.user.id, this.settingForm.value).subscribe(value => {
        alert("Modifié avec succes!");
      })
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
}
