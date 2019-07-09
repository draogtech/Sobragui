import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';
import { TemplateService } from './shared/services/template.service';
import { HttpClientModule } from '@angular/common/http';

//Layout Component
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

// Routing Module
import { AppRoutes } from './app.routing';

// App Component
import { AppComponent } from './app.component';
import { ManagePVDComponent } from './manage-pvd/manage-pvd.component';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { useHash: true }),
        SharedModule,
        TemplateModule
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        AuthenticationLayoutComponent,
        ManagePVDComponent
    ],
    providers: [TemplateService],
    bootstrap: [AppComponent]
})


export class AppModule { }
