import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class HelperService {
  constructor(private http:HttpClient){
  }
  getUser(name){
    return this.http.get("https://api.github.com/users/"+name+"/repos")
  }
}
