import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
employee:Employee=new Employee();

  constructor(private restApi:RestApiService,private router:Router) { }
  ngOnInit(): void {
  }
  saveEmployee(){
    this.restApi.createEmployeeList(this.employee).subscribe(data=>{
      console.log(data)
      this.goToEmployeeList();
    },error=>{
      console.log(error)
    })
  }
  goToEmployeeList(){
    this.router.navigate(['/get'])
  }
  onSubmit(){
   console.log(this.employee);
   this.saveEmployee();
   this.goToEmployeeList();
  }
}
