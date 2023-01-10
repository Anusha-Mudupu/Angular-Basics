import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { PutComponent } from './put/put.component';
import { QualificationComponent } from './qualification/qualification.component';

const routes: Routes = [
  {path:'qualification',component:QualificationComponent},
  {path:'get',component:GetComponent},
   {path:'post',component:PostComponent},
  {path:'put',component:PutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
