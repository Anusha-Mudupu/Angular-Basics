import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeDetailsComponent } from './add-employee-details/add-employee-details.component';
import { ReactiveFormsComponent } from './angular-forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './angular-forms/template-driven-forms/template-driven-forms.component';
import { ChildComponent } from './component interaction/child/child.component';
import { ParentComponent } from './component interaction/parent/parent.component';

import { CustompipeTestComponent } from './custompipe-test/custompipe-test.component';
import { GetEmployeeDetailsComponent } from './get-employee-details/get-employee-details.component';

import { PracticeWebpageComponent } from './practice-webpage/practice-webpage.component';

import { RouteGuardGuard } from './route-guard.guard';
import { RouteGuardsComponent } from './route-guards/route-guards.component';
import { StudentConsolidatedMarksmemoComponent } from './student-consolidated-marksmemo/student-consolidated-marksmemo.component';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';

const routes: Routes = [
  
  {path:'practicewebpage',component:PracticeWebpageComponent},
  {
    path: 'routeGuards', component: RouteGuardsComponent,
    canActivate: [RouteGuardGuard]
  },
  {path:'custompipetest',component:CustompipeTestComponent},
   {path:'studentconsolidatedmarksmemo',component:StudentConsolidatedMarksmemoComponent},
  { path: 'reactiveforms', component: ReactiveFormsComponent },
  { path: 'templateDrivenForms', component: TemplateDrivenFormsComponent },
  { path: 'getemployeedetails', component: GetEmployeeDetailsComponent },
  { path: 'addemployeedetails', component: AddEmployeeDetailsComponent },
  { path: 'updateemployeedetails/:id', component: UpdateEmployeeDetailsComponent },
  { path: 'viewemployeedetails/:id', component: ViewEmployeeDetailsComponent },
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
