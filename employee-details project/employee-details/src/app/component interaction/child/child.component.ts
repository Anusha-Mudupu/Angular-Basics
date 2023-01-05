import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input()public formParent:any
 @Output() customeve=new EventEmitter();
 message='passed to parent'
  constructor() { }

  ngOnInit(): void {
  }
passToParent(){
  this.customeve.emit(this.message)
}
updateMessage(e:any)
{
  this.message=e.target.value;
}
}
