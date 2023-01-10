import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { ProductService } from '../product.service';
import { ProductlistService } from '../productlist.service';
import { Student } from '../student';
@Component({
  selector: 'app-raji',
  templateUrl: './raji.component.html',
  styleUrls: ['./raji.component.css']
})
export class RajiComponent implements OnInit {
  subject:any;
   constructor(
    private product:ProductlistService,
     private route:Router
    
    ) {}

  ngOnInit(){
 this.product.get().subscribe((data)=>{
  console.log(data)
  this.subject=data;
 })
   
    
}

}