import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterConfigOptions } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit {
  id:any;
  employee:Employee=new Employee()

  constructor(private employeeservice:EmployeeDetailsService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(){
    this.id=this.activated.snapshot.params['id'];
 this.employeeservice.getEmployeeDetailsById(this.id).subscribe((data)=>{
    this.employee=data;
  })
  }
  }


