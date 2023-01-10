import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 Url='http://localhost:3000/student'
  constructor(private http:HttpClient) { }
  jsonGet():Observable<any>{
   return this.http.get<Student>(`${this.Url}`);
  }
}
