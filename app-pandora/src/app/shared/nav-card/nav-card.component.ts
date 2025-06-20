import { Component, Input } from '@angular/core';
import { NavigationSection } from '../../enrollment-form/components/form-navigation/form-navigation.component';
import { EnrollmentStateService } from '../../enrollment-form/services/enrollment-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrl: './nav-card.component.scss'
})
export class NavCardComponent {
  @Input() data!: NavigationSection | null;
  activeSectionId:Observable<number>;
  
  constructor(public enrollmentStateService: EnrollmentStateService) {
    // Connect the component's observables to the service's observables.
    this.activeSectionId = this.enrollmentStateService.activeSectionId$;
  }
}
