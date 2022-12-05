import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  url='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<any>(this.url)
  }
}
