/**
 * Created by Vittorio on 26/06/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArticlesRoutes } from './articles.routes';
import { ArticlesComponents } from './articles.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ArticlesComponents)
    ],
    declarations: [
        ArticlesRoutes,
        ArticlesComponents,
        ListComponent,
        CreateComponent,
        ViewComponent,
        EditComponent
    ]
})
export class ArticlesModule {}