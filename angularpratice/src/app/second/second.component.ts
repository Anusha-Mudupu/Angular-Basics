import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  courseId:any;
  num:any=1;
  previousId:any
  NextId:any
  public parentMsg="this is parent message"
  // departments:any=[
  //   {"id":1,"name":"Angular"},
  //   {"id":2,"name":"java"},
  //   {"id":3,"name":"bootstrap"},
  //   {"id":4,"name":"python"}
  // ]
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   //let id= this.route.snapshot.paramMap.get('id')
   //this.courseId=id
   this.route.paramMap.subscribe((parms:ParamMap)=>{
    let id=parms.get('id');
    this.courseId=id

   })
  }
  // onSelect(department:any){
  //   this.router.navigate(['/departments',department.id])
  // }
  toPrevious()
  {
    let previousId= + this.courseId-1;
    this.router.navigate(['/course',previousId])
  }
  toNext()
  {
    let  NextId= + this.courseId  + this.num;
    this.router.navigate(['/course',NextId])
  }
  goBack(){
    let selectedId=this.courseId
    this.router.navigate(['/course',{id:selectedId}])
  // this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }
}
