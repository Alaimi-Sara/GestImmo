import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depenses } from '../classes/depenses';

const URL="http://localhost:3000/depenses";
@Injectable({
  providedIn: 'root'
})
export class DepensesService {

  constructor( private http:HttpClient) { }
  getDepensess():Observable<any>{
    return this.http.get<any>(URL);
  }
  addDepensess(d:Depenses):Observable<Depenses>{
    return this.http.post<Depenses>(URL, d)
  }

  updateDepenses(id:number,d:Depenses){
    return this.http.put<Depenses>(URL+"/"+id ,d)
  }
  deleteDepenses(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
