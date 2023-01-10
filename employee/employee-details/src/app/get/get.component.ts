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
  employees:Employee[]=[];
  id:any;
  constructor(private restApi:RestApiService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
    // this.restApi.getEmployeeList().subscribe((data)=>{
    //   this.employees=data;
    //   console.log(data);
    this.getEmployeeList()
    this.id=this.activated.snapshot.params['id']
    }
  
  getEmployeeList(){
    this.restApi.getEmployeeList().subscribe((data)=>{
      this.employees=data
    })
  }
  createEmployeeList(){
    this.router.navigate(['post'])
  }
  deleteEmployeeList(id:number){
  this.restApi.deleteEmployeeList(id).subscribe((data)=>{
    console.log(data)
    window.location.reload();
  })
  }
  updateEmployee(id:number){
    this.router.navigate(['put',id])

  }
}
