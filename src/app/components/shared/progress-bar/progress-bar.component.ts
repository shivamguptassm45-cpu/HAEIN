import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  template: `
    <div class="w-full bg-white/30 rounded-full h-2 backdrop-blur-sm overflow-hidden">
      <div 
        class="h-full bg-gradient-to-r from-primary-500 via-lavender-500 to-primary-500 rounded-full transition-all duration-500 ease-out animate-pulse-slow"
        [style.width.%]="progress()">
      </div>
    </div>
    <p class="text-center text-sm text-lavender-700 mt-2 font-medium">
      {{ progress() }}% Complete
    </p>
  `
})
export class ProgressBarComponent {
  progress = input.required<number>();
}