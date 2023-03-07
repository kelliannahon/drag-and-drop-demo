import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
