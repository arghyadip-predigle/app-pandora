  import { MatRadioModule } from '@angular/material/radio';
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { MatIcon, MatIconModule } from '@angular/material/icon';
  import { MatPaginatorModule } from '@angular/material/paginator';
  import { MatSortModule } from '@angular/material/sort';
  import { MatTableModule } from '@angular/material/table';
  import { MatInputModule } from '@angular/material/input';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatSelectModule } from '@angular/material/select';
  import { MatCheckboxModule } from '@angular/material/checkbox';
  import { MatMenuModule } from '@angular/material/menu';
  import { MatDialogModule } from '@angular/material/dialog';
  import { MatButtonModule } from '@angular/material/button';
  import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatDivider } from '@angular/material/divider';
  import { MatCardModule } from '@angular/material/card';
  import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
  import { MatSliderModule } from '@angular/material/slider';
  import { MatProgressBarModule } from '@angular/material/progress-bar';
  import { MatDatepickerModule } from '@angular/material/datepicker';
  import { MatNativeDateModule } from '@angular/material/core';
  import {MatStepperModule} from '@angular/material/stepper';
  import { MatTooltipModule } from '@angular/material/tooltip';


const materialModules: any = [
    MatIconModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDivider,
    MatCardModule,
    MatTab,
    MatTabGroup,
    MatCardModule,
    MatRadioModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIcon,
    MatTooltipModule,
    MatTabsModule,
    MatStepperModule
  ];

  @NgModule({
    declarations: [],
    imports: [CommonModule, materialModules],
    exports: [materialModules],
  })
  export class MaterialModule {}
