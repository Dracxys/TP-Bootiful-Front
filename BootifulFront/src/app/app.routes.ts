import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./add/add.component";

const ROUTES: Routes = [
    { path: '', component: AddComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
