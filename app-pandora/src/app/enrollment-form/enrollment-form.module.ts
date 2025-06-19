import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import for reactive forms

// Import the routing module for this feature
import { EnrollmentFormRoutingModule } from './enrollment-form-routing.module';

// Import the main container component
import { EnrollmentFormComponent } from './components/enrollment-form/enrollment-form.component';

// Import all child components
import { FormNavigationComponent } from './components/form-navigation/form-navigation.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { FormAreaComponent } from './components/form-area/form-area.component';
import { PrescriberInformationComponent } from './components/form-area/prescriber-information/prescriber-information.component';
import { PrescriptionInformationComponent } from './components/form-area/prescription-information/prescription-information.component';
import { AuthorizationComponent } from './components/form-area/authorization/authorization.component';


import { PatientInformationComponent } from './components/form-area/patient-information/patient-information.component';
import { PatientInsuranceComponent } from './components/form-area/patient-insurance/patient-insurance.component';
import { ClinicalInformationComponent } from './components/form-area/clinical-information/clinical-information.component';




@NgModule({
  /**
   * All components that belong to this module must be declared here.
   */
  declarations: [
    FormNavigationComponent,
    PdfViewerComponent,
    FormAreaComponent,
    PatientInformationComponent,
    PatientInsuranceComponent,
    ClinicalInformationComponent,
    EnrollmentFormComponent,
    PrescriberInformationComponent,
    PrescriptionInformationComponent,
    AuthorizationComponent
  ],
  /**
   * Import other modules whose exported components or directives are used in this module's templates.
   */
  imports: [
    CommonModule,          
    ReactiveFormsModule, 
    EnrollmentFormRoutingModule 
  ],
  /**
   * If you were to use these components in another module (like AppModule), you would export them.
   * However, since EnrollmentFormComponent will be loaded via routing, we don't need to export it.
   */
  exports: []
})
export class EnrollmentFormModule { }