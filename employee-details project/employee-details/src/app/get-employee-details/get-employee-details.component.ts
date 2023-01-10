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
 order:any;
 data:any;
 page:number=1;
 count:number=0;
 tableSize:number=10;
 tableSizes:any=[8,10,15,20];
   constructor(private employeedetails:EmployeeDetailsService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(){
    this.getEmployeeDetails();
    this.id=this.activated.snapshot.params['id']
    this.postList()
    
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
    sortData(){
      if(this.order){
        let newarr=this.employees.sort((a,b)=> a.id-b.id)
        this.employees=newarr
      }
      else{
        let newarr=this.employees.sort((a,b)=> b.id-a.id)
        this.employees=newarr
      }
      this.order=!this.order;
    }
    postList(){
      this.employeedetails.getEmployeeDetails().subscribe((data)=>{
      
        console.log(data)


      })
    }
    onTableDataChange(event:any){
    this.page=event;
    this.postList();
    }
    onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.postList();
    }
}
