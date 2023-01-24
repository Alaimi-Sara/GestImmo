import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depenses } from '../classes/depenses';

const URL="http://localhost:3000/depenses"

@Injectable({
  providedIn: 'root'
})
export class PaiemenService {

  constructor(private http:HttpClient) { }

  getDepensess():Observable<Depenses[]>{
    return this.http.get<Depenses[]>(URL);
  }
  addDepensess(d:Depenses):Observable<Depenses>{
    return this.http.post<Depenses>(URL, d)
  }
}
