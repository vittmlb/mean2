import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ArticlesComponent } from "./articles.component";
import { ArticlesRoutes } from "./articles.routes";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ArticlesRoutes)
    ],
    declarations: [
        ArticlesComponent,
        ListComponent,
        CreateComponent,
        ViewComponent,
        EditComponent
    ]
})
export class ArticlesModule {}