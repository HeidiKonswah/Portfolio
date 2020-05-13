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
        role: ["Front-end Developer","implementing new features, fixing bugs"],
        desc: "The official website for IEEE's SSCS student chapter",
        mainPicSrc: ['../../../assets/sscs/1.png','../../../assets/sscs/2.png','../../../assets/sscs/3.png','../../../assets/sscs/4.png',],
        gitUrl: "https://sscsalex.org/",
        stack: "Gatsby, node.js, MongoDB, graphQL"
      },
      {
        id: 1,
        title: "Question Bank",
        role: ["Front-end Developer","Worked on the UI/UX, and developed interactive react components for the core features of the project"],
        desc: "E-space Project | A platform for automating candidate filtration process. Allowing existing employees to build a library of technical and behavioral questions, generating a customized test for applicants then reviewing their performance.",
        mainPicSrc: ['../../../assets/ex.jpg'],
        gitUrl: "",
        stack: "React.js, Ruby on Rails, Postgresql"
     },
     {
        id: 2,
        title: "Bedouin App",
        role: ["UI/UX designer",""],
        desc: "Android application for the Bedouin community that facilitates communication among them and helps others explore the Bedouin culture. Won in IRI's hackathon",
        mainPicSrc: ['../../../assets/bedouin/1.jpg','../../../assets/bedouin/2.png','../../../assets/bedouin/3.png','../../../assets/bedouin/4.png',],
        gitUrl: "",
        stack: "Android, Java, Firebase "
     },
      {
        id: 3,
        title: "ResQ",
        role: ["UI/UX designer",""],
        desc: "Android platform where people can adopt, rescue pets, or report missing pets",
        mainPicSrc: ['../../../assets/resq/3.jpg','../../../assets/resq/2.jpg','../../../assets/resq/4.jpg','../../../assets/resq/5.jpg',],
        gitUrl: " https://lnkd.in/eEDkXun ",
        stack: "Android, Java, Firebase "
      },
      {
        id: 4,
        title: "Recipe Box",
        role: ["Front-end Developer",""],
        desc: "A react.js project for documenting and sharing recipes ",
        mainPicSrc: ['../../../assets/RB/1.png','../../../assets/RB/2.png','../../../assets/RB/3.png','../../../assets/RB/4.png',],
        gitUrl: "https://github.com/HeidiKonswah/recipe-box",
        stack: ""
     },
     {
        id: 5,
        title: "Tic Tac Toe",
        role: ["Developer",""],
        desc: "Classic Tic-tac-toe game, built with pure Javascript using the minmax algorithm ",
        mainPicSrc: ['../../../assets/xo.png'],
        gitUrl: "https://github.com/HeidiKonswah/TicTacToeJS",
     },
     {
      id: 6,
      title: "Tetris",
      role: ["Developer",""],
      desc: "Classic Tetris game, built with pure Javascript and HTML5 Canvas ",
      mainPicSrc: ['../../../assets/t.png'],
      gitUrl: "https://github.com/HeidiKonswah/TetrisJS",
   },
   {
      id: 7,
      title: "Snake Game",
      role: ["Developer",""],
      desc: "Snake game built with pure Javascript and HTML5 Canvas ",
      mainPicSrc: ['../../../assets/snake.png'],
      gitUrl: "https://github.com/HeidiKonswah/Snake-game",
    },

  ]
return {projectsList, socials};
  }

}
