/**
 * Created by Vittorio on 07/07/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutsRoutes } from './layouts.routes';
import { LayoutsComponent } from './layouts.component';
import { MenuComponent } from './menu/menu.component';
import { JumboComponent } from './jumbo/jumbo.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LayoutsRoutes)
    ],
    declarations: [
        LayoutsComponent,
        MenuComponent,
        JumboComponent
    ]
})
export class LayoutsModule {}