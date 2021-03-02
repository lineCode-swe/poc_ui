import { Component, OnInit } from '@angular/core';
import { Cells } from './Cells';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JSONServerAPI';

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
