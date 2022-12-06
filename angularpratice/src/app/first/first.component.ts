import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
name:string='';
officeName:string='Angular';
officeId:number=10;
allowNewServer:boolean=false;
allowServer:any='no server was created !';
server:boolean=false;

serverName:string='angular';
severId:Number=10;
serverStatus:any='offline';
userlist:any=[
  {
    EmployeeName:'Appu',
    EmployeeId:1,
    ProjectName:'Angular'
  },
  {
    EmployeeName:'raji',
    EmployeeId:2,
    ProjectName:'Angular'
  },
  {
    EmployeeName:'Anu',
    EmployeeId:3,
    ProjectName:'Angular'
  },
  {
    EmployeeName:'Abhi',
    EmployeeId:4,
    ProjectName:'Angular'
  },
  {
    EmployeeName:'karuna',
    EmployeeId:5,
    ProjectName:'Angular'
  },
]
  constructor() { 
  //  setTimeout(() => {
  //   this.allowNewServer=true
  //  }, 3000);
  this.serverStatus = Math.random() > 1.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }
  getOfficeId(){
   return this.officeId;
  }
  onServer(){
    this.server=true
    this.allowServer='server was created!'+ this.name;
  }
  getServerStatus(){
    return this.serverStatus
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
