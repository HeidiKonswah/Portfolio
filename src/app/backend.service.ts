import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() {}
  createDb(){
      let socials = [
        {
          id:0, 
          url:'https://www.linkedin.com/in/heidi-saied-konswah/', 
          icon:'../assets/socials/LI.svg', 
        },
        {
          id:1, 
          url:'https://github.com/HeidiKonswah', 
          icon:'../assets/socials/GH.svg', 
        },
        {
          id:2, 
          url:'https://gitlab.com/heidikonswah', 
          icon:'../assets/socials/GL.svg', 
        },
        {
          id:3, 
          url:'https://codepen.io/HeidiKonswah', 
          icon:'../assets/socials/CP.svg', 
        },
        {
          id:4, 
          url:'https://leetcode.com/heidenschrute/', 
          icon:'../assets/socials/LC.png'
        }
      ]
      let projectsList = [
      {
        id: 0,
        title: "SSCS Student Chapter",
        role: "Front-end Developer",
        desc: "The official website for IEEE's SSCS student chapter",
        mainPicSrc: ['../../../assets/sscs/1.png','../../../assets/sscs/2.png','../../../assets/sscs/3.png','../../../assets/sscs/4.png',],
        gitUrl: "https://sscsalex.org/", 
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
return {projectsList, socials};
  }
   
}

