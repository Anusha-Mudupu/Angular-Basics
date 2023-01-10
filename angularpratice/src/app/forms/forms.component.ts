import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,}from'@angular/forms';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  regForm: FormGroup;
  clicked:boolean=false;

  constructor() {
    this.regForm= new FormGroup({
       uname:new FormControl('',[Validators.required,Validators.minLength(4)]),
      Email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8)]),
      cpassword:new FormControl('',[Validators.required]),
      gender:new FormControl(),
      address:new FormGroup({
        address1:new FormControl(''),
        address2:new FormControl(''),
        state:new FormControl(''),
      })
  
  
   },this.passwordMatch);
  }
   passwordMatch(rf:any){
    let password=rf.controls['password'].value;
    let cpassword=rf.controls['cpassword'].value;
    if(password===cpassword){
      return null
    }
    else{
      return{
        'passwordMatch':true
      }
    }
   }

  

  ngOnInit(): void {
  }
  show(){
    console.log(this.regForm)
  }
}
