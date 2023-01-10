import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
baseURL='http://localhost:9090/employees'
createURL='http://localhost:9090/add'
getURL=' http://localhost:9090/employees'
updateURL='http://localhost:9090/update'
deleteURL='http://localhost:9090/delete'
  constructor(private http:HttpClient) { }
  getEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURL}`)
   
  }
  createEmployeeList(employee:Employee):Observable<object>{
    return this.http.post(`${this.createURL}`,employee);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.getURL}/${id}`);
  }
  updateEmployee(id:number,employee:Employee):Observable<object>{
    return this.http.put(`${this.updateURL}/${id}`,employee)

  }
  deleteEmployee(id:number):Observable<object>{
      return this.http.delete(`${this.deleteURL}/${id}`)
  
    }
}
