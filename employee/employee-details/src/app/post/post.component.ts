import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private restApi:RestApiService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
  }
  saveEmployee(){
   this.restApi.postEmployeeList(this.employee).subscribe((data)=>{
    console.log(data)
    this.goToEmployeeList
   })
  }
  goToEmployeeList(){
    this.router.navigate(['get'])
  }
  onSubmit(){
    console.log(this.employee)
    this.saveEmployee();
    this.goToEmployeeList();
  }
}
