import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../api-calls.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  constructor(private ApiCallsService: ApiCallsService) {}

  ngOnInit(): void {
    this.ApiCallsService.getProjects().subscribe((data : any[])=>{
      console.log(data);
      this.projects = data;
  })
  }

}
