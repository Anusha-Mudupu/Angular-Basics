import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { FirstComponent } from './first/first.component';
import { FormsComponent } from './forms/forms.component';
import { GetComponent } from './get/get.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostComponent } from './post/post.component';
import { QualicationComponent } from './qualication/qualication.component';
import { SecondComponent } from './second/second.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'qualification',component:QualicationComponent},
  {path:'student' ,component:StudentComponent},
  {path:'subject',component:SubjectComponent},
  {path:'first',component:FirstComponent},
  {path:'course',component:FirstComponent},
  {path:'course/:id',component:SecondComponent},
  {path:'second/:id',component:SecondComponent},
  
  {path:'',redirectTo:'/second' , pathMatch:'full'},
 
  {path:'getEmployees',component:GetComponent},
  {path:'post',component:PostComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'crud/:id',component:CrudComponent},
  {path:'forms',component:FormsComponent},
 
 
  
  {path:'departments',component:SecondComponent},
  {path:'departments/:id',component:FirstComponent},

  // {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
