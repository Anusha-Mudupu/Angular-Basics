import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-raji',
  templateUrl: './raji.component.html',
  styleUrls: ['./raji.component.css']
})
export class RajiComponent implements OnInit {
  // users:any=[]
//   name:any;
//  userlist:any=[
  //   {
  //     // userId:11,
  //     id:1,
  //     // title:"Abc",
  //     // body:'xyz',
  //   },
  //   {
  //     // userId:22,
  //     id:2,
  //     // title:"Abc",
  //     // body:'xyz',

  //   }
  //  ]
  // status:boolean=true;
  // error:any;
  
  constructor(
    private product:ProductService,
     private route:Router
    
    ) {}

  ngOnInit(){
    // this.shaurya.users().subscribe((data)=>
    // {
    //   console.log(data)
    //   this.users=data;
    // })
    // this.users=this.route.snapshot.paramMap.get("id")
// this.product.config().subscribe((data)=>
// {
//   console.log(data)
//   this.userlist=data
// })

// error=>{
//   this.status=false
// });
// this.product.config().subscribe((data)=>{
//   this.userlist=data;
// })
  // }
  // second(){
  //   this.route.navigate(["/anu"])
  // }
  // changeFun(user:any){
  //   this.route.navigate(['anu/${user.id}'])
  // }
  // deletefun(post:any){
  //   this.product.deletedfig(post.id).subscribe(data=>{
  //     alert("posts are deleted")
  //     this.userlist=data;
  //   })
  // }
}
}
