import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { ValidatorsComponent } from './validators/validators.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidatorsComponent,

  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



