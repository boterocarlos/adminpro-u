import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
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
