import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface NavigationSection {
  id: string;          
  title: string;
  completed: boolean;  
  activeIcon: string; 
  inactiveIcon:string;       
}

@Component({
  selector: 'app-form-navigation',
  templateUrl: './form-navigation.component.html',
  styleUrl: './form-navigation.component.scss'
})

export class FormNavigationComponent {
  @Input() sections: NavigationSection[] | null = [];
  @Input() activeSectionId: string | null = null;

  @Output() sectionSelected = new EventEmitter<string>();

  onSelectSection(sectionId: string): void {
      if (sectionId === this.activeSectionId) {
      return;
    }
    this.sectionSelected.emit(sectionId);
  }

}
