import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'stories-and-points', loadComponent: () =>
    import('./pages/stories-and-points/stories-and-points.component').then((c) => c.StoriesAndPointsComponent) },
  { path: 'add-story', loadComponent: () =>
    import('./pages/add-story-form/add-story-form.component').then((c) => c.AddStoryFormComponent) },
  { path: 'auto-selected-sprint', loadComponent: () =>
    import('./pages/auto-selected-sprint/auto-selected-sprint.component').then((c) => c.AutoSelectedSprintComponent) },
  { path: 'sprint-calculator', loadComponent: () =>
    import('./pages/sprint-calculator/sprint-calculator.component').then((c) => c.SprintCalculatorComponent) },
  { path: '', redirectTo: '/add-story', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
