import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor(private userservise:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  logout () {
    this.userservise.user = undefined;
    this.router.navigate(['login']);
  }
}
