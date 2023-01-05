import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  getUrl= 'http://localhost:9090/employees';
  addUrl='http://localhost:9090/add';
  updateURL='http://localhost:9090/update';
  getEmployeeIdUrl=' http://localhost:9090/employees';
  deleteURL='http://localhost:9090/delete';
  constructor(private HttpClient:HttpClient) { }
  getEmployeeDetails():Observable<Employee[]>{
    return this.HttpClient.get<Employee[]>(`${this.getUrl}`)
   }
   createEmployeeDetails(employee:Employee):Observable<object>{
     return this.HttpClient.post(`${this.addUrl}`,employee)
   }
   updateEmployeeDetails(id:number,employee:Employee):Observable<object>{
    return this.HttpClient.put(`${this.updateURL}/${id}`,employee)
 }
 getEmployeeDetailsById(id:number):Observable<Employee>{
    return this.HttpClient.get<Employee>(`${this.getEmployeeIdUrl}/${id}`)
 }
 deleteEmployeeDetails(id:number):Observable<object>{
  return this.HttpClient.delete(`${this.deleteURL}/${id}`)

}
}
