import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resourceSubject: BehaviorSubject<any>;
  public resource: Observable<any>;
  constructor(private http: HttpClient) {
    this.resourceSubject = new BehaviorSubject<any>([]);
    this.resource = this.resourceSubject.asObservable();
  }
}
