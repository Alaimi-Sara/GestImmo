import { Component, OnInit } from '@angular/core';
import { Depenses } from 'src/app/classes/depenses';
import { DepensesService } from 'src/app/services/depenses.service';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  lesDepenses!: Depenses[];
  totalPrice : number = 0;
  constructor(  private depenseservice:DepensesService) { }

  ngOnInit(): void {
    this.depenseservice.getDepensess().subscribe((value) =>{this.lesDepenses =value['depensess']})
    // this.cartList = this.paiementservice.cartList;
    // this.totalPrice = this.cartList.reduce((accumalator, item) => {
    //   console.log(item.montant);
    //   return accumalator + Number(item.montant)
    // }, 0)
  }

}
