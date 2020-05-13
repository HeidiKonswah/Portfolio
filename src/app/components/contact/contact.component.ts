import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../api-calls.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  socials: any[] = []
  constructor(private ApiCallsService:ApiCallsService) { }

  ngOnInit(): void {
    this.ApiCallsService.getSocials().subscribe((data : any[])=>{
      console.log(data);
      this.socials = data;
  })
  }

}
