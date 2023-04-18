import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent implements OnInit {

  countrylist=['India','USA','Singapore','UK']
  termlist=['15days','30days','45days','60days']

  constructor(private builder:FormBuilder){

  }
  ngOnInit(): void {
    this.customerform.setValue({name:'Nihira Techiees',email:'nihiratechiees@gmail.com',phone:'77678899',
  country:'USA',term:'45days',address:'add1',dob:new Date(2001,2,3),gender:'Male',status:true})
  }


  customerform=this.builder.group({
   name:this.builder.control('',Validators.required),
   email:this.builder.control('',Validators.compose([Validators.required,Validators.required]) ),
   phone:this.builder.control('',Validators.required),
   country:this.builder.control('',Validators.required),
   address:this.builder.control('',Validators.required),
   term:this.builder.control('',Validators.required),
   dob:this.builder.control(new Date(2000,3,25)),
   gender:this.builder.control('Male'),
   status:this.builder.control(true),
  });

  SaveCustomer(){
   console.log(this.customerform.value);
  }

  clearform(){
    this.customerform.reset();
  }
}
