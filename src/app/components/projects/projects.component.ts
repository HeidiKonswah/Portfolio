import { Component, OnInit } from '@angular/core';
import { projectsList } from './project-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  projects = projectsList;
  constructor() {}

  ngOnInit(): void {
  }

}
