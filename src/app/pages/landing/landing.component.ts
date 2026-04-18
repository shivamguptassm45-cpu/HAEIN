import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen flex items-center justify-center p-6 page-transition">
      <div class="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        
        <!-- Main heading -->
        <div class="space-y-4">
          <h1 class="font-playfair text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-600 via-lavender-600 to-primary-600 bg-clip-text text-transparent animate-slide-up">
            Hello Hae-in...
          </h1>
          <p class="text-2xl md:text-3xl text-lavender-700 font-light animate-slide-up" style="animation-delay: 0.2s;">
            I built something just for you 💜
          </p>
        </div>

        <!-- Glass card with message -->
        <div class="glass p-8 md:p-12 rounded-3xl animate-scale-in" style="animation-delay: 0.4s;">
          <p class="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-6">
            Let's find your <span class="font-playfair font-semibold text-lavender-700">perfect story</span>...
          </p>
          <p class="text-lg text-gray-600 font-light">
            A story that speaks to your Heart, Haein ✨
          </p>
        </div>

        <!-- CTA Button -->
        <button
          (click)="startJourney()"
          class="btn-hover px-12 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-primary-500 to-lavender-500 text-white shadow-xl hover:shadow-2xl animate-scale-in border-2 border-primary-400"
          style="animation-delay: 0.6s;">
          Start Your Journey ✨
        </button>

        <!-- Decorative elements -->
        <div class="flex justify-center gap-4 text-4xl opacity-70 animate-pulse-slow" style="animation-delay: 0.8s;">
          <span>🌸</span>
          <span>💜</span>
          <span>✨</span>
        </div>
      </div>
    </div>
  `
})
export class LandingComponent {
  constructor(private router: Router) {}

  startJourney(): void {
    this.router.navigate(['/quiz']);
  }
}