import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() {}
  createDb(){
      let projectsList = [{
        id: 0,
        title: "test",
        role: "developer",
        desc: "blah blah",
        mainPicSrc: ['../../../assets/ex.jpg'],
        gitUrl: "https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course", 
    },
    {
        id: 1,
        title: "test",
        role: "developer",
        desc: "blah blah",
        mainPicSrc: ['../../../assets/ex.jpg'],
        gitUrl: "https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course", 
    },
    {
        id: 2,
        title: "test",
        role: "developer",
        desc: "blah blah",
        mainPicSrc: ['../../../assets/ex.jpg'],
        gitUrl: "https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course", 
    },
    {
        id: 0,
        title: "test",
        role: "developer",
        desc: "blah blah",
        mainPicSrc: ['../../../assets/ex.jpg'],
        gitUrl: "https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course", 
    },
    {
        id: 1,
        title: "test",
        role: "developer",
        desc: "blah blah",
        mainPicSrc: ['../../../assets/ex.jpg'],
        gitUrl: "https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course", 
    },
    {
        id: 2,
        title: "test",
        role: "developer",
        desc: "blah blah",
        mainPicSrc: ['../../../assets/ex.jpg'],
        gitUrl: "https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course", 
    },
  ]
return {projectsList};
  }
   
}

