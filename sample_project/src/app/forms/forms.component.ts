import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  reactiveform!:FormGroup;
  // passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  constructor(private formBuilder:FormBuilder) {
    this.reactiveform = this.formBuilder.group({
     
      username: new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)])),
      password: new FormControl('',Validators.required),
      cpassword : new FormControl('',Validators.required),

    
    },{
      validators:this.mustMatch('password','cpassword')
    })
   }
  
  ngOnInit(): void {

  }
  mustMatch(password:any,  cpassword :any){
   return(formGroup:FormGroup)=>{
    const passwordcontrol=formGroup.controls[password];
    const cpasswordcontrol=formGroup.controls[cpassword];
    if(cpasswordcontrol.errors && !cpasswordcontrol.errors['mustMatch'])
    {
      return;
    }
    if(passwordcontrol.value!==cpasswordcontrol.value){
      cpasswordcontrol.setErrors({mustMatch:true})
    }else{
      cpasswordcontrol.setErrors(null);
    }
   }
  }
 get f(){
  return this.reactiveform.controls;
 }
 submit(){
  console.log(this.reactiveform)
 }
}
