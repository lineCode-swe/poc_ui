import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { switchMap } from 'rxjs/operators';
import { Cell } from "./Cell";


@Injectable()
export class WsService {

  private socket = webSocket<Cell[]>('ws://localhost:8080/grid/a');

  constructor() { }

  getCells(): Observable<Cell[]> {
    return this.socket.asObservable();
  }
}
