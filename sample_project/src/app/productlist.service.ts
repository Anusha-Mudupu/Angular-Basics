import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  // getURL='http://localhost:9090/employees'
  getURL='http://localhost:3000/subject';
  constructor(private http:HttpClient) { }
 get(){
  return this.http.get(this.getURL)
 }
}
