import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  regForm:any;
  id:any;
  student: Student[]=[]
  //loginUser:any;
  constructor(private product:ProductService,private http:HttpClient,private activated:ActivatedRoute) {
    this.regForm= new FormGroup({
      name:new FormControl('',),
     id:new FormControl(''),
     qualification:new FormGroup({
      title:new FormControl(''),
      year:new FormControl(''),
       id:new FormControl(''),
     }),
     subject:new FormGroup({
      title:new FormControl(''),
      duration:new FormControl(''),
       id:new FormControl(''),
     })
 
 
  });
   }

  ngOnInit(): void {
    this.id=this.activated.snapshot.params['id'];
 this.product.jsonGet().subscribe((data)=>{
    this.student=data;
  })
    
  }
  show(){
    console.log(this.regForm)
    this.http.post<any>("http://localhost:3000/student",this.regForm.value).
    subscribe(res=>{
      alert("submit succssfully")
      this.regForm.reset();
    },error =>{
      alert("something went to wrong")
    }
    )
     }
}
