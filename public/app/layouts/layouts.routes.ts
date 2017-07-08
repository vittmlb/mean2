/**
 * Created by Vittorio on 07/07/2017.
 */
import { Routes } from '@angular/router';

import { LayoutsComponent } from './layouts.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { TypoComponent } from './typography/typography.component';

export const LayoutsRoutes: Routes = [{
    path: 'layouts',
    component: LayoutsComponent,
    children: [
        {path: 'jumbo', component: JumboComponent},
        {path: 'typo', component: TypoComponent}
    ]
}];