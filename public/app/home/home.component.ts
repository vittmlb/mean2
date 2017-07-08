/**
 * Created by Vittorio on 25/06/2017.
 */
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'home-tag',
    templateUrl: './app/home/home.template.html'
})

export class HomeComponent {
    user: any;
    constructor() {}
}