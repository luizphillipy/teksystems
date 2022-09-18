import { Component, OnInit } from '@angular/core';
import {Registration} from "../student/student.component";
import {RegistrationDataService} from "../registration-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  registrations:Registration[]=[];
  condition:string="";
  offset!:Number;
  constructor(private registrationService:RegistrationDataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.registrationService.getRegistrations(this.offset, this.condition).subscribe(registrations=>{
      this.registrations=registrations;
      console.log(`registrations found: ${registrations.length}`);
    })
  }
  approve():void{

  }
  reject():void{

  }
}
