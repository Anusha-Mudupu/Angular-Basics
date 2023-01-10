import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuComponent } from './anu/anu.component';
import { FormsComponent } from './forms/forms.component';
import { OneComponent } from './one/one.component';
import { RajiComponent } from './raji/raji.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {path:'forms',component:FormsComponent},
   {path:'one',component:OneComponent},
  {path:'two',component:TwoComponent},
  { path:'raji',component:RajiComponent },
  {path:'anu',component:AnuComponent,

children:[
  {path:'one',component:OneComponent},
  {path:'two',component:TwoComponent}
]
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
