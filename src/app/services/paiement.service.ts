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

  getPaiements():Observable<Paiement[]>{
    return this.http.get<Paiement[]>(URL);
  }
  addPaiements(p:Paiement):Observable<Paiement>{
    return this.http.post<Paiement>(URL, p)
  }
}
