import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Authentication Components
import { SignInComponent } from './sign-in/sign-in.component';
// import { SignIn2Component } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Page500Component } from './500/500.component';
import { Page404Component } from './404/404.component';


export const AuthenticationRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sign-in',
                component: SignInComponent,
                data: {
                    title: 'sign-in'
                }
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
                data: {
                    title: 'sign-up'
                }
            },
            {
                path: '500',
                component: Page500Component,
                data: {
                    title: '500'
                }
            },
            {
                path: '404',
                component: Page404Component,
                data: {
                    title: '404'
                }
            }
        ]
    }
];

