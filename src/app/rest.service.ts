import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Cells } from './Cells';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  // Per testing in locale tramite db.json usare: http://localhost:3000/cells/
  // Per collegarsi al server dell'applicazione usare: http://localhost:8080/myapp/grid

  url : string = "http://localhost:3000/cells/";

  getCells() {
    console.log(this.http.get<Cells[]>(this.url));
    return this.http.get<Cells[]>(this.url);
  }
}
