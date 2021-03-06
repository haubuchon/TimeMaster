import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { AppComponent } from './app.component';
import { KendoDemoComponent } from './kendo-demo/kendo-demo.component';
import { PlannerComponent } from './planner/planner.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { AxoTestComponent } from './axo-test/axo-test.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDtlComponent } from './project-dtl/project-dtl.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NavigComponent } from './navig/navig.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

import { APP_INITIALIZER } from '@angular/core';
import { AppConfig } from './_services/config.service';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

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
    ProjectsComponent,
    ProjectDtlComponent,
    SchedulerComponent
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
    TreeViewModule,
    NgxSpinnerModule
  ],
  providers: [AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
