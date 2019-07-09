import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ManagePVDroutes } from './manage-pvd.routing';
import { ManagePVDComponent } from './manage-pvd.component';

@NgModule({
  declarations: [
    ManagePVDComponent
  ],
  imports: [
    RouterModule.forChild(ManagePVDroutes),
    CommonModule
  ]
})
export class ManagePVDModule { }
