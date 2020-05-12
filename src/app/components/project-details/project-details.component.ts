import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projectsList } from '../projects/project-list';
import { Project } from '../projects/project-intr';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.sass']
})
export class ProjectDetailsComponent implements OnInit {
  current: Project;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let crrntID = params.get('id');
      this.current = projectsList[crrntID];
    })
  }

}
