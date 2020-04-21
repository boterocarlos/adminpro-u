import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
    imports:[
        RouterModule,
        CommonModule
    ],
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        AsideComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        AsideComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})
export class LayoutsModule { }
