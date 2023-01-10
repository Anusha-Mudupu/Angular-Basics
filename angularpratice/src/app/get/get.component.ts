import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  employees:Employee[] = [];
  id:any;
  
  constructor(private restApi:RestApiService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.getEmployees()
  this.id=this.route.snapshot.params['id'];

}
getEmployees(){
  this.restApi.getEmployeeList().subscribe(data =>{
    this.employees = data;
  })
}
updateEmployee(id:number){
  this.router.navigate(['update',id])
}
deleteEmployeeList(id:number){
  this.restApi.deleteEmployee(id).subscribe(data=>{

     console.log(data);
     this.getEmployees();
     window.location.reload();
     
  })
  }
employeeDetails(id:number){
  this.router.navigate(['/crud',id])
}
}
