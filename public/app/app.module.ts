/**
 * Created by Vittorio on 24/06/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ArticlesModule } from './articles/articles.module';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        HomeModule,
        ArticlesModule,
        LayoutsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}