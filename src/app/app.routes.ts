import { Routes } from '@angular/router';
import { SubjectComponent } from './components/subject/subject.component';

export const routes: Routes = [
    {
        path: "", component: SubjectComponent
    },
    {
        path: "subject", component: SubjectComponent, title: "Subjects"
    }
];
