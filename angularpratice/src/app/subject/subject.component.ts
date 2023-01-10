import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Student } from '../student';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  student :Student[]=[]
  regForm:any;
  id:any;
  constructor(private product:ProductService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
   this.product.jsonGet().subscribe((data)=>{
    this.student=data;
    console.log(data);
   })
    
  }
  studentDetails(id:any){
 this.router.navigate(['/student',id])
  }
  submit(){
    console.log(this.regForm)
     }
}
