import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuComponent } from './anu/anu.component';
import { RajiComponent } from './raji/raji.component';

const routes: Routes = [
  {path:'anu',component:AnuComponent
// children:[
//   { path:'raji',component:RajiComponent }
// ]
},
{ path:'raji',component:RajiComponent },


  // {path:'raji',component:RajiComponent }, 
   {path:'anu/:id', component:AnuComponent},
//   children:
// [
  // {
  //   path:'raji',component:RajiComponent
  //  } 


   

  // {path:'raji',component:RajiComponent},
  {path:'', redirectTo:'raji',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
