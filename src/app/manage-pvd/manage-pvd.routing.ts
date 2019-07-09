import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ManagePVDComponent } from './manage-pvd.component';

export const ManagePVDroutes: Routes = [
      {
        path: 'list-pvd',
        component: ManagePVDComponent,
        data: {
            title: 'List PVD'
        }
    }
];
