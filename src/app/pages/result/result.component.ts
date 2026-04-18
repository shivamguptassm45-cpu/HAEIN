import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DramaRecommendation } from '../../models/quiz.model';
import { queenOfTears } from '../../data/drama-data';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen flex items-center justify-center p-6 page-transition">
      <div class="max-w-4xl w-full space-y-8">
        
        <!-- Header message -->
        <div class="text-center space-y-4 animate-fade-in">
          <h1 class="font-playfair text-4xl md:text-5xl font-bold text-lavender-700">
            Haein, we found something that matches your heart 💜
          </h1>
        </div>

        <!-- Drama card -->
        <div class="glass p-8 md:p-12 rounded-3xl space-y-8 animate-scale-in" style="animation-delay: 0.2s;">
          
          <!-- Title and poster -->
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Poster -->
            <div class="md:col-span-1">
              <div class="glass-dark rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  [src]="drama().poster" 
                  [alt]="drama().title"
                  class="w-full h-auto object-cover" />
              </div>
            </div>

            <!-- Info -->
            <div class="md:col-span-2 space-y-6">
              <div>
                <h2 class="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {{ drama().title }}
                </h2>
                <p class="text-2xl text-lavender-600 font-light mb-4">
                  {{ drama().koreanTitle }}
                </p>
                <div class="flex flex-wrap gap-2">
                  @for (genre of drama().genre; track genre) {
                    <span class="px-3 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium">
                      {{ genre }}
                    </span>
                  }
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {{ drama().year }}
                  </span>
                </div>
              </div>

              <p class="text-gray-700 leading-relaxed text-lg">
                {{ drama().description }}
              </p>
            </div>
          </div>

          <!-- Why you'll love this -->
          <div class="border-t border-white/30 pt-8 space-y-6">
            <h3 class="font-playfair text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-3">
              <span class="text-3xl">✨</span>
              Why you'll love this, Haein
            </h3>
            
            <div class="grid md:grid-cols-2 gap-4">
              @for (reason of drama().whyYouWillLove; track reason; let i = $index) {
                <div class="glass-dark p-6 rounded-xl card-hover">
                  <div class="flex gap-4">
                    <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-lavender-500 rounded-full flex items-center justify-center text-white font-bold">
                      {{ i + 1 }}
                    </div>
                    <p class="text-gray-700 leading-relaxed">{{ reason }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- CTA Button -->
          <div class="text-center pt-6">
            <button
              (click)="watchTrailer()"
              class="btn-hover px-10 py-4 rounded-full text-xl font-semibold bg-gradient-to-r from-primary-500 to-lavender-500 text-white shadow-lg">
              Watch Trailer 🎬
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ResultComponent implements OnInit {
  drama = signal<DramaRecommendation>(queenOfTears);

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Drama is already set via signal initialization
  }

  watchTrailer(): void {
    this.router.navigate(['/trailer']);
  }
}