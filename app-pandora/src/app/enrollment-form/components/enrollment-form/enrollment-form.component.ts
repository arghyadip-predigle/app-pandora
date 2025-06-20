import { Component } from '@angular/core';
import { NavigationSection } from '../form-navigation/form-navigation.component';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.scss',
  providers: [EnrollmentStateService],
})
export class EnrollmentFormComponent {
  public sections$: Observable<NavigationSection[]>;
  public activeSectionId$: Observable<number>;

  constructor(public enrollmentStateService: EnrollmentStateService) {
    // Connect the component's observables to the service's observables.
    this.sections$ = this.enrollmentStateService.sections$;
    this.activeSectionId$ = this.enrollmentStateService.activeSectionId$;
  }

  public onSectionSelected(sectionId: number): void {
    this.enrollmentStateService.setActiveSection(sectionId);
  }

}
