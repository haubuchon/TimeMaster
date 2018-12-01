import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing }        from './app.routing';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AppComponent } from './app.component';
import { NavigComponent } from './navig/navig.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoDemoComponent } from './kendo-demo/kendo-demo.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule }    from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PlannerComponent } from './planner/planner.component';
import { AxoTestComponent } from './axo-test/axo-test.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigComponent,
    LoginComponent,
    KendoDemoComponent,
    ProductGridComponent,
    PlannerComponent,
    AxoTestComponent,
    UsersComponent,
    ProjectsComponent
  ],
  imports: [
    routing,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule,
    BrowserAnimationsModule,
    FormsModule,
    DateInputsModule,
    GridModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    TreeViewModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
