import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallsService } from '../../api-calls.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.sass']
})
export class ProjectDetailsComponent implements OnInit {
  current: any;
  constructor(private ApiCallsService: ApiCallsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
       this.ApiCallsService.getProject(params.get('id')).subscribe(c =>{
          this.current = c;
      })   
      });
  }

}
