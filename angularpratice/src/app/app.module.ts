import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ProductService } from './product.service';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsComponent } from './forms/forms.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';
import { JsonComponent } from './json/json.component';
import { StudentComponent } from './student/student.component';
import { QualicationComponent } from './qualication/qualication.component';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PagenotfoundComponent,
    FormsComponent,
    CrudComponent,
    GetComponent,
    PostComponent,
    UpdateComponent,
    JsonComponent,
    StudentComponent,
    QualicationComponent,
    SubjectComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
