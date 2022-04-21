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
    //TwowaybindingComponent

    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
