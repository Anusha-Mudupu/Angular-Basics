import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent implements OnInit {
  employee:Employee=new Employee();
  id:any;
  constructor(private employeedetails:EmployeeDetailsService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(){
    this.id=this.activated.snapshot.params['id'];
    this.employeedetails.getEmployeeDetailsById(this.id).subscribe((data)=>{
      this.employee=data;
    })
  }
  
  goToGetEmployeeDetails(){
    this.router.navigate(['/getemployeedetails'])
  }
  saveEmployeeDetails(){
    this.employeedetails.updateEmployeeDetails(this.id,this.employee).subscribe((data)=>{
        console.log(data)
    })
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployeeDetails();
    this.goToGetEmployeeDetails();
  }
}
