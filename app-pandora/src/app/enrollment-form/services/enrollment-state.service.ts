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
    id: 1,
    title: 'Patient Information',
    completed: true, // Let's assume the first one is complete for the example
    activeIcon: './assets/icons/patient-info-active.svg',
    inactiveIcon:'./assets/icons/patient-info.svg'
  },
  {
    id: 2,
    title: 'Patient Insurance',
    completed: false,
    activeIcon: './assets/icons/patient-insurance-active.svg',
    inactiveIcon:'./assets/icons/patient-insurance.svg'
  },
  {
    id: 3,
    title: 'Clinical Information',
    completed: false,
    activeIcon: './assets/icons/clinical-info-active.svg',
    inactiveIcon:'./assets/icons/clinical-info.svg'
  },
  {
    id: 4,
    title: 'Prescriber Information',
    completed: false,
    activeIcon: './assets/icons/prescriber-info-active.svg',
    inactiveIcon:'./assets/icons/prescriber-info.svg'
  },
  {
    id: 5,
    title: 'Prescription Information',
    completed: false,
    activeIcon: './assets/icons/prescription-info-active.svg',
    inactiveIcon:'./assets/icons/prescription-info.svg'
  },
  {
    id: 6,
    title: 'Authorization',
    completed: false,
    activeIcon: './assets/icons/auth-info-active.svg',
    inactiveIcon:'./assets/icons/auth-info.svg'
  },
];

@Injectable({
  providedIn: 'root'
})
export class EnrollmentStateService {
  private readonly _sections = new BehaviorSubject<NavigationSection[]>(INITIAL_SECTIONS);
  public _activeSectionId = new BehaviorSubject<number>(1);

  // Publicly exposed Observables that components can subscribe to
  public readonly sections$ = this._sections.asObservable();
  public readonly activeSectionId$ = this._activeSectionId.asObservable();

  constructor() { }

  public setActiveSection(sectionId: number) {
    this._activeSectionId.next(sectionId);
  }

  public setSectionCompletion(sectionId: number, completed: boolean): void {
    const currentSections = this._sections.getValue();
    const updatedSections = currentSections.map((section) =>
      section.id === sectionId ? { ...section, completed } : section
    );
    this._sections.next(updatedSections);
  }


}
