import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { UrlSegment } from '@angular/router';

@Injectable()
export class UserService {

  private baseUrl = "http://localhost:9090/server/api/";

  private users: User[] = new Array<User>();

  constructor(private http: HttpClient) {
    this.users.push(new User('Abc'));
    this.users.push(new User('Jon', 'jon@abc.com'));
    this.users.push(new User('Shyam', 'shyam@pareek.com', 8));
  }


  public doRegistration(user: User): Observable<string> {
    //return this.http.post(this.baseUrl+"register",user,{responseType:'text' as 'json'});
    return new Observable(observable => {
      if (this.getUserByEmail(user.email)) {
        return observable.error('Email ready exist')
      } else {
        this.users.push(user)
        return observable.next('User created successfully')
      }

    })
  }

  public getUsers(): Observable<User[]> {
    // return this.http.get(this.baseUrl+"getAllUsers");
    return new Observable(observable => {
      return observable.next(this.users)
    })
  }

  public getUserByEmail(email: string): User | null {
    //return this.http.get(this.baseUrl+"findUserByEmail/"+email);
    const user = this.users.find(u => u.email === email)
    return user? user: null;
  }
  public getUsersByName(name: string): User[]  {
    //return this.http.get(this.baseUrl+"findUserByName/"+name);
    return this.users.filter(u => u.name.toUpperCase().indexOf(name.toUpperCase())!=-1)
  }

  public deleteUser(email: string): Observable<string> {
    //return this.http.delete(this.baseUrl+"delete/"+email);
    return new Observable(observable => {
      if (this.getUserByEmail(email)) {
        let i = 0;
        this.users.forEach(u => {

          if (u.email === email) {
            this.users.splice(i, 1)
          }
          i++;
        })
        return observable.next('User deleted')
      } else {
        return observable.error('Error while deleting user email ' + email)
      }
    })
  }
}
