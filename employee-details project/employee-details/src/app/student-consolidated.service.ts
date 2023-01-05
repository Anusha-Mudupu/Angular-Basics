import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentConsolidated } from './student-consolidated';

@Injectable({
  providedIn: 'root'
})
export class StudentConsolidatedService {
   jsonUrl='http://localhost:3000/students'
  constructor(private http:HttpClient) {}
 getJsonUrl():Observable<any>{
  return this.http.get<StudentConsolidated[]>(this.jsonUrl)
 }
}
