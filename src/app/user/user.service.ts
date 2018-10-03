import { User } from './../models/user.model';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  user: User = new User();

  constructor(private http:HttpClient) {}

  // private userUrl = 'http://localhost:8080/user-portal/user';
	private userUrl = 'http://localhost:8080';

  public getUsers() :Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }


  public createUser(user) {
    return this.http.post<User>(this.userUrl + '/register', user);
  }

  public logIn(user) {
    return this.http.post<User>(this.userUrl + '/login', user);
  }

}