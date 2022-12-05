import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnuComponent } from './anu/anu.component';
import { RajiComponent } from './raji/raji.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductlistService } from './productlist.service';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    AnuComponent,
    RajiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ],
  providers: [ProductService,ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
