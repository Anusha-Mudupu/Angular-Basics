import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-anu',
  templateUrl: './anu.component.html',
  styleUrls: ['./anu.component.css']
})
export class AnuComponent implements OnInit {
  name:any="anu";
  namecount:number=10;
  // name1:any;
 
  //  birthday:Date=new Date()
  //  name:string='Anu';
  //  count:number=0;
  //  user:any;
  //  userlist:any=[{
  //     name:"anu",
  //     id:1,
  //     email:"anu@com"
  //  },
  //  {
  //   name:"raji",
  //   id:2,
  //   email:"raji@com"
  //  }]
  loglist:any=[];
   
  constructor(
    private router:Router
    // private route:ActivatedRoute
    // private productlist:ProductlistService
    ) { }

  ngOnInit(): void {
  
  // updatename(){
  //   this.name="Anu reddy"
  // }
  // increment(){
  //   this.count=+this.count+1;
  // }
  // decrement(){
  //   this.count=+this.count-1;
  // }
    // this.user=this.route.snapshot.paramMap.get('id')
  // this.productlist.get().subscribe((data)=>{
  //   this.loglist=data;
  // })
    }
  // first(){
  //   this.router.navigate(["/raji"])
  // }
  // update(){
  // this.name="anureddy"
  // }
  // increment(){
  //  this.count=+this.count+1;
  // }
  // decrement(){
  // this.count=+this.count-1;
  // }
  // nameFun(event:any){
  //   this.name1=event.target.value;
  // }
  setValue(){
   this.name="anu" ;
  }
  getNameCount(){
    return this.namecount;
  }
}
