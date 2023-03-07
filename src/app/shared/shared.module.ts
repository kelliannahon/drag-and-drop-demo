import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequiredFieldComponent } from './required-field/required-field.component';
import { RequiredSelectComponent } from './required-select/required-select.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { SharedRoutingModule } from './shared-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    RequiredFieldComponent,
    RequiredSelectComponent,
    DashboardSettingsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    DragDropModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RequiredFieldComponent,
    RequiredSelectComponent,
    DashboardSettingsComponent,
  ],
})
export class SharedModule {}
