import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitant } from '../classes/habitant';

const URL="http://localhost:3000/habitant";
@Injectable({
  providedIn: 'root'
})
export class HabitantService {

  constructor(private http:HttpClient) { }
  getHabitants():Observable<any>{
    return this.http.get<any>(URL);
  }
  getHabitantsById(id:string){
    const res = this.http.get(`${URL}/${id}`);
    return res
  }
  addHabitants(h:Habitant):Observable<Habitant>{
    return this.http.post<Habitant>(URL, h);
  }
  updateHabitants(id:number,h:Habitant){
    return this.http.put<Habitant>(URL+"/"+id ,h)
  }
  deleteHabitants(id : number){
    return this.http.delete(`${URL}/${id}`);
  }
}
