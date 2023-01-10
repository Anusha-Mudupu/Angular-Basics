import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualication',
  templateUrl: './qualication.component.html',
  styleUrls: ['./qualication.component.css']
})
export class QualicationComponent implements OnInit {
  regForm:any;
  constructor(private router:Router, private http:HttpClient) { 
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
  }
  submit(){
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

