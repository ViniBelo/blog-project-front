import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../interfaces/subject';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private _url = environment

  constructor(private httpClient: HttpClient) { }

  listAll() {
    let arr: any = []
    this.httpClient.get('http://localhost:8080/subject').subscribe((res) => {
       arr = res;
      
    })

    console.log(arr)
    return this.httpClient.get<Subject[]>(this._url+'/subject')
  }
}
