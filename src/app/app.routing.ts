import { Routes } from '@angular/router';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'authentication/sign-in',
        pathMatch: 'full',
    },
    {
        path: '',
        component: CommonLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'manage-pvd',
                loadChildren: './manage-pvd/manage-pvd.module#ManagePVDModule'
            }
        ]
    },
    {
        path: '',
        component: AuthenticationLayoutComponent,
        children: [
            {
                path: 'authentication',
                loadChildren: './extras/authentication.modules#AuthenticationModule'
            }
        ]
    }
];

