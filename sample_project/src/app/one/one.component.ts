import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
 
  users=[
    {
        name:"Anu reddy",
        qualification:[
          {
            title:"MCA",
            year:2022,
            subject:[
              {
                title:"Computer Application",
                duration:"3 years"
              }
            ]
          }
        ]
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
