import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { RestApiService } from '../rest-api.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private restApi:RestApiService,private route:ActivatedRoute) { }
  
  // users:any=[]
  id:any;
  employee:Employee=new Employee()

  ngOnInit(): void {
  
  this.id=this.route.snapshot.params['id'];
 this.restApi.getEmployeeById(this.id).subscribe((data)=>{
    this.employee=data;
  })
  }

  
}


