import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  reactiveform: FormGroup;
  // passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  constructor(private formBuilder: FormBuilder) {
    this.reactiveform = this.formBuilder.group({

      username: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      password: ['',Validators.required],
      cpassword: ['', Validators.required],
      email:['',Validators.required,[Validators.email]]

    }, {
      validators: this.mustMatch('password', 'cpassword')
    })
  }

  ngOnInit(): void {

  }
  mustMatch(password: any, cpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const cpasswordcontrol = formGroup.controls[cpassword];
      if (passwordcontrol.value !== cpasswordcontrol.value) {
        cpasswordcontrol.setErrors({ mustMatch: true })
      } else {
        cpasswordcontrol.setErrors(null);
      }
    }
  }
  get f() {
    return this.reactiveform.controls;
  }
  submit() {
    console.log(this.reactiveform)
  }
}
