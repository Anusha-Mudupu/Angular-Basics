import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  employee:Employee=new Employee();
id:any;
  constructor(private restApi:RestApiService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activated.snapshot.params['id'];
    this.restApi.getEmployeeById(this.id).subscribe((data)=>{
      this.employee=data
    })

  }
  saveEmployeeList(){
    this.restApi.updateEmployeeList(this.id,this.employee).subscribe((data)=>{
      console.log(data)
      
    })
  }
  goSaveEmployeeList(){
    this.router.navigate(['get']);
  }
  onSubmit(){
   this.saveEmployeeList();
   this.goSaveEmployeeList();
  }
}
