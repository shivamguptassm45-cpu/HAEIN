import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(m => m.LandingComponent),
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import('./pages/quiz/quiz.component').then(m => m.QuizComponent),
  },
  {
    path: 'loading',
    loadComponent: () =>
      import('./pages/loading/loading.component').then(m => m.LoadingComponent),
  },
  {
    path: 'result',
    loadComponent: () =>
      import('./pages/result/result.component').then(m => m.ResultComponent),
  },
  {
    path: 'trailer',
    loadComponent: () =>
      import('./pages/trailer/trailer.component').then(m => m.TrailerComponent),
  },
  {
    path: 'final',
    loadComponent: () =>
      import('./pages/final/final.component').then(m => m.FinalComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];