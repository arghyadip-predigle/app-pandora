import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentFormComponent } from './components/enrollment-form/enrollment-form.component';

const routes: Routes = [
    { path: '', component: EnrollmentFormComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class EnrollmentFormRoutingModule{}