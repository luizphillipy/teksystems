import { Component, OnInit } from '@angular/core';
import {Registration} from "../student/student.component";
import {RegistrationDataService} from "../registration-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-registrations-page',
  templateUrl: './registrations-page.component.html',
  styleUrls: ['./registrations-page.component.css']
})
export class RegistrationsPageComponent implements OnInit {

  registrations:Registration[]=[];
  condition:string="";
  offset!:Number;

  constructor(private registrationService:RegistrationDataService,private route:ActivatedRoute) {


  }

  ngOnInit(): void {
    this.registrationService.getRegistrations(this.offset, this.condition).subscribe(registrations=>{
      this.registrations=registrations;
      console.log(`registrations found: ${registrations.length}`);
    });
  }

}
