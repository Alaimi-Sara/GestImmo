import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paiement } from '../classes/paiement';

const URL="http://localhost:3000/paiement"

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }

  getPaiements():Observable<any>{
    return this.http.get<any>(URL);
  }
  addPaiements(p:Paiement):Observable<Paiement>{
    return this.http.post<Paiement>(URL, p)
  }

  getPaiementByMontant(montant:number){
    const res = this.http.get(`${URL}/${montant}`);
    return res
  }
}
