/**
 * Created by Vittorio on 27/06/2017.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../articles.service';

@Component({
    selector: 'edit',
    templateUrl: 'app/articles/edit/edit.template.html'
})
export class EditComponent {
    article: any = {};
    paramsObserver: any;
    errorMessage: string;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: ArticlesService
    ) {}

    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['articleId'];
            this._articlesService
                .read(articleId)
                .subscribe(
                    article => this.article = article,
                    error => this._router.navigate(['/articles'])
                );
        });
    }

    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }

    update() {
        this._articlesService.update(this.article).subscribe(
            savedArticle => this._router.navigate(['/articles', savedArticle._id]),
            error => this.errorMessage = error
        );
    }

}