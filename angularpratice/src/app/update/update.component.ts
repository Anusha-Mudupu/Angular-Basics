import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employee:Employee=new Employee();
  id:any;
  constructor(private restApi:RestApiService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
   
   this.id=this.router.snapshot.params['id'];
   this.restApi.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;
    console.log(data)
   })
  }
  // onSubmit(){
  // this.restApi.updateEmployee(this.id,this.employee).subscribe(data=>{
  
  //     this.goToEmployeeList()
  //     this.saveEmployee()
  //   },error=> console.log(error));
  // }
  goToEmployeeList(){
  this.route.navigate(['/get'])
  }
  saveEmployee(){
    this.restApi.updateEmployee(this.id,this.employee).subscribe((data)=>{
      console.log(data)
      
    })
  }
  onSubmit()
  {
console.log("before update")
console.log("after update")

this.saveEmployee();
this.goToEmployeeList()
}
}
