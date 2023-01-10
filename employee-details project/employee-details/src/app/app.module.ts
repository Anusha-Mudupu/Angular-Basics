import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetEmployeeDetailsComponent } from './get-employee-details/get-employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeDetailsComponent } from './add-employee-details/add-employee-details.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component'
import { EmployeeDetailsService } from './employee-details.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouteGuardsComponent } from './route-guards/route-guards.component';
import { RouteGuardGuard } from './route-guard.guard';
import { TemplateDrivenFormsComponent } from './angular-forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './angular-forms/reactive-forms/reactive-forms.component';
import { StudentConsolidatedMarksmemoComponent } from './student-consolidated-marksmemo/student-consolidated-marksmemo.component';
import { CustompipeTestComponent } from './custompipe-test/custompipe-test.component';
import { TestPipe } from './test.pipe';
import { ParentComponent } from './component interaction/parent/parent.component';
import { ChildComponent } from './component interaction/child/child.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PracticeWebpageComponent } from './practice-webpage/practice-webpage.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeDetailsComponent,
    AddEmployeeDetailsComponent,
    UpdateEmployeeDetailsComponent,
    ViewEmployeeDetailsComponent,
    RouteGuardsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    StudentConsolidatedMarksmemoComponent,
    CustompipeTestComponent,
    TestPipe,
    ParentComponent,
    ChildComponent,
    PracticeWebpageComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    // MatSlideToggleModule,
    NgxPaginationModule
  ],
  providers: [EmployeeDetailsService,RouteGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
