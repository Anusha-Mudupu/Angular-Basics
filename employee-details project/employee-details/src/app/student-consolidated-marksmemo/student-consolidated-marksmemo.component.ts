import { Component, OnInit } from '@angular/core';
import { StudentConsolidated } from '../student-consolidated';
import { StudentConsolidatedService } from '../student-consolidated.service';

@Component({
  selector: 'app-student-consolidated-marksmemo',
  templateUrl: './student-consolidated-marksmemo.component.html',
  styleUrls: ['./student-consolidated-marksmemo.component.css']
})
export class StudentConsolidatedMarksmemoComponent implements OnInit {
  students: StudentConsolidated[]=[];
  constructor(private studentconsoildated:StudentConsolidatedService) { }

  ngOnInit(): void {
    this.test();
  }
  test(){
    this.studentconsoildated.getJsonUrl().subscribe((data)=>{
      this.students = data;
     
     console.log(data);
     
 })
  }

}
