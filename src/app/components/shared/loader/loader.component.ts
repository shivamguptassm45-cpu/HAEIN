import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center gap-6">
      <!-- Animated hearts loader -->
      <div class="relative w-24 h-24">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="heart-pulse text-6xl animate-pulse">💜</div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center animate-spin" style="animation-duration: 3s;">
          <div class="text-4xl opacity-50">✨</div>
        </div>
      </div>
      
      <!-- Loading dots -->
      <div class="flex gap-2">
        <div class="w-3 h-3 bg-primary-400 rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
        <div class="w-3 h-3 bg-lavender-400 rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
        <div class="w-3 h-3 bg-primary-400 rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
    
    .heart-pulse {
      animation: pulse 2s ease-in-out infinite;
    }
  `]
})
export class LoaderComponent {}