import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {
 employee:Employee= new Employee();
  constructor(private employeedetails:EmployeeDetailsService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
  }
  saveEmployeeDetails(){
    this.employeedetails.createEmployeeDetails(this.employee).subscribe((data)=>{
     console.log(data);
     this.goToGetEmployeeDetails();

    },error=>{
      console.log(error);
    })
  }
  goToGetEmployeeDetails(){
    this.router.navigate(['getemployeedetails'])
  }
  onSubmit(){
  console.log(this.employee)
  this.saveEmployeeDetails();
  
  this.goToGetEmployeeDetails();
  
  }
}
