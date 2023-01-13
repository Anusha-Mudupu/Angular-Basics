import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';
import { StudentConsolidated } from '../student-consolidated';
import { StudentConsolidatedService } from '../student-consolidated.service';

@Component({
  selector: 'app-delete-employeelist',
  templateUrl: './delete-employeelist.component.html',
  styleUrls: ['./delete-employeelist.component.css']
})
export class DeleteEmployeelistComponent implements OnInit {
  employees:any=new Employee();
  students:any=new Employee();
  id:any;
  constructor(private employeedetail:EmployeeDetailsService,private studentconsoildated:StudentConsolidatedService) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
    this.test();
  }
  getEmployeeDetails(){
    this.employeedetail.getEmployeeDetailsJsonServer().subscribe((data)=>{
      this.employees=data

    })
  }
  deleteEmployeeList(id:number){
    this.employeedetail.deleteEmployeeDetailsJsonServer(id).subscribe(data => {
      alert("do you want to delete")
      // this.employees=data
     })
    
  }
  deleteStudentList(id:number){
    this.studentconsoildated.deleteStudentDetailsJsonServer(id).subscribe((data)=>{
      alert("do you want to delete")
    })
  }
  test() {
    this.studentconsoildated.getJsonUrl().subscribe((data:any) => {
      this.students = data;
      console.log(data);

    })
  }
}
