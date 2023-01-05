import { Component, OnInit } from '@angular/core';
import { Template } from '../template';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  course=['Angular','React','Nodejs','java','python']
  templateForm= new Template()
  constructor() { }

  ngOnInit(): void {
  }

}
