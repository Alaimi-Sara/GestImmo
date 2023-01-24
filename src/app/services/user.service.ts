import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';


const URL="http://localhost:3000/user"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(URL);
  }

  addUsers(u : User):Observable<User>{
    return this.http.post<User>(URL,u);
  }
  updateUser(id:number,u:User){
    return this.http.put<User>(URL+"/"+id ,u)
  }
  
  role : string = "habitant";
  user: User | undefined;
}
