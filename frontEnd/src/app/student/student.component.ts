import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RegistrationDataService} from "../registration-data.service";

export class Registration{
  #_id!:string;
  #name!:string;
  #email!:string;
  #reason!:string;
  #isApprovedByRegistrar!:boolean;
  #program!:string;
  #isProgramApproved!:boolean;
  #status!:string;

  get _id(): string {
    return this.#_id;
  }

  set _id(value: string) {
    this.#_id = value;
  }

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }

  get email(): string {
    return this.#email;
  }

  set email(value: string) {
    this.#email = value;
  }

  get reason(): string {
    return this.#reason;
  }

  set reason(value: string) {
    this.#reason = value;
  }

  get isApprovedByRegistrar(): boolean {
    return this.#isApprovedByRegistrar;
  }

  set isApprovedByRegistrar(value: boolean) {
    this.#isApprovedByRegistrar = value;
  }

  get program(): string {
    return this.#program;
  }

  set program(value: string) {
    this.#program = value;
  }

  get isProgramApproved(): boolean {
    return this.#isProgramApproved;
  }

  set isProgramApproved(value: boolean) {
    this.#isProgramApproved = value;
  }

  get status(): string {
    return this.#status;
  }

  set status(value: string) {
    this.#status = value;
  }

  constructor() {
  }

  fillForm(form:FormGroup) {
    this.#name=form.value.name;
    this.#email=form.value.email;
    this.#reason=form.value.reason;

  }

  json():any{
    return{
      name:this.#name,
      email:this.#email,
      reason:this.#reason

    };
  }
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  addForm:FormGroup;
  registrations:Registration[]=[];
  saveSuccessMessage!:string;
  errorMessage!:string;
  savedData:boolean=false;


  constructor(private router:Router, private formBuilder:FormBuilder,private route:ActivatedRoute,private registrationService: RegistrationDataService) {
    this.addForm=formBuilder.group({
      name:"",
      email:"",
      reason:""
    });
  }

  ngOnInit(): void {

  }

  save():void {
    const newRegistration:Registration = new Registration();
    newRegistration.fillForm(this.addForm);
    this.registrationService.createRegistration(newRegistration.json()).subscribe({
      next:(createdRegistration)=>{
        this.saveSuccessMessage="Registration successfully Created!"
        this.savedData=true;
        console.log(this.saveSuccessMessage);
        window.location.reload();
      },
      error:(err)=>{
        this.errorMessage="Error creating registration: ",err;
        this.savedData=false;
        console.log(this.errorMessage);
      }
    });

  }

}
