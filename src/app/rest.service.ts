import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Cells } from './Cells';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:8080/myapp/grid';

  getCells() {
    return this.http.get<Cells[]>(this.url);
  }
}
