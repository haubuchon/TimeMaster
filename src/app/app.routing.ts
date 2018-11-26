import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { KendoDemoComponent } from './kendo-demo/kendo-demo.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { PlannerComponent } from './planner/planner.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'kendo-demo', component: KendoDemoComponent, canActivate: [AuthGuard] },
    { path: 'grid', component: ProductGridComponent, canActivate: [AuthGuard] },
    { path: 'planner', component: PlannerComponent, canActivate: [AuthGuard] },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);