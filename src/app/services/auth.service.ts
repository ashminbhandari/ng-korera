import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  // tslint:disable-next-line:typedef
  register(user: User) {
    return this.http.post(`${environment.apiUrl}/signup`, user, {responseType: 'text'});
  }

  // tslint:disable-next-line:typedef
  login(user: User) {
    return this.http.post(`${environment.apiUrl}/login`, user, {responseType: 'text'});
  }
}
