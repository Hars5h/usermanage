import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  constructor(private http:HttpClient) { }
  url='http://localhost:3000/posts';

  postuser(data :any){
    
    console.log("harsh1234");
    return this.http.post (this.url+'/data',{data});
    console.log("harsh");
    
    // .pipe(map((res: any)=>{
    //   return res;
    // }))



    
      
  }
  // getuser(){
  //   return this.http.get<any>("http://localhost:3000/posts")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
}
// $http.post(ApiEndpoint.url, $httpParamSerializer(data),
// Where you have $http.post(ApiEndpoint.url, data, config) change it to $http.post(ApiEndpoint.url, JSON.stringify(data), config).


