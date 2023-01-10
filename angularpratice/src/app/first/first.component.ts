import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  selectedId:any;
  // public header:any="headerSection";
 @Input() public formParent:any;
  @Input('formParent') public parent:any;  // parent -child
//  @Output() public childInfo= new EventEmitter(); //child-parent
course:any=[
  {
    name:"appu",
    id:1,
  },
  {
      name:"raji",
      id:2,
     },
     {
      name:"abhi",
      id:3,
     },
     {
      name:"Anu",
      id:4,
     }
]
name:string='';
name1:any;
officeName:string='Angular';
officeId:number=10;
allowNewServer:boolean=false;
allowServer:any='no server was created !';
server:boolean=false;
hasError:boolean=false;
serverName:string='angular';
severId:Number=10;
serverStatus:any='offline';
name2:any='';
name3:any='anu reddy'
color:any='blue';
departmentId:any;
employes:any=[];
enter:any='';

person  =[{
  "subject":"C language",
  "marks":85,
  "year":2020
},{
  "subject":"java language",
  "marks":86,
  "year":2021

},
{
  "subject":"python language",
  "marks":87,
  "year":2022

}
]

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

  constructor( private _product:ProductService,private route:ActivatedRoute,private router:Router) { 
   setTimeout(() => {
    this.allowNewServer=true
   }, 3000);
  this.serverStatus = Math.random() > 1.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  //  this.employes=this._product.getEmployee();
  //  let id=this.route.snapshot.paramMap.get('id');
  //  this.departmentId=id;
  this.route.paramMap.subscribe((parms:ParamMap)=>{
    let id=parms.get('id');
    this.selectedId=id

   })
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
  // onClick(event:any){
    
  //   console.log(event)
  //  this.name1="welocme to Angular project"
  // this.name1=event.type;
    
  // }
  changeText(event:any){
    this.name2=event.target.value;
  }
  // fireEvent(){
  //   this.childInfo.emit("this is child msg")
  // }
  // message(abc:any){
  //   this.enter=abc

  // }

  onClick(x:any){
 this.router.navigate(['/course',x.id])
 // this.router.navigate([x.id],{relativeTo:this.route});
  }
  isSelected(x:any){
  return x.id === this.selectedId;
  }
}
