import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  settingForm!: FormGroup;
  hide: boolean = true;
  user: User | undefined = this.userservice.user

  constructor(private userservice:UserService, private fb:FormBuilder) { }

  ngOnInit(): void {
    const user = this.userservice.user
    this.settingForm = this.fb.nonNullable.group({
      email: [user?.login, Validators.required],
      password : [user?.pwd, Validators.required],
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
}
