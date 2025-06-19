import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationSection } from '../components/form-navigation/form-navigation.component';

export interface Section {
  id: string;
  title: string;
  completed: boolean;
}

const INITIAL_SECTIONS: NavigationSection[] = [
  {
    id: 'patientInfo',
    title: 'Patient Information',
    completed: true, // Let's assume the first one is complete for the example
    activeIcon: 'account_box',
    inactiveIcon:''
  },
  {
    id: 'patientInsurance',
    title: 'Patient Insurance',
    completed: false,
    activeIcon: 'medical_services',
    inactiveIcon:''
  },
  {
    id: 'clinicalInfo',
    title: 'Clinical Information',
    completed: false,
    activeIcon: 'assignment',
    inactiveIcon:''
  },
  {
    id: 'prescriberInfo',
    title: 'Prescriber Information',
    completed: false,
    activeIcon: 'medication',
    inactiveIcon:''
  },
  {
    id: 'prescriptionInfo',
    title: 'Prescription Information',
    completed: false,
    activeIcon: 'description',
    inactiveIcon:''
  },
  {
    id: 'authorization',
    title: 'Authorization',
    completed: false,
    activeIcon: 'verified_user',
    inactiveIcon:''
  },
];

@Injectable({
  providedIn: 'root'
})
export class EnrollmentStateService {
  private readonly _sections = new BehaviorSubject<NavigationSection[]>(INITIAL_SECTIONS);
  public _activeSectionId = new BehaviorSubject<string>('patientInfo');

  // Publicly exposed Observables that components can subscribe to
  public readonly sections$ = this._sections.asObservable();
  public readonly activeSectionId$ = this._activeSectionId.asObservable();

  constructor() { }

  public setActiveSection(sectionId: string) {
    this._activeSectionId.next(sectionId);
  }

  public setSectionCompletion(sectionId: string, completed: boolean): void {
    const currentSections = this._sections.getValue();
    const updatedSections = currentSections.map((section) =>
      section.id === sectionId ? { ...section, completed } : section
    );
    this._sections.next(updatedSections);
  }


}
