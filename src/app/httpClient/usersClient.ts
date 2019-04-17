import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    apiUrl = 'https://api.github.com/';
    constructor (private http: HttpClient) { }

    public getUsers(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}search/users`, { params: new HttpParams().set('q', 'name') });
    }

    public getUser(login: string) {
        return this.http.get<any>(`${this.apiUrl}users/${login}`);
    }
}
