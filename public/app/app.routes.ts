/**
 * Created by Vittorio on 25/06/2017.
 */
import { Routes } from '@angular/router';

import { MenuComponent } from './layouts/menu/menu.component';

export const AppRoutes: Routes = [
    {path: '**', redirectTo: '/'},
    {path: '', component: MenuComponent, outlet: 'menu'}
];