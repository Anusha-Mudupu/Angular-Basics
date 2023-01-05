import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe-test',
  templateUrl: './custompipe-test.component.html',
  styleUrls: ['./custompipe-test.component.css']
})
export class CustompipeTestComponent implements OnInit {
 person={
    "name":"Anu",
    "gender":"f"
  }
  wish='Good Morning'
  constructor() { }

  ngOnInit(): void {
  }

}


