import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-get-employee-details',
  templateUrl: './get-employee-details.component.html',
  styleUrls: ['./get-employee-details.component.css']
})
export class GetEmployeeDetailsComponent implements OnInit {
 employees:Employee[]=[]
 id:any;
 searchText:any;
   constructor(private employeedetails:EmployeeDetailsService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(){
    this.getEmployeeDetails();
    this.id=this.activated.snapshot.params['id']
    
    
  }
  getEmployeeDetails(){
    this.employeedetails.getEmployeeDetails().subscribe((data)=>{
      this.employees=data;
    })
  }
  addEmployeeDetails(){
    this.router.navigate(['addemployeedetails'])
  }
  updateEmployeeDetails(id:number){
    this.router.navigate(['updateemployeedetails',id])
  }
  deleteEmployeeDetails(id:number){
    this.employeedetails.deleteEmployeeDetails(id).subscribe(data=>{
  
       console.log(data);
       this.getEmployeeDetails();
       window.location.reload();
       
    })
    }
    viewEmployeeDetails(id:number){
  this.router.navigate(['viewemployeedetails',id])
    }
}
