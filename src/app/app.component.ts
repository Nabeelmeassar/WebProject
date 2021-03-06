import {Component} from '@angular/core';
import {AdminServiceService} from './services/admin-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'WebProject';
    imagePathLogo = 'assets/img/logo.png';
    imagePathbg = 'assets/img/background_nav.png';

    constructor(private AdminService: AdminServiceService) {
    }

}
