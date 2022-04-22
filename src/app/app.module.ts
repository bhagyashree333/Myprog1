import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateReference } from './19_Databinding/bkdatabinding';

import { AppComponent } from './app.component';
import { Component1 } from './bk1_Components/Component1';
//import { LoginPage } from './login assignment/login.comp';
//import { ChildComponentComponent } from './child-component/child-component.component';
//import { ParentComponentComponent } from './parent-component/parent-component.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { StoreComponent } from './store/store.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';

import { MonazDirectiveDirective } from './monaz-directive.directive';
//import { ChildInteractionComponent } from './Assignment/child-interaction/child-interaction.component';

import { SimpleForm2Component } from './simple-form2/simple-form2.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
//import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    TemplateReference,
    //LoginPage,
    //ChildComponentComponent,
    //ParentComponentComponent,
    WarehouseComponent,
    StoreComponent,
    SwitchdemoComponent,
    HighlightDirectiveDirective,
    
    MonazDirectiveDirective,
        // ChildInteractionComponent,
         SimpleForm2Component,
        ReactiveFormComponent,
    //TwowaybindingComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
