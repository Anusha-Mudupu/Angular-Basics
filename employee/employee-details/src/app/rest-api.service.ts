import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  getUrl = 'http://localhost:9090/employees';
  postURL = 'http://localhost:9090/add';
  updateUrl='http://localhost:9090/update';
  getURL=' http://localhost:9090/employees'
  deleteURL = 'http://localhost:9090/delete';
 


  constructor(private http: HttpClient) { }
  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.getUrl}`)
  }
  postEmployeeList(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(`${this.postURL}`, employee)
  }
  updateEmployeeList(id:number,employee:Employee):Observable<object>{
     return this.http.put(`${this.updateUrl}`,employee)
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.getURL}/${id}`);
  }
  deleteEmployeeList(id: number): Observable<object> {
    return this.http.delete(`${this.deleteURL}/${id}`)
  }
  
}
