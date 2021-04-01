import { Component, OnInit } from '@angular/core';
import { WsService } from '../ws.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  constructor(private rs: WsService) { }

  cells = this.rs.getCells();

  ngOnInit(): void { }
}
