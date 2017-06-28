/**
 * Created by Vittorio on 26/06/2017.
 */
import { Component } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
    selector: 'articles',
    template: '<router-outlet></router-outlet>',
    providers: [ArticlesService]
})

export class ArticlesComponent {}