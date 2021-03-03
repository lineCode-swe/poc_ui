import { Component, OnInit } from '@angular/core';
import { Cells } from '../Cells';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tabella',
  template: `
    <table>
      <tr>
        <span *ngFor="let cell of cells">
          <td *ngIf="cell.y === 0">
            <span style="visibility: hidden;">{{cell.x}}</span>
            <span *ngIf="cell.obstacle" class="ostacolo">O</span>
            <span *ngIf="cell.unit" class="unità">U</span>
            <span *ngIf="cell.poi">
              <span *ngIf="cell.unit" style="font-size: 18px; margin-left: -1em;">
                <span style="background-color: lightgreen;">U</span>+<span style="background-color: lightblue;">P</span>
              </span>
              <span *ngIf="cell.unit === false" class="poi">P</span>              
            </span>
          </td>
        </span>
      </tr>
      <tr >
        <span *ngFor="let cell of cells">
          <td *ngIf="cell.y === 1 ">
            <span style="visibility: hidden;">{{cell.x}}</span>
            <span *ngIf="cell.obstacle" class="ostacolo">O</span>
            <span *ngIf="cell.unit" class="unità">U</span>
            <span *ngIf="cell.poi">
              <span *ngIf="cell.unit" style="font-size: 18px; margin-left: -1em;">
                <span style="background-color: lightgreen;">U</span>+<span style="background-color: lightblue;">P</span>
              </span>
              <span *ngIf="cell.unit === false" class="poi">P</span>              
            </span>
          </td>
        </span>
      </tr>
      <tr>
        <span *ngFor="let cell of cells">
          <td *ngIf="cell.y === 2">
            <span style="visibility: hidden;">{{cell.x}}</span>
            <span *ngIf="cell.obstacle" class="ostacolo">O</span>
            <span *ngIf="cell.unit" class="unità">U</span>
            <span *ngIf="cell.poi">
              <span *ngIf="cell.unit" style="font-size: 18px; margin-left: -1em;">
                <span style="background-color: lightgreen;">U</span>+<span style="background-color: lightblue;">P</span>
              </span>
              <span *ngIf="cell.unit === false" class="poi">P</span>
            </span>
          </td>
        </span>
      </tr>
    </table>
  `,
  styles: [
  ]
})
export class TabellaComponent implements OnInit {

  constructor(private rs : RestService) {}

  cells : Cells[] = [];

  ngOnInit(): void {
    this.rs.getCells().subscribe
    (
      (response) => {this.cells = response}
    ),
    (error) => {console.log("Error Occured: " + error)}
  }

}
