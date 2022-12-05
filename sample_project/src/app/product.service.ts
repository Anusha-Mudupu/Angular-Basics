import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
     url='https://jsonplaceholder.typicode.com/posts';
     deleteUrl='https://jsonplaceholder.typicode.com/posts/1'
  constructor(private http:HttpClient) { 
  }

  config(){
    return this.http.get<any>(this.url);
  }
  deletedfig(id:any){
    return this.http.delete<any>(this.deleteUrl+id)
  }
}
