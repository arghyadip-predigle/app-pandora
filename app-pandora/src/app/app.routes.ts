import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    },
    {
        path: 'enrollment-form',
        loadChildren: () => import('./enrollment-form/enrollment-form.module').then((m) => m.EnrollmentFormModule),
      },
];