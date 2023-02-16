import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TemplaterefvaraibleComponent } from './templaterefvaraible/templaterefvaraible.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ProductComponent } from './ng-content/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TemplaterefvaraibleComponent,
    NgContentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
