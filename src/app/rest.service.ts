import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  // http://localhost:8080/myapp/grid oppure http://0.0.0.0:8080/myapp/grid
  url = 'http://localhost:8080/myapp/grid';

  getCells(): Observable<any> {
    return timer(0, 1000).pipe(
      switchMap(() =>
        this.http.get<{'x': number, 'y': number, 'locked': boolean, 'obstacle': boolean, 'unit': boolean, 'poi': boolean}[]>(this.url)));
  }
}
