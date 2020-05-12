import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiCallsService {
  API_URL: string = "/api/";
  constructor(private http: HttpClient) { }
  getProjects(){    
   return this.http.get(this.API_URL + 'projectsList')
  }
  getProject(projectID){
   return this.http.get(`${this.API_URL + 'projectsList'}/${projectID}`) 
  }
}
