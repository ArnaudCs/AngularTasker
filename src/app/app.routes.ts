import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tasks', component: TaskComponent },
];
